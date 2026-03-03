import { ShieldCheck, Heart, Eye, Briefcase } from "lucide-react";

const philosophyItems = [
  { icon: Heart, label: "Recuperação com respeito" },
  { icon: ShieldCheck, label: "Integridade" },
  { icon: Eye, label: "Transparência" },
  { icon: Briefcase, label: "Processo profissional" },
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Especialistas em Recuperação de Crédito Empresarial
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A INOVA RECEBE é uma empresa especializada em cobrança para empresas. Nossa missão é recuperar seus créditos e devolver recursos ao caixa da sua empresa, com atuação ética, transparente e focada em resultados estruturados.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 md:p-10 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-lg font-semibold text-secondary mb-6 text-center">Nossa Filosofia</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {philosophyItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
