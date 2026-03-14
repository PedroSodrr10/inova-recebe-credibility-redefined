import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/data/faq";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-20 md:py-24 bg-card" ref={ref}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight mb-3">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">Tire suas dúvidas sobre nossos serviços.</p>
        </div>

        <div className="max-w-2xl mx-auto reveal reveal-delay-1">
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-sm transition-shadow duration-200"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
