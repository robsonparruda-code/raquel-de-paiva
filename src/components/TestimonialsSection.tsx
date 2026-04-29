import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import evento1 from "@/assets/evento-1.png";
import evento2 from "@/assets/evento-2.png";
import evento3 from "@/assets/evento-3.png";
import evento4 from "@/assets/evento-4.png";
import evento5 from "@/assets/evento-5.png";
import evento6 from "@/assets/evento-6.png";

const images = [evento1, evento2, evento3, evento4, evento5, evento6];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section id="eventos" className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Eventos</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Nossos Eventos
          </h2>
        </motion.div>

        <div className="max-w-sm mx-auto relative">
          <div className="overflow-hidden rounded-[2rem] shadow-sm border border-border aspect-square">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Evento ${current + 1}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover bg-card"
            />
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                  aria-label={`Evento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
