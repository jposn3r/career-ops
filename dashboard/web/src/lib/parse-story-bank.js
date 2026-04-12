/**
 * Parse interview-prep/story-bank.md into an array of STAR+R story objects.
 */
export default function parseStoryBank(raw) {
  if (!raw) return [];

  // Split on ### or ## Story headers
  const blocks = raw.split(/^(?=###\s|##\s+Story)/m).filter((b) => b.trim());

  return blocks
    .map((block) => {
      const lines = block.split('\n');
      const headerLine = lines[0] || '';

      // Skip non-story headers (like top-level # title)
      if (!headerLine.match(/^#{2,3}\s/)) return null;

      // Extract theme from [brackets] in title
      const themeMatch = headerLine.match(/\[([^\]]+)\]/);
      const theme = themeMatch ? themeMatch[1].trim() : '';

      // Title is the text after brackets (or the whole header if no brackets)
      let title = headerLine.replace(/^#{2,3}\s+/, '').trim();
      if (themeMatch) {
        title = title.replace(/\[([^\]]+)\]\s*/, '').trim();
        // Remove leading separators like - or :
        title = title.replace(/^[-:]\s*/, '').trim();
      }

      const body = lines.slice(1).join('\n');

      // Extract fields with **FieldName:** pattern
      const field = (name) => {
        const re = new RegExp(`\\*\\*${name}:\\*\\*\\s*(.+?)(?=\\n\\*\\*|$)`, 'is');
        const m = body.match(re);
        return m ? m[1].trim() : '';
      };

      const source = field('Source');
      const situation = field('S') || field('Situation');
      const task = field('T') || field('Task');
      const action = field('A') || field('Action');
      const result = field('R') || field('Result');
      const reflection = field('Reflection');

      // Tags from "Best for questions about:" line
      const tagsMatch = body.match(
        /\*\*Best for questions about:\*\*\s*(.+)/i
      );
      const tags = tagsMatch
        ? tagsMatch[1]
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
        : [];

      return { theme, title, source, situation, task, action, result, reflection, tags };
    })
    .filter(Boolean);
}
