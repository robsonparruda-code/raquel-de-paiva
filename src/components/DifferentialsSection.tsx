import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Clock, ShieldCheck, GraduationCap, HeartHandshake } from "lucide-react";

const differentials = [
  {
    icon: Award,
    title: "EMDR + Visão Sistêmica",
    description: "Integração única de métodos reconhecidos internacionalmente com abordagem fenomenológica para resultados eficazes.",
  },
  {
    icon: Target,
    title: "Intervenções Baseadas em Evidências",
    description: "Plano de cuidado fundamentado em pesquisa científica e mais de 15 anos de estudo em psicopatologia.",
  },
  {
    icon: Clock,
    title: "Respeito ao Seu Tempo",
    description: "Cada trajetória é única. O processo terapêutico respeita seu ritmo, sem pressa e sem abordagens genéricas.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Seguro e Ético",
    description: "Espaço acolhedor onde você é ouvido com empatia, sem julgamentos, com total sigilo profissional.",
  },
  {
    icon: GraduationCap,
    title: "Formação Acadêmica de Excelência",
    description: "Pós-doutorado, doutorado e mestrado em Psicologia Clínica por instituições renomadas como UnB e UFU.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado Personalizado",
    description: "Plano terapêutico construído individualmente, respeitando sua história e suas particularidades.",
  },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Por que nos escolher</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais do que tratar sintomas, buscamos compreender sua história e construir caminhos para uma vida mais equilibrada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
