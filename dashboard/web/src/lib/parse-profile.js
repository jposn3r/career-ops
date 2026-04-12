import yaml from 'js-yaml';

/**
 * Parse profile.yml string into a JS object.
 */
export default function parseProfile(raw) {
  if (!raw) return null;
  try {
    return yaml.load(raw);
  } catch {
    return null;
  }
}
