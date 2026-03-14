import { LINKS } from "@/config/links";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
      <div className="container text-center space-y-4">
        <p className="text-base font-heading font-bold text-secondary-foreground tracking-tight">
          INOVA <span className="text-primary">RECEBE</span>
        </p>
        <p className="text-xs text-secondary-foreground/50 max-w-md mx-auto leading-relaxed">
          {LINKS.address} • {LINKS.phone} • {LINKS.emailAddress}
        </p>
        <div className="pt-2">
          <p className="text-xs text-secondary-foreground/30">
            © {year} INOVA RECEBE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
