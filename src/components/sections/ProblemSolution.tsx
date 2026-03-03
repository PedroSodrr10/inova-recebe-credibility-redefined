import { AlertTriangle, CheckCircle } from "lucide-react";

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
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            O problema que resolvemos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problem */}
          <div className="bg-background rounded-xl border border-border p-8 space-y-5">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Sua empresa sofre com:
            </h3>
            <ul className="space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-8 space-y-5">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Nossa solução:
            </h3>
            <ul className="space-y-3">
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
