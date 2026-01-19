import { MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doces.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511998177512";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-villa-dourado-claro/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-villa-rosa-medio/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft mb-6">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">Feitos com amor em Jundiaí</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Doces artesanais feitos com{" "}
              <span className="text-primary">carinho</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Cada doce é preparado com ingredientes selecionados e muito amor. 
              Perfeitos para deixar suas celebrações ainda mais especiais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Peça pelo WhatsApp
                </Button>
              </a>
              <a href="#produtos">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Ver Produtos
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Brigadeiros artesanais da Villa do Doce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🧁</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">+500</p>
                  <p className="text-sm text-muted-foreground">Pedidos felizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
