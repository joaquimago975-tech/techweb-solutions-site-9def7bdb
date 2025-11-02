import { Mail, Phone, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gold-accent animate-fade-in">
          Contactos
        </h2>
        
        <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in">
          Pronto para transformar a tua ideia num projeto digital de sucesso?<br />
          Entra em contacto e vamos criar algo incrível juntos.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="service-card text-center animate-slide-in">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 gold-accent">E-mail</h3>
            <a href="mailto:joaquimago975@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
              joaquimago975@gmail.com
            </a>
          </div>
          
          <div className="service-card text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 gold-accent">WhatsApp / Telefone</h3>
            <a href="tel:+244975330677" className="text-foreground/70 hover:text-primary transition-colors">
              +244 975 330 677
            </a>
          </div>
          
          <div className="service-card text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Facebook className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 gold-accent">Facebook</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              Leony Agostinho Mendes
            </a>
          </div>
        </div>
        
        <a
          href="https://wa.me/244975330677"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block animate-glow"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
