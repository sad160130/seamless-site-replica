
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      href: 'https://github.com/sanketdes', 
      label: 'GitHub'
    },
    { 
      icon: <Twitter size={18} />, 
      href: 'https://twitter.com/sanketdes', 
      label: 'Twitter'
    },
    { 
      icon: <Linkedin size={18} />, 
      href: 'https://www.linkedin.com/in/sanketdesai/', 
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={18} />, 
      href: 'mailto:hello@sanketdesai.info', 
      label: 'Email'
    },
  ];

  return (
    <div className="flex items-center space-x-5">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
