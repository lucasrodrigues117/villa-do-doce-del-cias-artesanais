import { Instagram, MessageCircle, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511998177512";
const INSTAGRAM_LINK = "https://instagram.com/villadodoce_t";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">Villa do Doce</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Doces artesanais feitos com carinho para suas celebrações especiais. 
              Trabalhamos com receitas caseiras e ingredientes selecionados.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Jundiaí – SP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="space-y-3">
              <a href="#produtos" className="block text-background/70 hover:text-background text-sm transition-colors">
                Produtos
              </a>
              <a href="#galeria" className="block text-background/70 hover:text-background text-sm transition-colors">
                Galeria
              </a>
              <a href="#sobre" className="block text-background/70 hover:text-background text-sm transition-colors">
                Sobre
              </a>
              <a href="#depoimentos" className="block text-background/70 hover:text-background text-sm transition-colors">
                Depoimentos
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start border-background/30 text-background hover:bg-background/10 hover:text-background">
                  <Instagram className="w-4 h-4" />
                  @villadodoce_t
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Villa do Doce. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-background/50 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>em Jundiaí</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
