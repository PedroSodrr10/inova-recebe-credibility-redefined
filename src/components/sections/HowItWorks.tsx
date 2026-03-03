import { LINKS } from "@/config/links";

const steps = [
  { number: "1", title: "Você entra em contato", description: "Fale conosco pelo WhatsApp, e-mail ou formulário." },
  { number: "2", title: "Envia dados dos títulos/devedores", description: "Nos envie as informações e documentos necessários." },
  { number: "3", title: "Iniciamos negociação extrajudicial", description: "Contato multicanal com o devedor buscando acordo." },
  { number: "4", title: "Se necessário, medidas jurídicas", description: "Nossa equipe jurídica atua para garantir a recuperação." },
  { number: "5", title: "Acompanhamento e repasse dos valores", description: "Valores recuperados são repassados com total transparência." },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Como Funciona</h2>
          <p className="text-muted-foreground">Um processo estruturado para recuperar seus créditos.</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {step.number}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
              </div>
              <div className="pb-10">
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-7 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
          >
            Quero iniciar a recuperação
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
