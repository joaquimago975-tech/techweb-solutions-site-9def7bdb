import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="hero-title mb-6">
          Desenvolvemos Sites e Apps<br />
          <span className="gold-accent">Web & Mobile Profissionais</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto">
          Na Techweb Solutions, transformamos ideias em experiências digitais completas, modernas e impactantes.
        </p>
        
        <button
          onClick={scrollToPortfolio}
          className="btn-gold animate-glow"
        >
          Ver Portfólio
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
