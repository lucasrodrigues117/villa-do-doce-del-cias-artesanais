import { Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-accent/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Icon */}
            <div className="relative animate-fade-up">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-villa-dourado-claro/20 rounded-full blur-3xl" />
                <div className="relative bg-card rounded-3xl p-8 shadow-card h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-6">
                    <span className="text-5xl">👩‍🍳</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    Thaís Meniglim
                  </h3>
                  <p className="text-primary font-medium mb-4">Confeiteira desde 2017</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm">Jundiaí – SP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
                Nossa História
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Sobre a Villa do Doce
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">Villa do Doce</strong> nasceu do amor por confeitaria 
                  e do desejo de criar doces que encantam e emocionam. Comandada por{" "}
                  <strong className="text-foreground">Thaís Meniglim</strong>, que faz doces desde 2017, 
                  nossa confeitaria artesanal se dedica a transformar ingredientes selecionados em 
                  verdadeiras obras de arte comestíveis.
                </p>
                <p>
                  Cada receita é caseira, preparada com carinho e atenção aos detalhes. 
                  Trabalhamos exclusivamente sob encomenda, garantindo que cada doce chegue 
                  fresco e perfeito para suas celebrações.
                </p>
                <p className="text-primary font-medium italic">
                  "Nosso maior objetivo é fazer parte dos momentos mais doces da sua vida."
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: "🏠", label: "Artesanal" },
                  { icon: "⭐", label: "Qualidade" },
                  { icon: "💝", label: "Carinho" },
                ].map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-card rounded-xl shadow-soft">
                    <span className="text-2xl mb-2 block">{feature.icon}</span>
                    <span className="text-sm font-medium text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
