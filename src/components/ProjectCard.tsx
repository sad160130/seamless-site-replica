
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  link,
  delay = 0 
}) => {
  return (
    <motion.div
      className="group relative border border-border/40 rounded-lg p-5 transition-all hover:border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-1.5 rounded-full transition-colors hover:bg-secondary"
            aria-label={`View ${title} project`}
          >
            <ArrowUpRight size={16} className="text-foreground/70 group-hover:text-foreground transition-colors" />
          </a>
        </div>
        
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 bg-secondary rounded-full text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
