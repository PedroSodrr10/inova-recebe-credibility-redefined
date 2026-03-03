import { LINKS } from "@/config/links";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10 border-t border-border">
      <div className="container text-center space-y-3">
        <p className="text-sm font-bold text-secondary-foreground tracking-tight">
          INOVA <span className="text-primary">RECEBE</span>
        </p>
        <p className="text-xs text-secondary-foreground/60">
          {LINKS.address} • {LINKS.phone} • {LINKS.emailAddress}
        </p>
        <p className="text-xs text-secondary-foreground/40">
          © {year} INOVA RECEBE. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
