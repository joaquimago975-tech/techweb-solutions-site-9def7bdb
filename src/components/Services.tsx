import { Code, Smartphone, Wrench, Palette, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento de Sites Profissionais',
    description: 'Criação de sites rápidos, elegantes e otimizados para todos os dispositivos.',
  },
  {
    icon: Smartphone,
    title: 'Aplicações Web e Mobile',
    description: 'Apps personalizadas, modernas e seguras, disponíveis para Android, iOS e navegadores.',
  },
  {
    icon: Wrench,
    title: 'Manutenção e Suporte Técnico',
    description: 'Atualizações, correções e otimização contínua para manter seu projeto sempre atual.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design e Branding',
    description: 'Design intuitivo e identidade visual profissional que conecta com seu público.',
  },
  {
    icon: TrendingUp,
    title: 'SEO e Marketing Digital',
    description: 'Estratégias para aumentar o alcance e o tráfego do seu negócio online.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-container bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-accent animate-fade-in">
          Serviços
        </h2>
        
        <div className="tech-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 gold-accent">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
