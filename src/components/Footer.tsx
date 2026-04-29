import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container-narrow section-padding !py-12 md:!py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">Dra. Raquel de Paiva</h3>
            <p className="text-sm leading-relaxed">
              Clínica de saúde mental em Brasília, dedicada ao cuidado emocional e ao desenvolvimento humano.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a>
              <a href="#diferenciais" className="hover:text-primary-foreground transition-colors">Diferenciais</a>
              <a href="#depoimentos" className="hover:text-primary-foreground transition-colors">Depoimentos</a>
              <a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://wa.me/5561991606142" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone size={16} /> (61) 99160-6142
              </a>
              <a href="mailto:contatoespacoelpis@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={16} /> contatoespacoelpis@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Brasília - DF
              </span>
              <a href="https://instagram.com/instituto_elpis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Instagram size={16} /> @instituto_elpis
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Dra. Raquel de Paiva | Instituto Élpis. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
