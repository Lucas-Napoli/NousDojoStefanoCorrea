import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import icon from "../images/LogoNous.png";

export function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 relative flex items-center justify-center">
            <div className=""></div>
            <div className="">
              <img
                src={icon}
                alt="Logo Jiu-Jitsu"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="font-bold text-xl">
            <span>NOUS</span> <span className="text-jitsu-orange">DOJO</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">
          <a
            href="#team"
            className="font-medium hover:text-jitsu-orange transition-colors"
          >
            Sobre
          </a>
          <a
            href="#classes"
            className="font-medium hover:text-jitsu-orange transition-colors"
          >
            Equipe
          </a>
          <a
            href="#horarios"
            className="font-medium hover:text-jitsu-orange transition-colors"
          >
            Aulas
          </a>
          <a
            href="#products"
            className="font-medium hover:text-jitsu-orange transition-colors"
          >
            Produtos
          </a>
        </nav>

        <a
          href="https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white py-2 px-6">
            Entre em contato
          </Button>
        </a>
      </div>
    </header>
  );
}
