import { Zap, Users, Scale } from "lucide-react";

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
  return (
    <section id="vantagens" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-3">
            Por que escolher a INOVA RECEBE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
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
