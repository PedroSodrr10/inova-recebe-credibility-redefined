import { LINKS, getWhatsAppLink } from "@/config/links";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4 max-w-2xl mx-auto">
          Não permita que a inadimplência comprometa o crescimento da sua empresa.
        </h2>
        <p className="text-sm text-secondary-foreground/75 mb-8 max-w-lg mx-auto">
          Entre em contato agora e descubra como podemos ajudar a recuperar seus créditos.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-7 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
          >
            Falar com Especialista
          </a>
          <a
            href={getWhatsAppLink("Olá, gostaria de solicitar uma proposta de cobrança empresarial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-7 rounded-md text-sm font-semibold border-2 border-primary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
          >
            Solicitar Proposta
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
