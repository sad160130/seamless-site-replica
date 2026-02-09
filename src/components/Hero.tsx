import React from "react";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#0c2d2a] py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-slate-600/20 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400">
              Strategic SEO Authority · 20+ Years · Interlinkmap Founder
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Building strategic authority through
              <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent"> Technical SEO mastery</span>.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Seasoned SEO strategist with 20+ years of experience architecting measurable organic
              growth for global financial services, media, and technology brands. Deep expertise in
              Technical SEO, schema markup, content architecture, and pioneering Generative Engine Optimization (GEO)
              through the Interlinkmap venture.
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
                href="https://drive.google.com/file/d/1J1wR3k5NpM5yDPX_ZUiLsEDIdA0QCggb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-teal-900/40 transition hover:bg-teal-500"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center rounded-full border border-teal-500/40 bg-teal-950/40 px-5 py-2.5 text-sm font-medium text-teal-200 shadow-sm transition hover:bg-teal-900/50"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-teal-500/20 bg-gradient-to-br from-slate-800/80 via-teal-950/30 to-slate-800/80 p-6 shadow-sm animate-card-deep">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-teal-400">
              Current Role
            </h2>
            <p className="text-sm font-semibold text-slate-100">
              Senior SEO Manager · Capital One (Remote)
            </p>
            <p className="text-sm text-slate-400">
              Leading organic growth strategy for Capital One Shopping, bridging technical SEO execution with
              editorial strategy to drive high-intent traffic across desktop and mobile.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
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
  <div className="rounded-xl border border-teal-500/20 bg-slate-800/60 p-4 shadow-sm animate-card-deep">
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-400">
      {label}
    </p>
    <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p>
    <p className="mt-1 text-xs text-slate-400">{description}</p>
  </div>
);

export default Hero;
