
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const About = () => {
  return (
    <Layout>
      <div className="pt-20">
        <Hero 
          title="About Me"
          description="Passionate about crafting digital experiences that make a difference."
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
                  I am a software engineer with a focus on creating clean, efficient, and user-friendly applications. With experience spanning from startups to enterprise environments, I've developed a versatile skill set that allows me to adapt to various challenges in the tech industry.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-medium mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'REST APIs', 'SQL', 'NoSQL', 'UI/UX Design'].map((skill) => (
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
                    <h3 className="font-medium">Senior Software Engineer</h3>
                    <p className="text-sm text-foreground/70">Company Inc. • 2020 - Present</p>
                    <p className="text-sm text-foreground/80 mt-2">
                      Led development of key features for the company's flagship product, improving customer satisfaction by 25%.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Software Engineer</h3>
                    <p className="text-sm text-foreground/70">Tech Solutions • 2018 - 2020</p>
                    <p className="text-sm text-foreground/80 mt-2">
                      Developed and maintained web applications used by thousands of customers daily.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-medium">Junior Developer</h3>
                    <p className="text-sm text-foreground/70">Startup XYZ • 2016 - 2018</p>
                    <p className="text-sm text-foreground/80 mt-2">
                      Worked on front-end development and collaborated closely with designers to implement UI features.
                    </p>
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
                  <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-foreground/70">University of Technology • 2012 - 2016</p>
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
