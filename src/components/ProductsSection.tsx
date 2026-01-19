import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import boloImage from "@/assets/bolo-aniversario.jpg";
import brigadeirosImage from "@/assets/brigadeiros.jpg";
import palhaImage from "@/assets/palha-italiana.jpg";
import docesImage from "@/assets/doces-variados.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511998177512";

const products = [
  {
    id: 1,
    name: "Bolos Decorados",
    description: "Bolos artesanais para aniversários e celebrações especiais, com coberturas e recheios variados.",
    image: boloImage,
    icon: "🎂",
  },
  {
    id: 2,
    name: "Brigadeiros Gourmet",
    description: "O clássico brasileiro em diversos sabores, feitos com chocolate de qualidade.",
    image: brigadeirosImage,
    icon: "🍫",
  },
  {
    id: 3,
    name: "Palhas Italianas",
    description: "Deliciosas barrinhas crocantes com chocolate e leite condensado.",
    image: palhaImage,
    icon: "🍪",
  },
  {
    id: 4,
    name: "Doces Variados",
    description: "Beijinhos, cajuzinhos e outras delícias para sua mesa de doces.",
    image: docesImage,
    icon: "🍬",
  },
];

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Nossos Produtos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Delícias feitas sob encomenda
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Todos os doces são preparados com carinho, ingredientes selecionados 
            e perfeitos para aniversários, eventos e festas especiais.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-soft">
                  {product.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <MessageCircle className="w-4 h-4" />
                    Encomendar
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
