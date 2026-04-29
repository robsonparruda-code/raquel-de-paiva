import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561991606142?text=Olá! Gostaria de agendar uma consulta.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-[#fff]" />
    </a>
  );
};

export default WhatsAppButton;
