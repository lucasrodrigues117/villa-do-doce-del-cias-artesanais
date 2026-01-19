import { Instagram, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511998177512";
const INSTAGRAM_LINK = "https://instagram.com/villadodoce_t";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-semibold text-primary">
          Villa do Doce
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#galeria" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Galeria
          </a>
          <a href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#depoimentos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Depoimentos
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary-dark">
              <Instagram className="w-5 h-5" />
            </Button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" className="hidden sm:flex">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button variant="whatsapp" size="icon" className="sm:hidden">
              <Phone className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
