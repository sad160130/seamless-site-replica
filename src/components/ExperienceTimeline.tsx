import React from "react";

const experience = [
  {
    role: "Senior SEO Manager",
    company: "Capital One (Shopping)",
    location: "Remote",
    dates: "Dec 2024 – Present",
    bullets: [
      "Led organic growth strategy driving 4.7M users and 7.4M sessions in 2025 (+50.9% YoY sessions, +36.6% users).",
      "Spearheaded mobile-first SEO, growing mobile users by +158.4% and mobile sessions by +161.4% YoY.",
      'Optimized "All Store Pages" content architecture, securing 1.5M users and 1.7M sessions (+43.4% YoY).',
    ],
  },
  {
    role: "Technical SEO Manager",
    company: "CoinDesk Inc.",
    location: "New York City, NY",
    dates: "Aug 2021 – Dec 2024",
    bullets: [
      'Maintained #1 rankings for "Bitcoin Price" and 14K+ high-volume keywords, driving 15M+ monthly organic visits (47% MoM growth).',
      "Elevated domain authority (DR 90) via advanced link-building, topical clustering, and E-E-A-T strategies.",
      "Resolved critical indexing and crawling issues on a million+ page site and improved Core Web Vitals.",
    ],
  },
  {
    role: "Associate, Marketing Acquisition",
    company: "Goldman Sachs Bank",
    location: "Chicago, IL",
    dates: "Oct 2020 – Mar 2021",
    bullets: [
      "Managed cross-channel acquisition for a $10B savings business, increasing customer adoption and traffic by 30% MoM.",
      "Maintained governance standards across assets and partners, using SQL, Tableau, and Google Data Studio for optimization.",
    ],
  },
  {
    role: "Digital Marketing Senior Associate",
    company: "JPMorgan Chase",
    location: "Ohio",
    dates: "Jan 2020 – Mar 2020",
    bullets: [
      "Managed a $70M digital budget for Business Banking, driving 25% YoY revenue growth through SEM/SEO funnel optimization.",
      "Led A/B and multivariate testing using Adobe Target / Google Optimize; secured a 25% budget increase based on performance.",
    ],
  },
  {
    role: "Marketing Manager",
    company: "K12 Inc.",
    location: "Herndon, VA",
    dates: "Jun 2019 – Dec 2019",
    bullets: [
      "Improved key KPIs by 25% via deep visitor behavior analysis and pain-point removal across the digital experience.",
      "Increased marketing operational efficiency by 25% via centralized Tableau dashboards and predictive models.",
    ],
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-16 bg-white"
    >
      <div className="container-custom">
        <h2
          id="experience-title"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
        >
          Experience
        </h2>
        <p className="mt-2 text-xl font-semibold text-slate-800 sm:text-2xl">
          A track record across finance, media, and technology
        </p>

        <div className="mt-6 space-y-6 border-l border-slate-200 pl-4 md:pl-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="relative rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-100"
            >
              <div className="absolute -left-[13px] top-5 h-2.5 w-2.5 rounded-full border border-amber-500 bg-amber-400" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-800">
                  {job.role}
                </h3>
                <p className="text-xs font-medium text-amber-700">{job.dates}</p>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-700">
                {job.company} · {job.location}
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                {job.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
