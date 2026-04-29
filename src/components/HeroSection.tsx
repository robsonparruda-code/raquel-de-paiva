import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const WHATSAPP_URL = "https://wa.me/5561991606142?text=Olá! Gostaria de agendar uma consulta.";

const slides = [
  {
    image: hero1,
    title: "Transformação emocional através de um cuidado consciente e especializado",
    subtitle: "Oferecemos suporte terapêutico ético e acolhedor para adolescentes, adultos, casais e famílias.",
  },
  {
    image: hero2,
    title: "Mais de 20 anos de experiência em psicologia clínica e EMDR",
    subtitle: "Abordagem clínica integrada com visão sistêmica, fenomenológica e intervenções baseadas em evidências.",
  },
  {
    image: hero3,
    title: "Um espaço seguro para o seu\ndesenvolvimento pessoal",
    subtitle: "Plano de cuidado personalizado que respeita sua individualidade, seu tempo e sua trajetória.",
  },
  {
    image: hero4,
    title: "Dra. Raquel de Paiva — Cuidado que transforma",
    subtitle: "Acolhimento profissional e humanizado para sua saúde mental e bem-estar emocional.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Dra. Raquel de Paiva - Psicologia Clínica em Brasília"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center h-full">
        <div className="container-narrow px-4 md:px-8">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-primary-foreground leading-tight mb-6 whitespace-pre-line">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl font-light text-primary-foreground/90 mb-8 font-body leading-relaxed">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base px-8 py-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-foreground">
                <a href="#servicos">Saiba Mais</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm rounded-full p-2 text-primary-foreground transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm rounded-full p-2 text-primary-foreground transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
