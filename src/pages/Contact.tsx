
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="pt-20">
        <Hero 
          title="Get in Touch"
          description="Have a question or want to work together? Feel free to reach out!"
        />
        
        <div className="container-custom mt-8">
          <motion.div
            className="max-w-xl mx-auto mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-foreground/80">
              <a 
                href="mailto:snketad@outlook.com" 
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={18} />
                <span>snketad@outlook.com</span>
              </a>
              <a 
                href="tel:4695168838" 
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone size={18} />
                <span>469-516-8838</span>
              </a>
            </div>
          </motion.div>
          
          <div className="max-w-xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={16} />}
              </button>
            </motion.form>
            
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg font-medium mb-2">Or reach me directly at:</p>
              <a 
                href="mailto:hello@sanketdesai.info" 
                className="text-foreground/80 hover:text-foreground underline transition-colors"
              >
                hello@sanketdesai.info
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
