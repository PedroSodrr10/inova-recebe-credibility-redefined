import { Building2, RefreshCcw, Layers, Award } from "lucide-react";

const targets = [
  { icon: Building2, text: "Vendem B2B" },
  { icon: RefreshCcw, text: "Trabalham com faturamento recorrente" },
  { icon: Layers, text: "Possuem alto volume de cobrança" },
  { icon: Award, text: "Precisam profissionalizar a recuperação de crédito" },
];

const MadeFor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">Feito para empresas que</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {targets.map((t) => (
            <div key={t.text} className="bg-card rounded-xl border border-border p-6 text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <t.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeFor;
