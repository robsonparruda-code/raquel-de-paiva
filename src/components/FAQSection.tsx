import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o EMDR e para quem é indicado?",
    answer: "O EMDR (Dessensibilização e Reprocessamento por Movimentos Oculares) é uma abordagem terapêutica focada em processar memórias difíceis e traumas. É altamente indicado para ansiedade crônica, estresse pós-traumático, fobias e desregulação emocional profunda.",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira sessão é um momento de acolhimento e escuta. A Dra. Raquel entenderá sua história, seus motivos para buscar a terapia e explicará como o plano de cuidado personalizado funcionará, respeitando sempre o seu ritmo.",
  },
  {
    question: "Vocês atendem por planos de saúde (convênios)?",
    answer: "Nossos atendimentos são particulares, o que nos permite garantir o tempo e a profundidade necessários para uma abordagem sistêmica e eficaz. No entanto, fornecemos nota fiscal para que você possa solicitar o reembolso junto ao seu convênio, caso ele ofereça essa modalidade.",
  },
  {
    question: "Qual a duração média do tratamento?",
    answer: "A duração varia muito de acordo com a singularidade de cada paciente e as questões a serem trabalhadas. Algumas demandas focais podem ser processadas rapidamente com o EMDR, enquanto questões existenciais profundas exigem um acompanhamento a longo prazo.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-3 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre as respostas para as dúvidas mais comuns sobre nosso atendimento e abordagens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-left font-heading text-lg md:text-xl text-foreground hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
