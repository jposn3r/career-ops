/**
 * Parse data/applications.md markdown table into an array of application objects.
 * Format: | # | Date | Company | Role | Score | Status | PDF | Report | Notes |
 */
export default function parseTracker(raw) {
  if (!raw) return [];

  const lines = raw.split('\n').filter((line) => {
    const trimmed = line.trim();
    // Must start with |, must not be a separator row (all dashes/pipes/spaces)
    return trimmed.startsWith('|') && !/^\|[\s\-|]+\|$/.test(trimmed);
  });

  // Skip the header row (first qualifying line)
  const dataLines = lines.slice(1);

  return dataLines
    .map((line) => {
      const cells = line
        .split('|')
        .slice(1, -1) // drop leading/trailing empty strings from split
        .map((c) => c.trim());

      if (cells.length < 9) return null;

      const [num, date, company, role, score, status, pdf, report, notes] = cells;

      // Extract report filename from markdown link: [001](reports/001-netflix-2026-04-12.md)
      let reportFilename = '';
      const linkMatch = report.match(/\[.*?\]\((?:reports\/)?(.*?)\.md\)/);
      if (linkMatch) {
        reportFilename = linkMatch[1];
      }

      return {
        num: num.trim(),
        date,
        company,
        role,
        score,
        status,
        pdf,
        report: reportFilename,
        notes,
      };
    })
    .filter(Boolean);
}
