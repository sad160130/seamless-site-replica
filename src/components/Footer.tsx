
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-foreground/70">
            © {currentYear} Sanket Desai. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
