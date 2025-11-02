import { Facebook, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/60 text-center md:text-left">
            © 2025 <span className="gold-accent">Techweb Solutions</span> — Desenvolvimento de Sites e Apps Web & Mobile.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://wa.me/244975330677"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="mailto:joaquimago975@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
