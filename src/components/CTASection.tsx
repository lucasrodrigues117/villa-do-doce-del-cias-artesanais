import { MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511998177512";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-villa-dourado-claro/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6 animate-fade-up">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-foreground">Entregamos em Jundiaí e região</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Pronto para adoçar sua próxima celebração?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Entre em contato pelo WhatsApp e faça sua encomenda. 
            Vamos criar doces especiais para tornar seu momento inesquecível!
          </p>
          
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="animate-fade-up inline-block"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="whatsapp" size="xl" className="text-lg px-12">
              <MessageCircle className="w-6 h-6" />
              Fazer meu pedido
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Resposta rápida • Atendimento personalizado • Doces feitos com amor
          </p>
        </div>
      </div>
    </section>
  );
}
