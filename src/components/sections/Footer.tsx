import { LINKS } from "@/config/links";
import logo from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
      <div className="container text-center space-y-4">
        <img src={logo} alt="INOVA RECEBE" className="h-12 w-auto mx-auto" />
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
