import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { LINKS, getWhatsAppLink } from "@/config/links";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", mensagem: "" });
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, meu nome é ${form.nome}.\nEmpresa: ${form.empresa}\nTelefone: ${form.telefone}\n\n${form.mensagem}`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight mb-3">Entre em Contato</h2>
          <p className="text-muted-foreground">Estamos prontos para ajudar sua empresa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6 reveal reveal-delay-1">
            {[
              { icon: Phone, label: "WhatsApp", value: LINKS.phone, href: LINKS.whatsapp, external: true },
              { icon: Mail, label: "E-mail", value: LINKS.emailAddress, href: LINKS.email },
              { icon: MapPin, label: "Endereço", value: LINKS.address },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal reveal-delay-2 bg-card rounded-2xl border border-border p-7 shadow-sm space-y-4">
            {[
              { id: "nome", label: "Nome", type: "text" },
              { id: "empresa", label: "Empresa", type: "text" },
              { id: "telefone", label: "Telefone", type: "tel" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-medium text-foreground mb-1.5">{field.label}</label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  value={form[field.id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow duration-200"
                />
              </div>
            ))}
            <div>
              <label htmlFor="mensagem" className="block text-xs font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                id="mensagem"
                rows={3}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
