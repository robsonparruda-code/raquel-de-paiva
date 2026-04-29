import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoElpis from "@/assets/logo-elpis.png";

const WHATSAPP_URL = "https://wa.me/5561991606142?text=Olá! Gostaria de agendar uma consulta.";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold text-primary">
          <img src={logoElpis} alt="Dra. Raquel de Paiva" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col">
            <span>Dra. Raquel de Paiva</span>
            <span className="text-xs font-normal text-muted-foreground mt-[-2px]">Instituto Élpis</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Tirar Dúvidas
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full mt-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Tirar Dúvidas
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
