import { Zap, Users, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: Zap,
    title: "Agilidade no Processo",
    description: "Notificações via telefone, WhatsApp, SMS, e-mail e carta. Em média recuperamos 60% das dívidas em 30 dias.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais treinados com acompanhamento diário da inadimplência. Foco total em resultado.",
  },
  {
    icon: Scale,
    title: "Setor Jurídico Próprio",
    description: "Equipe de advogados especializados em atuação extrajudicial e judicial. Segurança jurídica em todo o processo.",
  },
];

const Benefits = () => {
  const ref = useScrollReveal();

  return (
    <section id="vantagens" className="py-20 md:py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container relative">
        <div className="text-center mb-14 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground tracking-tight mb-3">
            Por que escolher a INOVA RECEBE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={b.title} className={`reveal reveal-delay-${i + 1} text-center space-y-5 p-8 rounded-2xl bg-secondary-foreground/[0.05] border border-secondary-foreground/[0.08] hover:bg-secondary-foreground/[0.08] transition-colors duration-300`}>
              <div className="w-14 h-14 rounded-2xl bg-primary/20 mx-auto flex items-center justify-center">
                <b.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground">{b.title}</h3>
              <p className="text-sm text-secondary-foreground/75 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
