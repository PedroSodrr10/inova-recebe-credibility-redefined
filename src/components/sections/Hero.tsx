import { LINKS, getWhatsAppLink } from "@/config/links";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Scale, FileCheck } from "lucide-react";
import heroImg from "@/assets/hero-corporate.jpg";

const credibilityItems = [
  { icon: Shield, text: "Atuação ética e transparente" },
  { icon: Scale, text: "Equipe jurídica própria" },
  { icon: FileCheck, text: "Processo estruturado" },
];

const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-card overflow-hidden" ref={ref}>
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground bg-accent rounded-full px-4 py-1.5 border border-border">
              Atuação B2B • Extrajudicial • Judicial
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight text-secondary">
              Cobrança Empresarial com Segurança Jurídica e Resultado
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              A INOVA RECEBE assume a recuperação dos seus créditos com ética, transparência e atuação extrajudicial e judicial completa.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-8 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Falar com Especialista
              </a>
              <a
                href={getWhatsAppLink("Olá, gostaria de solicitar uma proposta de cobrança empresarial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-8 rounded-lg text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Solicitar Proposta
              </a>
            </div>
          </div>
          <div className="hidden md:block reveal reveal-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Ambiente corporativo profissional com documentos financeiros sobre mesa de vidro"
                className="w-full h-auto object-cover aspect-[4/3]"
                width={640}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Credibility bar */}
      <div className="border-t border-border bg-accent/50">
        <div className="container py-5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 reveal">
            {credibilityItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <item.icon className="w-4.5 h-4.5 text-primary shrink-0" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
