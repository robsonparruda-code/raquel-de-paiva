import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5561991606142?text=Olá! Gostaria de agendar uma consulta.";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="relative overflow-hidden" ref={ref}>
      <div className="bg-primary section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container-narrow text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Transformação emocional começa com o primeiro passo
          </h2>
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Você não precisa enfrentar seus desafios sozinho. Nosso processo é seguro, ético e adaptado ao seu ritmo. Não tema reviver traumas — aqui, cada passo é cuidadosamente guiado.
          </p>
          <p className="text-primary-foreground/70 mb-8">
            Agende sua consulta pelo WhatsApp e inicie seu caminho de cuidado consciente.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-base px-8 py-6 gap-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar Consulta
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-foreground gap-2"
            >
              <a href="https://instagram.com/instituto_elpis" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                Instagram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-foreground"
            >
              <a href="mailto:contatoespacoelpis@gmail.com">
                Enviar E-mail
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
