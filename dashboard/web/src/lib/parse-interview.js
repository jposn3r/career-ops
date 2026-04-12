/**
 * Parse interview prep markdown files into sections split on ## headers.
 */
export default function parseInterview(raw) {
  if (!raw) return [];

  const sections = [];
  let current = null;

  for (const line of raw.split('\n')) {
    if (line.startsWith('## ')) {
      if (current) sections.push(current);
      current = {
        title: line.replace(/^##\s+/, '').trim(),
        content: '',
      };
    } else if (current) {
      current.content += line + '\n';
    }
  }
  if (current) sections.push(current);

  // Trim trailing whitespace from content
  for (const s of sections) {
    s.content = s.content.trimEnd();
  }

  return sections;
}
