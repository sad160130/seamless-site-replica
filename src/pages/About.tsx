import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/40 pt-20 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-40 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              About Snket Desai
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Senior SEO leader at the intersection of
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"> finance, media, and technology</span>.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              I help high‑stakes brands turn complex search environments into predictable, compounding
              growth. From Capital One Shopping and CoinDesk to Goldman Sachs and JPMorgan Chase, my
              work lives where organic traffic, governance, and revenue all matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.2fr)]">
            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Who I am
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                  I am a Senior SEO Manager with 10+ years of experience designing and executing
                  measurable organic growth programs for global financial services, media, and technology
                  brands. My work spans technical SEO, schema markup, content architecture, and
                  Generative Engine Optimization (GEO) as search shifts toward AI‑powered experiences.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                  I’m comfortable operating in highly regulated environments—Goldman Sachs, JPMorgan
                  Chase, and other financial services organizations—where governance, audit readiness,
                  and brand safety are just as important as acquisition volume.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  How I work
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                  My approach blends deep technical SEO with product thinking and cross‑functional
                  collaboration. I partner with Product, Engineering, Brand, and Analytics to ensure that
                  every feature launch, content initiative, and site change is SEO‑ready and aligned to
                  business targets.
                </p>
                <ul className="mt-3 space-y-2 text-xs text-slate-700 md:text-sm">
                  <li>
                    • <span className="font-semibold">Technical depth:</span> crawl/index audits, Core Web Vitals, structured data,
                    and large‑scale architecture for million‑page sites.
                  </li>
                  <li>
                    • <span className="font-semibold">Strategic clarity:</span> translating search opportunity into roadmaps and
                    narratives that resonate with leadership.
                  </li>
                  <li>
                    • <span className="font-semibold">Execution discipline:</span> rigorous prioritization, measurement, and
                    iteration across experiments and releases.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Career snapshot
                </h2>
                <div className="mt-3 space-y-4 text-xs text-slate-700 md:text-sm">
                  <div>
                    <p className="font-semibold text-slate-900">
                      Senior SEO Manager · Capital One (Shopping) · Remote
                    </p>
                    <p className="text-[11px] text-slate-500">Dec 2024 – Present</p>
                    <ul className="mt-1 space-y-1">
                      <li>
                        • Drove 4.7M users and 7.4M sessions in 2025, delivering +50.9% YoY session growth
                        and +36.6% user growth.
                      </li>
                      <li>
                        • Led mobile‑first SEO strategy, increasing mobile users by +158.4% and mobile
                        sessions by +161.4% YoY.
                      </li>
                      <li>
                        • Optimized All Store Pages architecture to capture high‑intent commerce queries.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Technical SEO Manager · CoinDesk Inc. · New York City, NY
                    </p>
                    <p className="text-[11px] text-slate-500">Aug 2021 – Dec 2024</p>
                    <ul className="mt-1 space-y-1">
                      <li>
                        • Achieved and maintained #1 rankings for "Bitcoin Price" and 14K+ high‑volume
                        crypto terms, driving 15M+ monthly organic visits.
                      </li>
                      <li>
                        • Elevated domain rating to 90 through topical clustering, E‑E‑A‑T, and strategic
                        link‑building.
                      </li>
                      <li>
                        • Resolved indexing and crawl issues across a million+ page site and improved
                        Core Web Vitals.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Acquisition & Growth · Goldman Sachs, JPMorgan Chase, K12, McAfee, Shutterstock
                    </p>
                    <p className="text-[11px] text-slate-500">2017 – 2021</p>
                    <ul className="mt-1 space-y-1">
                      <li>
                        • Managed acquisition programs for a $10B savings business at Goldman Sachs and a
                        $70M Business Banking budget at JPMorgan Chase.
                      </li>
                      <li>
                        • Drove 25–30% gains in revenue and adoption through SEM, SEO, and funnel
                        optimization.
                      </li>
                      <li>
                        • Built dashboards and models in Tableau and SQL to turn complex performance data
                        into clear decisions.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </motion.div>

            {/* Side panel */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-amber-50/60 to-white p-6 shadow-sm"
            >
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Core strengths
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  <li>• Technical SEO, schema, and large‑scale architecture</li>
                  <li>• GEO and AI‑forward search strategy</li>
                  <li>• Cross‑functional leadership with Product & Engineering</li>
                  <li>• Governance and compliance in financial services</li>
                  <li>• Analytics: GA4, Adobe, GSC, Ahrefs, SEMrush, Tableau, SQL</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Education & credentials
                </h2>
                <div className="mt-3 space-y-3 text-xs text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">
                      M.S., Information Technology and Management
                    </p>
                    <p>The University of Texas at Dallas · GPA 3.77</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      B.E., Computer Science
                    </p>
                    <p>University of Mumbai, India</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Certifications</p>
                    <p>Google Analytics, Google Ads (Search & Display)</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Outside of work
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-slate-700">
                  I actively volunteer as Chairperson for Paid Search, SEO, and Social Media at Humanity
                  Roads, helping increase volunteer sign‑ups and digital visibility through data‑driven
                  campaigns.
                </p>
              </section>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
