import { mainServices, additionalServices } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servicesImg from "@/assets/services-desk.jpg";

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="py-20 md:py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight mb-3">Nossos Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para recuperação de crédito empresarial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-16">
          {mainServices.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${Math.min(i % 4 + 1, 4)} group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={servicesImg}
                  alt="Mesa de trabalho com relatórios financeiros e documentos de gestão de crédito"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <h3 className="text-lg font-semibold text-secondary mb-6">Serviços Adicionais</h3>
              <div className="space-y-4">
                {additionalServices.map((service) => (
                  <div
                    key={service.title}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{service.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
