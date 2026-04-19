// Shared minimal brief renderer used by lightweight role files.
// Displays meta info, strengths, gaps, verdict + a link to the JD.
// Upgrade a role to a full brief by writing a dedicated component
// (like netflix-em-tv-product-ui-brief.jsx).

function Section({ title, color, children }) {
  return (
    <div className="mb-6">
      <div
        className="text-xs tracking-widest font-mono mb-3"
        style={{ color }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function Badge({ color, children }) {
  const classes = {
    green: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    red: "bg-red-500/15 text-red-300 border-red-500/30",
    gray: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  };
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full border font-mono ${classes[color] || classes.gray}`}
    >
      {children}
    </span>
  );
}

export default function MiniBrief({ meta }) {
  const fitVal = parseInt(meta.fit);
  const fitColor = fitVal >= 85 ? "#10b981" : fitVal >= 60 ? "#f59e0b" : "#ef4444";
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(160deg,#090909 0%,#0e0e0e 50%,#0a0a0a 100%)",
        fontFamily: "'IBM Plex Sans',sans-serif",
      }}
    >
      <div className="border-b border-white/10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: meta.color }}
            />
            <span className="text-xs font-mono tracking-widest" style={{ color: meta.color }}>
              {meta.status?.toUpperCase() || "RESEARCH"}
            </span>
          </div>
          <h1
            className="text-2xl md:text-3xl font-light text-white mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            {meta.company} · {meta.title}
          </h1>
          <p className="text-gray-500 text-sm">
            <span style={{ color: fitColor }}>{meta.fit} fit</span> · {meta.comp} · {meta.loc}
          </p>
          {meta.url && (
            <a
              href={meta.url}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 text-xs font-mono mt-3 inline-block hover:text-amber-300"
            >
              → Open JD
            </a>
          )}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Section title="VERDICT" color="#f59e0b">
            <div
              className="border rounded-lg p-4"
              style={{
                background: `${fitColor}10`,
                borderColor: `${fitColor}30`,
                color: fitColor,
              }}
            >
              <p className="text-sm leading-relaxed">{meta.verdict}</p>
            </div>
          </Section>

          <Section title="STRENGTHS" color="#10b981">
            {(meta.strengths || []).map((s, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <span className="text-emerald-400 mt-0.5 text-xs">✓</span>
                <span className="text-gray-300 text-sm">{s}</span>
              </div>
            ))}
          </Section>

          {meta.gaps && meta.gaps.length > 0 && (
            <Section title="GAPS" color="#f59e0b">
              {meta.gaps.map((g, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 mb-2 border border-white/10 rounded-lg p-3"
                >
                  <Badge color={g.s === "HIGH" ? "red" : g.s === "MEDIUM" ? "amber" : "green"}>
                    {g.s}
                  </Badge>
                  <span className="text-gray-300 text-sm flex-1">{g.g}</span>
                </div>
              ))}
            </Section>
          )}

          <Section title="TAGS" color="#6b7280">
            <div className="flex flex-wrap gap-2">
              {(meta.tags || []).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full border font-mono text-gray-400 border-white/10 bg-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>

          <div className="border-t border-white/10 pt-6 mt-8">
            <p className="text-gray-600 text-xs font-mono">
              Lightweight brief — upgrade to full brief (14-day plan, STAR stories, outreach
              templates) if this role moves forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
