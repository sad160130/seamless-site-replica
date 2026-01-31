import React from "react";

export const Highlights: React.FC = () => {
  const items = [
    {
      title: "50.9% YoY session growth at Capital One Shopping",
      body: "Drove 7.4M sessions and 4.7M users in 2025 through technical SEO, content architecture, and mobile-first optimization.",
    },
    {
      title: "#1 rankings for high-volume crypto terms at CoinDesk",
      body: 'Achieved and maintained rank #1 for "Bitcoin Price" and 14K+ other high-volume terms, driving 15M+ monthly organic visits.',
    },
    {
      title: "SEO & acquisition in highly regulated environments",
      body: "Executed SEO and marketing acquisition strategies for Goldman Sachs and JPMorgan Chase, adhering to strict governance and regulatory standards.",
    },
    {
      title: "End-to-end growth marketing across channels",
      body: "Blended SEO with SEM, paid social, CRO, and analytics for brands like K12, McAfee, Shutterstock, and more.",
    },
  ];

  return (
    <section id="highlights" aria-labelledby="highlights-title" className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2
              id="highlights-title"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
            >
              Highlights
            </h2>
            <p className="mt-2 text-xl font-semibold text-slate-800 sm:text-2xl">
              A decade of compounding SEO impact
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
