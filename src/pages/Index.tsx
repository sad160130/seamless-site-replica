
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-[80vh] pt-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <motion.span
              className="inline-block text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi there, I'm Sanket 👋
            </motion.span>
            
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Data-driven SEO & growth marketer helping brands scale with impact.
            </motion.h1>
            
            <motion.p
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a growth-driven marketing strategist passionate about scaling brands through SEO, performance marketing, and data-led insights. Currently focused on building impactful organic strategies and user-centric digital experiences for B2B and tech companies.
            </motion.p>
            
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
