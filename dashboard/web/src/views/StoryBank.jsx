import { useMemo, useState } from 'react';
import { storyBankRaw } from '../lib/loaders';
import parseStoryBank from '../lib/parse-story-bank';

const THEME_COLORS = {
  Leadership: '#10b981',
  Change: '#f59e0b',
  'Cross-Functional': '#3b82f6',
  Technical: '#8b5cf6',
  '0-to-1': '#ef4444',
  People: '#ec4899',
  Data: '#06b6d4',
  Platform: '#6366f1',
};

function themeColor(theme) {
  if (!theme) return '#6b7280';
  // Check for partial match (theme might be "Leadership & Change")
  for (const [key, color] of Object.entries(THEME_COLORS)) {
    if (theme.toLowerCase().includes(key.toLowerCase())) return color;
  }
  return '#6b7280';
}

function StoryCard({ story }) {
  const [expanded, setExpanded] = useState(false);
  const color = themeColor(story.theme);

  return (
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/[0.07] transition-all cursor-pointer"
      onClick={() => setExpanded((e) => !e)}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 min-w-0">
          {story.theme && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-mono border inline-block mb-2"
              style={{
                background: `${color}15`,
                color,
                borderColor: `${color}30`,
              }}
            >
              {story.theme}
            </span>
          )}
          <h3 className="text-white text-sm font-medium">{story.title}</h3>
          {story.source && (
            <p className="text-gray-500 text-xs mt-1 font-mono">{story.source}</p>
          )}
        </div>
        <span className="text-gray-600 text-xs ml-2 flex-shrink-0">{expanded ? '-' : '+'}</span>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-white/10 space-y-2 text-sm">
          {story.situation && (
            <div>
              <span className="text-amber-400 text-xs font-mono">S:</span>
              <p className="text-gray-300 text-xs mt-0.5">{story.situation}</p>
            </div>
          )}
          {story.task && (
            <div>
              <span className="text-amber-400 text-xs font-mono">T:</span>
              <p className="text-gray-300 text-xs mt-0.5">{story.task}</p>
            </div>
          )}
          {story.action && (
            <div>
              <span className="text-amber-400 text-xs font-mono">A:</span>
              <p className="text-gray-300 text-xs mt-0.5">{story.action}</p>
            </div>
          )}
          {story.result && (
            <div>
              <span className="text-amber-400 text-xs font-mono">R:</span>
              <p className="text-gray-300 text-xs mt-0.5">{story.result}</p>
            </div>
          )}
          {story.reflection && (
            <div>
              <span className="text-purple-400 text-xs font-mono">Reflection:</span>
              <p className="text-gray-300 text-xs mt-0.5">{story.reflection}</p>
            </div>
          )}
        </div>
      )}

      {story.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {story.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StoryBank() {
  const stories = useMemo(() => parseStoryBank(storyBankRaw), []);

  if (!stories.length) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold text-white mb-2">Story Bank</h1>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">
              No stories yet. Stories are accumulated in{' '}
              <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">
                interview-prep/story-bank.md
              </code>{' '}
              as you evaluate offers.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white">Story Bank</h1>
          <span className="text-gray-500 text-xs font-mono">
            {stories.length} STAR+R stories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {stories.map((story, i) => (
            <StoryCard key={i} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
