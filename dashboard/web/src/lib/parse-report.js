/**
 * Parse an evaluation report markdown file into structured sections.
 * Extracts header metadata and A-H section blocks.
 */
export default function parseReport(raw) {
  if (!raw) return null;

  const lines = raw.split('\n');

  // Extract title from first # heading
  let title = '';
  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.replace(/^#\s+/, '').trim();
      break;
    }
  }

  // Extract header metadata
  const extract = (label) => {
    const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`, 'i');
    for (const line of lines) {
      const m = line.match(re);
      if (m) return m[1].trim();
    }
    return '';
  };

  const date = extract('Date');
  const score = extract('Score');
  const archetype = extract('Archetype');
  const legitimacy = extract('Legitimacy');
  const url = extract('URL');

  // Split body into sections on ## headers (A through H, or Keywords)
  const sectionRegex = /^##\s+([A-H]\)|Keywords)/;
  const sections = [];
  let currentSection = null;

  for (const line of lines) {
    const match = line.match(sectionRegex);
    if (match) {
      if (currentSection) {
        sections.push(currentSection);
      }
      const headerText = line.replace(/^##\s+/, '').trim();
      const idMatch = headerText.match(/^([A-H])\)/);
      currentSection = {
        id: idMatch ? idMatch[1] : 'Keywords',
        title: headerText,
        content: '',
      };
    } else if (currentSection) {
      currentSection.content += line + '\n';
    }
  }
  if (currentSection) {
    sections.push(currentSection);
  }

  // Trim trailing whitespace from section content
  for (const s of sections) {
    s.content = s.content.trimEnd();
  }

  return { title, date, score, archetype, legitimacy, url, sections };
}
