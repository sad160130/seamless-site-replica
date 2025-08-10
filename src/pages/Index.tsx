
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import Skills from '../components/Skills';
import ProjectsShowcase from '../components/ProjectsShowcase';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with enhanced background */}
      <section className="hero-bg min-h-[90vh] flex flex-col justify-center items-center pt-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new opportunities
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Sanket</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                SEO & Growth Strategist
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I help B2B and tech companies scale through data-driven SEO strategies, 
              performance marketing, and growth optimization. Transforming organic traffic 
              into meaningful business results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a 
                href="https://docs.google.com/document/d/1VJbSWbDYOidwwAaXxlFnaxfwbdR1WyQm/edit" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Download Resume
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <div className="w-4 h-px bg-primary-foreground ml-1"></div>
                </div>
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:border-primary/50 hover:shadow-lg"
              >
                Let's Connect
              </a>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Showcase */}
      <ProjectsShowcase />
    </Layout>
  );
};

export default Index;
