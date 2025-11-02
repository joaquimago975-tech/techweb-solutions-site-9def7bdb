import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  return (
    <section id="about" className="section-container bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-accent">
              Sobre Nós
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                A <span className="gold-accent font-semibold">Techweb Solutions</span>, liderada por Leony Suleiman Mendes, é uma empresa de tecnologia focada em criar sites e aplicações web e mobile de alta performance.
              </p>
              <p>
                Acreditamos que cada projeto digital deve combinar design moderno, funcionalidade intuitiva e tecnologia robusta.
              </p>
              <p>
                O nosso objetivo é ajudar negócios e marcas a se destacarem no universo digital, através de soluções personalizadas e eficazes.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl"></div>
              <img
                src={aboutImage}
                alt="Techweb Solutions Workspace"
                className="relative rounded-lg shadow-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
