import React from "react";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/40 py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Senior SEO Leader · Financial Services, Media, Technology
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
              Driving massive organic growth for
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"> high-stakes brands</span>.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Results-oriented Senior SEO Manager with 10+ years of experience executing measurable organic
              campaigns for global financial services, media, and technology brands. Deep expertise in
              Technical SEO, schema markup, content architecture, and emerging Generative Engine Optimization (GEO).
            </p>

            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              <HighlightStat
                label="Capital One Shopping"
                value="+50.9%"
                description="YoY sessions growth (7.4M sessions, 4.7M users in 2025)"
              />
              <HighlightStat
                label="CoinDesk"
                value="#1 Rank"
                description={'"Bitcoin Price" & 14K+ high-volume keywords, 15M+ monthly visits'}
              />
              <HighlightStat
                label="Regulated FS"
                value="Goldman • JPMC"
                description="SEO & acquisition in highly governed, regulated environments"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/document/d/1VJbSWbDYOidwwAaXxlFnaxfwbdR1WyQm/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-amber-200 transition hover:bg-amber-500"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center rounded-full border border-amber-500/70 bg-amber-50 px-5 py-2.5 text-sm font-medium text-amber-900 shadow-sm transition hover:bg-amber-100"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-amber-50/60 to-white p-6 shadow-sm">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-amber-700">
              Current Role
            </h2>
            <p className="text-sm font-semibold text-slate-900">
              Senior SEO Manager · Capital One (Remote)
            </p>
            <p className="text-sm text-slate-600">
              Leading organic growth strategy for Capital One Shopping, bridging technical SEO execution with
              editorial strategy to drive high-intent traffic across desktop and mobile.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li>• Mobile-first strategy driving +158% YoY mobile users.</li>
              <li>
                • Technical SEO & GEO: audits, schema, and architecture for AI-driven search.
              </li>
              <li>
                • Cross-functional collaboration with Product, Engineering, and Brand to align SEO with
                acquisition goals.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

const HighlightStat: React.FC<{
  label: string;
  value: string;
  description: string;
}> = ({ label, value, description }) => (
  <div className="rounded-xl border border-amber-100 bg-white/80 p-4 shadow-sm">
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
      {label}
    </p>
    <p className="mt-2 text-2xl font-semibold text-slate-800">{value}</p>
    <p className="mt-1 text-xs text-slate-600">{description}</p>
  </div>
);

export default Hero;
