
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  cta?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({ title, description, cta }) => {
  return (
    <motion.div
      className="container-custom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          className="text-lg text-foreground/80 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
        
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to={cta.link}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {cta.text}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
