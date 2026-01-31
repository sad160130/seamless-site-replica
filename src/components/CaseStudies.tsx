import React from "react";

const caseStudies = [
  {
    label: "Capital One Shopping · Growth & Mobile",
    title: "Scaling sessions by 50.9% YoY with mobile-first SEO",
    impact:
      "7.4M sessions and 4.7M users in 2025, with mobile users up +158.4% and mobile sessions +161.4% YoY.",
    details: [
      "Re-architected SEO for All Store Pages to capture high-intent shopping queries.",
      "Implemented technical fixes and schema to improve crawlability and SERP richness.",
      "Aligned content and technical roadmaps with Product and Brand to drive sustainable growth.",
    ],
  },
  {
    label: "CoinDesk · Authority & Rankings",
    title: "Owning the crypto SERP for high-value queries",
    impact:
      'Ranked #1 for "Bitcoin Price" and 14K+ other keywords, driving 15M+ monthly organic visits and 47% MoM traffic growth.',
    details: [
      "Resolved indexing and crawl inefficiencies across a million+ page site.",
      "Implemented topical clustering and E-E-A-T-oriented content frameworks.",
      "Enhanced Core Web Vitals and UX for volatile traffic surges during market events.",
    ],
  },
  {
    label: "Goldman Sachs & JPMorgan Chase · Regulated FS",
    title: "Driving acquisition in highly governed environments",
    impact:
      "Improved acquisition and revenue while maintaining strict compliance, governance, and brand safety.",
    details: [
      "Executed SEO and acquisition campaigns for a $10B savings business and a $70M Business Banking budget.",
      "Used SQL, Tableau, and Tealium to align performance insights with risk and compliance requirements.",
      "Partnered with internal and agency teams to ship SEO and SEM initiatives under audit-ready controls.",
    ],
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="py-16 bg-slate-50"
    >
      <div className="container-custom">
        <h2
          id="case-studies-title"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
        >
          Case Studies
        </h2>
        <p className="mt-2 text-xl font-semibold text-slate-800 sm:text-2xl">
          Selected SEO & growth wins
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              className="flex flex-col rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-amber-50/40 to-white p-5 shadow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                {cs.label}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-800">
                {cs.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-slate-800">
                {cs.impact}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                {cs.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
