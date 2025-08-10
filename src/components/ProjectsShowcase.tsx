import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "CoinDesk SEO Optimization",
    description: "Led comprehensive SEO strategy resulting in significant organic growth and improved search visibility for one of the leading cryptocurrency news platforms.",
    metrics: [
      { label: "Organic Traffic", value: "+150%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Keywords", value: "10K+", icon: <Zap className="w-4 h-4" /> },
      { label: "Page Views", value: "2M+", icon: <Users className="w-4 h-4" /> }
    ],
    technologies: ["SEO", "Google Analytics", "Search Console", "Content Strategy"],
    image: "/api/placeholder/600/400",
    link: "https://coindesk.com"
  },
  {
    title: "Goldman Sachs Digital Growth",
    description: "Developed and executed digital marketing strategies to enhance online presence and drive qualified lead generation for enterprise financial services.",
    metrics: [
      { label: "Lead Quality", value: "+85%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Conversion Rate", value: "+45%", icon: <Zap className="w-4 h-4" /> },
      { label: "Engagement", value: "+120%", icon: <Users className="w-4 h-4" /> }
    ],
    technologies: ["Performance Marketing", "Lead Generation", "B2B Strategy", "Analytics"],
    image: "/api/placeholder/600/400"
  },
  {
    title: "JPMorgan Chase Marketing Automation",
    description: "Implemented comprehensive marketing automation systems and performance tracking to optimize campaign effectiveness across multiple channels.",
    metrics: [
      { label: "Efficiency", value: "+200%", icon: <Zap className="w-4 h-4" /> },
      { label: "ROI", value: "+180%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Reach", value: "5M+", icon: <Users className="w-4 h-4" /> }
    ],
    technologies: ["Marketing Automation", "Data Analysis", "Campaign Management", "ROI Optimization"],
    image: "/api/placeholder/600/400"
  }
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from strategic marketing initiatives across leading companies
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`project-card ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 rounded-lg bg-accent/50">
                        <div className="flex justify-center mb-2 text-primary">
                          {metric.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20">
                            <div class="text-center">
                              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <TrendingUp class="w-8 h-8 text-primary" />
                              </div>
                              <h4 class="font-semibold text-lg mb-2">${project.title}</h4>
                              <p class="text-sm text-muted-foreground">Marketing Project</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;