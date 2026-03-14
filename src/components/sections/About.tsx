import { ShieldCheck, Heart, Eye, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import teamImg from "@/assets/team-meeting.jpg";

const philosophyItems = [
  { icon: Heart, label: "Recuperação com respeito" },
  { icon: ShieldCheck, label: "Integridade" },
  { icon: Eye, label: "Transparência" },
  { icon: Briefcase, label: "Processo profissional" },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={teamImg}
                alt="Equipe de consultores discutindo estratégias de recuperação de crédito"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={400}
                height={300}
              />
            </div>
          </div>

          <div className="space-y-6 reveal reveal-delay-1">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
              Especialistas em Recuperação de Crédito Empresarial
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A INOVA RECEBE é uma empresa especializada em cobrança para empresas. Nossa missão é recuperar seus créditos e devolver recursos ao caixa da sua empresa, com atuação ética, transparente e focada em resultados estruturados.
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-5">Nossa Filosofia</h3>
              <div className="grid grid-cols-2 gap-4">
                {philosophyItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-accent/60 border border-border/50">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
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

export default About;
