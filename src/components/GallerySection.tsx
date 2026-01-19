import heroImage from "@/assets/hero-doces.jpg";
import boloImage from "@/assets/bolo-aniversario.jpg";
import brigadeirosImage from "@/assets/brigadeiros.jpg";
import palhaImage from "@/assets/palha-italiana.jpg";
import docesImage from "@/assets/doces-variados.jpg";

const galleryImages = [
  { src: boloImage, alt: "Bolo decorado artesanal", span: "col-span-2 row-span-2" },
  { src: brigadeirosImage, alt: "Brigadeiros gourmet", span: "col-span-1 row-span-1" },
  { src: heroImage, alt: "Doces artesanais", span: "col-span-1 row-span-1" },
  { src: palhaImage, alt: "Palha italiana", span: "col-span-1 row-span-1" },
  { src: docesImage, alt: "Mesa de doces", span: "col-span-1 row-span-1" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Galeria
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Doces que encantam
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Confira algumas das nossas criações artesanais
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`aspect-square ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-card font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
