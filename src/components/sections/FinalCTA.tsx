import { LINKS, getWhatsAppLink } from "@/config/links";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container text-center relative reveal">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-5 max-w-2xl mx-auto leading-tight tracking-tight">
          Não permita que a inadimplência comprometa o crescimento da sua empresa.
        </h2>
        <p className="text-sm md:text-base text-secondary-foreground/70 mb-10 max-w-lg mx-auto">
          Entre em contato agora e descubra como podemos ajudar a recuperar seus créditos.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-8 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Falar com Especialista
          </a>
          <a
            href={getWhatsAppLink("Olá, gostaria de solicitar uma proposta de cobrança empresarial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-8 rounded-lg text-sm font-semibold border-2 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 transition-all duration-200"
          >
            Solicitar Proposta
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
