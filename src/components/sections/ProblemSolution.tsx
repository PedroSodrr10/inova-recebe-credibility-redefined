import { AlertTriangle, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  "Alto índice de inadimplência",
  "Tempo perdido com cobrança interna",
  "Falta de retorno dos devedores",
  "Impacto direto no fluxo de caixa",
];

const solutions = [
  "Processo estruturado de cobrança",
  "Comunicação multicanal",
  "Acompanhamento diário",
  "Suporte jurídico completo",
];

const ProblemSolution = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-24 bg-card" ref={ref}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
            O problema que resolvemos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Problem */}
          <div className="reveal reveal-delay-1 bg-background rounded-2xl border border-border p-8 space-y-5">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-4 h-4 text-destructive" />
              </div>
              Sua empresa sofre com:
            </h3>
            <ul className="space-y-3.5">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="reveal reveal-delay-2 bg-accent rounded-2xl border border-primary/15 p-8 space-y-5">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              Nossa solução:
            </h3>
            <ul className="space-y-3.5">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
