import { LINKS, getWhatsAppLink } from "@/config/links";

const Hero = () => {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-muted-foreground bg-background rounded-full px-4 py-1.5 border border-border">
              Atuação B2B • Extrajudicial • Judicial
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-secondary">
              Cobrança Empresarial com Segurança Jurídica e Resultado
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              A INOVA RECEBE assume a recuperação dos seus créditos com ética, transparência e atuação extrajudicial e judicial completa.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
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
                className="inline-flex items-center h-12 px-7 rounded-md text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Solicitar Proposta
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
              <div className="text-center space-y-3 p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-secondary">Recuperação de Crédito</p>
                <p className="text-xs text-muted-foreground">Profissional • Ético • Estruturado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
