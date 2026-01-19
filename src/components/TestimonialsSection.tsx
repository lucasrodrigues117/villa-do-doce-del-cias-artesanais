import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mariana S.",
    text: "Os brigadeiros da Villa do Doce são simplesmente os melhores que já provei! Fizeram a festa do meu filho ser perfeita.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carolina M.",
    text: "Encomendei o bolo de aniversário e todos os convidados elogiaram. Lindo e delicioso! Super recomendo.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fernanda L.",
    text: "Atendimento impecável e doces maravilhosos. A Thaís é muito atenciosa e caprichosa. Virou minha confeiteira favorita!",
    rating: 5,
  },
  {
    id: 4,
    name: "Patricia R.",
    text: "As palhas italianas derretem na boca! Já encomendei várias vezes e sempre vem tudo perfeito.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é nossa maior alegria
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-villa-dourado fill-villa-dourado" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground text-sm">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
