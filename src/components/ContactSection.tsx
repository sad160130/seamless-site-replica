import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-16 bg-[#0d1726]"
    >
      <div className="container-custom">
        <h2
          id="contact-title"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400"
        >
          Contact
        </h2>
        <p className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
          Let's talk about your next growth story
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-start">
          <div className="space-y-3 text-sm text-slate-400">
            <p>
              I help brands turn complex, high-stakes environments into measurable
              organic growth — from regulated financial services to fast-moving
              media and technology.
            </p>
            <p>
              Whether you're looking to strengthen technical SEO foundations,
              architect content at scale, or prepare for AI-driven search, I'd be
              happy to explore how I can help.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-slate-700/50 bg-slate-800/60 p-5 shadow-sm text-sm">
            <InfoRow label="Location" value="Lancaster, SC" />
            <InfoRow label="Mobile" value="(469) 516-8838" />
            <InfoRow label="Email" value="snketad@outlook.com" />
            <InfoRow
              label="Portfolio"
              value="sanketdesai.info"
              href="https://www.sanketdesai.info/"
            />
            <InfoRow
              label="LinkedIn"
              value="linkedin.com/in/snket-desai"
              href="https://www.linkedin.com/in/snket-desai/"
            />
            <InfoRow
              label="Tableau Public"
              value="View dashboards"
              href="https://public.tableau.com/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
  href?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, href }) => (
  <div className="flex justify-between gap-4 text-xs text-slate-300">
    <span className="font-semibold text-slate-500">{label}</span>
    {href ? (
      <a
        href={href}
        className="text-teal-400 underline-offset-2 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        {value}
      </a>
    ) : (
      <span className="text-slate-200">{value}</span>
    )}
  </div>
);

export default ContactSection;
