import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/config/links";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-card border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="#" className="flex items-center">
          <img src={logo} alt="INOVA RECEBE" className="h-18 md:h-20 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 px-6 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Falar com Especialista
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-t border-border pb-4" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-10 px-6 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
