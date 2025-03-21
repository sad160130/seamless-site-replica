
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS featuring smooth animations and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      technologies: ["Next.js", "MongoDB", "Stripe", "Vercel"],
      link: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application providing forecasts, historical data, and location-based services.",
      technologies: ["React", "Redux", "OpenWeather API", "Chart.js"],
      link: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, task assignment, and progress tracking.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://github.com/yourusername/task-app",
    },
    {
      title: "Recipe Finder",
      description: "App that allows users to discover recipes based on available ingredients, dietary preferences, and meal types.",
      technologies: ["React Native", "GraphQL", "Apollo"],
      link: "https://github.com/yourusername/recipe-finder",
    },
    {
      title: "Markdown Editor",
      description: "A feature-rich markdown editor with live preview, syntax highlighting, and custom themes.",
      technologies: ["TypeScript", "React", "CodeMirror"],
      link: "https://github.com/yourusername/markdown-editor",
    },
  ];

  return (
    <Layout>
      <div className="pt-20">
        <Hero 
          title="Projects"
          description="A collection of projects I've built throughout my career."
        />
        
        <div className="container-custom mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
