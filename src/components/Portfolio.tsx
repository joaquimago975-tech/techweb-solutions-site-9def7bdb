import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';
import project5 from '@/assets/project5.jpg';
import project6 from '@/assets/project6.jpg';

const projects = [
  {
    image: project1,
    title: 'E-Commerce Moderno',
    description: 'Plataforma completa de vendas online com gestão de produtos e pagamentos integrados.',
  },
  {
    image: project2,
    title: 'App Fitness & Wellness',
    description: 'Aplicação mobile para tracking de treinos e nutrição com interface intuitiva.',
  },
  {
    image: project3,
    title: 'Portal Corporativo',
    description: 'Website institucional com design elegante e otimizado para conversão.',
  },
  {
    image: project4,
    title: 'Delivery & Restaurante',
    description: 'Sistema de pedidos online com cardápio digital e gestão de entregas.',
  },
  {
    image: project5,
    title: 'Imobiliária Digital',
    description: 'Plataforma de listagem de propriedades com busca avançada e tours virtuais.',
  },
  {
    image: project6,
    title: 'Plataforma E-Learning',
    description: 'Sistema de cursos online com vídeos, quizzes e acompanhamento de progresso.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container bg-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-accent animate-fade-in">
          Portfólio
        </h2>
        
        <div className="tech-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="btn-gold w-full">Ver Projeto</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gold-accent">{project.title}</h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
