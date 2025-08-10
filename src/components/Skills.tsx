import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Globe, 
  PenTool,
  Database,
  Code,
  Lightbulb,
  Users,
  Zap
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number;
}

const skills: Skill[] = [
  {
    name: "SEO Strategy",
    icon: <Search className="w-6 h-6" />,
    description: "Technical & content optimization",
    level: 95
  },
  {
    name: "Growth Marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Data-driven growth campaigns",
    level: 90
  },
  {
    name: "Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Performance tracking & insights",
    level: 88
  },
  {
    name: "Content Strategy",
    icon: <PenTool className="w-6 h-6" />,
    description: "Content that converts",
    level: 85
  },
  {
    name: "Performance Marketing",
    icon: <Target className="w-6 h-6" />,
    description: "ROI-focused campaigns",
    level: 82
  },
  {
    name: "Digital Strategy",
    icon: <Globe className="w-6 h-6" />,
    description: "Holistic digital approach",
    level: 80
  },
  {
    name: "Data Analysis",
    icon: <Database className="w-6 h-6" />,
    description: "Actionable data insights",
    level: 78
  },
  {
    name: "Marketing Automation",
    icon: <Zap className="w-6 h-6" />,
    description: "Scalable marketing systems",
    level: 75
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for driving growth and delivering measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;