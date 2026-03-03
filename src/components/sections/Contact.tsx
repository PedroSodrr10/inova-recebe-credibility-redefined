import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { LINKS, getWhatsAppLink } from "@/config/links";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, meu nome é ${form.nome}.\nEmpresa: ${form.empresa}\nTelefone: ${form.telefone}\n\n${form.mensagem}`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Entre em Contato</h2>
          <p className="text-muted-foreground">Estamos prontos para ajudar sua empresa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {LINKS.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">E-mail</p>
                <a href={LINKS.email} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {LINKS.emailAddress}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Endereço</p>
                <p className="text-sm text-muted-foreground">{LINKS.address}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 shadow-sm space-y-4">
            <div>
              <label htmlFor="nome" className="block text-xs font-medium text-foreground mb-1">Nome</label>
              <input
                id="nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="empresa" className="block text-xs font-medium text-foreground mb-1">Empresa</label>
              <input
                id="empresa"
                required
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-xs font-medium text-foreground mb-1">Telefone</label>
              <input
                id="telefone"
                required
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-xs font-medium text-foreground mb-1">Mensagem</label>
              <textarea
                id="mensagem"
                rows={3}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
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
