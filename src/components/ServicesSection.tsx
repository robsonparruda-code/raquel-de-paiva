import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Monitor, Compass, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5561991606142?text=Olá! Gostaria de saber mais sobre os serviços.";

const services = [
  {
    icon: Brain,
    title: "Terapia EMDR",
    description: "Abordagem terapêutica profunda e fundamentada em evidências, voltada para o reprocessamento de memórias difíceis e traumas, restaurando o equilíbrio e a fluidez emocional.",
  },
  {
    icon: Monitor,
    title: "Atendimento On-line",
    description: "Cuidado ético e qualificado sem fronteiras. Um espaço terapêutico seguro em ambiente virtual, garantindo que você acesse a terapia com a mesma profundidade, onde quer que esteja.",
  },
  {
    icon: Compass,
    title: "Atendimento por Imersão",
    description: "Sessões intensivas realizadas presencialmente em Brasília e Anápolis. Um formato contínuo e aprofundado, ideal para quem busca focar intensamente no reprocessamento emocional em um curto período.",
  },
  {
    icon: BookOpen,
    title: "Supervisão Clínica e Minicursos",
    description: "Compartilhamento de saberes práticos e teóricos. Um espaço dedicado ao desenvolvimento de outros profissionais de psicologia, através de supervisão de casos clínicos e cursos de curta duração.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-3 mb-4">
            Cuidado especializado para sua saúde mental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos atendimento clínico especializado para adolescentes, adultos, casais e famílias, integrando métodos reconhecidos para um acompanhamento personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <Button variant="secondary" size="sm" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Saiba Mais
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
