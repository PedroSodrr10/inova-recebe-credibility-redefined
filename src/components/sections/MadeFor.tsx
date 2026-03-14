import { Building2, RefreshCcw, Layers, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const targets = [
  { icon: Building2, text: "Vendem B2B" },
  { icon: RefreshCcw, text: "Trabalham com faturamento recorrente" },
  { icon: Layers, text: "Possuem alto volume de cobrança" },
  { icon: Award, text: "Precisam profissionalizar a recuperação de crédito" },
];

const MadeFor = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">Feito para empresas que</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {targets.map((t, i) => (
            <div key={t.text} className={`reveal reveal-delay-${i + 1} group bg-card rounded-2xl border border-border p-6 text-center space-y-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/15 transition-colors duration-300">
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
