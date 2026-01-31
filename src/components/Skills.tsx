import React from "react";

const Skills: React.FC = () => {
  const groups = [
    {
      title: "Search & Strategy",
      items: [
        "SEO & GEO (Generative Engine Optimization)",
        "Technical SEO & site architecture",
        "Keyword research & content strategy",
        "Link-building & authority development",
        "Mobile optimization",
      ],
    },
    {
      title: "Analytics & Tooling",
      items: [
        "GA4, Google Search Console, Google Trends",
        "Adobe Analytics",
        "Ahrefs, SEMrush, Screaming Frog, DeepCrawl",
        "Tableau, Power BI, SQL",
        "Tealium, Agency Analytics",
      ],
    },
    {
      title: "Marketing Operations",
      items: [
        "Cross-functional leadership",
        "Agile / Scrum",
        "A/B & multivariate testing",
        "CRO & funnel optimization",
        "Agency & stakeholder management",
      ],
    },
    {
      title: "Tech & Platforms",
      items: [
        "HTML/CSS, basic JavaScript",
        "WordPress, HubSpot, Marketo, Eloqua",
        "Salesforce, Adobe Experience Manager",
        "Optimizely, Kenshoo",
      ],
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-16 bg-white"
    >
      <div className="container-custom">
        <h2
          id="skills-title"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
        >
          Skills
        </h2>
        <p className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
          The stack behind the results
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
