
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="hero-bg pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SEO strategist and digital growth partner helping brands achieve 
              <span className="text-primary font-semibold"> measurable results</span> through data-driven strategies
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">My <span className="gradient-text">Background</span></h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                I'm a seasoned SEO strategist with 10+ years of experience scaling organic traffic for global B2B, media, and tech brands. Leveraging technical SEO, link-building, and Core Web Vitals optimization, I've helped major organizations like CoinDesk rank #1 for competitive keywords—driving millions of monthly visits. My passion lies in crafting data-driven organic growth strategies that elevate visibility, engagement, and ROI.
              </p>
            </motion.div>
            
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Core <span className="gradient-text">Skills</span></h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  'Keyword Research', 'Technical SEO', 'Website Auditing', 'On-Page SEO', 
                  'Core Web Vitals & UX', 'Link-Building', 'CRO', 'Local SEO', 
                  'Topical Clustering', 'AI Search Optimization', 'Content Strategy'
                ].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">
                Professional <span className="gradient-text">Experience</span>
              </h2>
              <div className="space-y-8">
                <div className="floating-card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">SEO Manager</h3>
                      <p className="text-lg font-medium">CoinDesk Inc, NYC</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 self-start">
                      Aug 2021 – Present
                    </span>
                  </div>
                  <ul className="text-foreground/80 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Grew organic traffic by 47% MoM, reaching 15M+ monthly visits by ranking #1 for "Bitcoin Price" and 14K+ crypto keywords.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Elevated domain authority to DR 90 through advanced SEO, Core Web Vitals, E-E-A-T, and topical clustering.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Led technical SEO, link building, content audits, and internal linking across a million+ page site.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="floating-card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">Marketing Acquisition Associate</h3>
                      <p className="text-lg font-medium">Goldman Sachs Bank, Chicago</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 self-start">
                      Oct 2021 – Mar 2022
                    </span>
                  </div>
                  <ul className="text-foreground/80 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Led paid search/media campaigns across Search, Social & Email; boosted site visits and customer adoption by 30%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managed acquisition marketing for a $10B Savings unit, optimizing performance via GA, Tableau, SQL, and GDS.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="floating-card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">Digital Marketing Senior Associate</h3>
                      <p className="text-lg font-medium">JPMorgan Chase, Ohio</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 self-start">
                      Jan 2020 – Feb 2020
                    </span>
                  </div>
                  <ul className="text-foreground/80 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managed $70M marketing budget, contributing to $300M+ revenue using SEM, Paid Search, and Display.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Drove 25% YoY revenue growth through actionable marketing funnels and performance analytics.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="gradient-text">Education</span>
              </h2>
              <div className="space-y-6">
                <div className="floating-card p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Master of Science, Information Technology and Management</h3>
                  <p className="text-muted-foreground">The University of Texas at Dallas • Aug 2018</p>
                  <p className="text-sm text-muted-foreground">GPA 3.77</p>
                </div>
                <div className="floating-card p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Bachelor of Engineering, Computer Science</h3>
                  <p className="text-muted-foreground">University of Mumbai, India • June 2011</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
