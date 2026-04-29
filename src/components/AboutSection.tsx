import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import teamRaquel from "@/assets/team-raquel.jpg";

const stats = [
  { number: "22+", label: "Anos de experiência" },
  { number: "12+", label: "Anos em EMDR" },
  { number: "15+", label: "Anos de pesquisa" },
  { number: "1000+", label: "Pacientes atendidos" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre Nós</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-3 mb-6">
              Dra. Raquel de Paiva
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
              Com mais de 20 anos de experiência, a Dra. Raquel de Paiva fundou o Instituto Élpis por sua paixão pela 
              compreensão profunda do comportamento humano. Pós-doutora em Psicologia Clínica, Doutora e Mestre 
              pela UnB, e Terapeuta Certificada EMDR, a Dra. Raquel é referência em saúde mental em Brasília.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
              Nossa missão é clara: a saúde integral nasce do equilíbrio entre rigor técnico e acolhimento sensível.
              Acreditamos que cada trajetória é única e exige um olhar clínico que respeite o tempo do indivíduo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
              Supervisora e Vice-coordenadora do GIPSI/UnB e autora do livro <em>"Vivências Espirituais e Crises
              do Tipo Psicóticas"</em>, a Dra. Raquel traz uma integração única de EMDR com visão sistêmica e
              fenomenológica para cada atendimento.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-accent">
                  <div className="text-2xl font-bold text-primary font-heading">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={teamRaquel}
                alt="Dra. Raquel de Paiva - Psicóloga Clínica CRP 01/9534"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                <p className="text-primary-foreground font-heading font-semibold text-lg">Dra. Raquel de Paiva</p>
                <p className="text-primary-foreground/80 text-sm">Psicóloga Clínica — CRP 01/9534</p>
              </div>
            </div>
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-[2.5rem] bg-secondary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
