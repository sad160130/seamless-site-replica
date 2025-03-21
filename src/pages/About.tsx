
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const About = () => {
  return (
    <Layout>
      <div className="pt-20">
        <Hero 
          title="About Me"
          description="SEO strategist and digital growth partner for high-impact marketing teams."
        />
        
        <div className="container-custom mt-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-medium mb-4">Background</h2>
                <p className="text-foreground/80 leading-relaxed">
                  I'm a seasoned SEO strategist with 10+ years of experience scaling organic traffic for global B2B, media, and tech brands. Leveraging technical SEO, link-building, and Core Web Vitals optimization, I've helped major organizations like CoinDesk rank #1 for competitive keywords—driving millions of monthly visits. My passion lies in crafting data-driven organic growth strategies that elevate visibility, engagement, and ROI.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-medium mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['Keyword research', 'Technical SEO', 'Website Auditing', 'On-Page SEO', 'Improving Core Web Vitals & UX', 'Link-Building', 'CRO', 'Local SEO', 'Topical Cluster', 'AI Search Optimization', 'Content Strategy'].map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1 bg-secondary rounded-full text-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl font-medium mb-4">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">SEO Manager | CoinDesk Inc, NYC</h3>
                    <p className="text-sm text-foreground/70">Aug 2021 – Present</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Grew organic traffic by 47% MoM, reaching 15M+ monthly visits by ranking #1 for "Bitcoin Price" and 14K+ crypto keywords.</li>
                      <li>Elevated domain authority to DR 90 through advanced SEO, Core Web Vitals, E-E-A-T, and topical clustering.</li>
                      <li>Led technical SEO, link building, content audits, and internal linking across a million+ page site.</li>
                      <li>Built and optimized high-impact SEO strategies in collaboration with cross-functional teams and external agencies.</li>
                      <li>Conducted in-depth reporting using tools like GSC, SEMrush, Ahrefs, Surfer SEO, and Screaming Frog.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Associate, Marketing Acquisition | Goldman Sachs Bank, Chicago</h3>
                    <p className="text-sm text-foreground/70">Oct 2021 – Mar 2022</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Led paid search/media campaigns across Search, Social & Email; boosted site visits and customer adoption by 30%.</li>
                      <li>Managed acquisition marketing for a $10B Savings unit, optimizing performance via GA, Tableau, SQL, and GDS.</li>
                      <li>Developed cross-channel media strategy driving MoM traffic growth by 30%.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Digital Marketing Senior Associate | JPMorgan Chase, Ohio</h3>
                    <p className="text-sm text-foreground/70">Jan 2020 – Feb 2020</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Managed $70M marketing budget, contributing to $300M+ revenue using SEM, Paid Search, and Display.</li>
                      <li>Drove 25% YoY revenue growth through actionable marketing funnels and performance analytics.</li>
                      <li>Executed A/B & multivariate testing across web and email; improved tracking via GA, Tealium, and Optimize.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Marketing Manager | K12 Inc, Virginia</h3>
                    <p className="text-sm text-foreground/70">Jan 2019 – Oct 2019</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Increased key KPIs by 25% via deep-dive visitor analysis and testing.</li>
                      <li>Built performance dashboards in Tableau, streamlining campaign tracking and boosting efficiency by 25%.</li>
                      <li>Managed campaigns across Paid Search, SEM, and Direct TV with a focus on ROAS.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Online Marketing Intern | McAfee Inc, Texas</h3>
                    <p className="text-sm text-foreground/70">Jun 2018 – Aug 2018</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Generated $1.2M revenue QoQ via Paid Search and Display campaigns.</li>
                      <li>Improved ROI from 30% to 200% through strategic campaign execution and A/B testing.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Growth Marketing Intern | Shutterstock Inc, NYC</h3>
                    <p className="text-sm text-foreground/70">Jun 2017 – Dec 2017</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Boosted engagement and signups by 20% through SEM and Facebook Ads.</li>
                      <li>Reduced ad spend waste by 20% through improved tracking and targeting.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Research Analyst | Media.net, Mumbai</h3>
                    <p className="text-sm text-foreground/70">Feb 2014 – Jul 2016</p>
                    <ul className="text-sm text-foreground/80 mt-2 list-disc pl-4 space-y-1">
                      <li>Increased client revenue by 20% via SEM and monetization strategies.</li>
                      <li>Boosted signups by 15% by diagnosing and resolving portfolio issues.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl font-medium mb-4">Education</h2>
                <div className="border-l-2 border-border pl-4 py-1">
                  <h3 className="font-medium">Master of Science, Information Technology and Management</h3>
                  <p className="text-sm text-foreground/70">The University of Texas at Dallas • Aug 2018</p>
                  <p className="text-sm text-foreground/70">GPA 3.77</p>
                </div>
                <div className="border-l-2 border-border pl-4 py-1 mt-4">
                  <h3 className="font-medium">Bachelor of Engineering, Computer Science</h3>
                  <p className="text-sm text-foreground/70">University of Mumbai, India • June 2011</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
