
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Lançamentos", href: "/lancamentos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Localização", href: "/localizacao" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/d37240a8-ed47-4433-86b6-a0b3223f6dcf.png" 
              alt="Andrade Lançamentos Imobiliários"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-kophita font-bold text-andrade-gold-600">
                Andrade
              </span>
              <span className="text-sm font-montserrat text-gray-600 -mt-1">
                Lançamentos Imobiliários
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-montserrat transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? "text-andrade-gold-700 bg-andrade-gold-50 shadow-sm"
                    : "text-gray-700 hover:text-andrade-gold-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:(11)3333-4444"
              className="flex items-center space-x-2 text-gray-600 hover:text-andrade-gold-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-montserrat text-sm">(11) 3333-4444</span>
            </a>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-montserrat text-gray-700 hover:text-andrade-gold-600">
                Login
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button size="sm" className="gradient-primary text-white font-montserrat font-medium">
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium font-montserrat transition-colors ${
                    isActiveLink(item.href)
                      ? "text-andrade-gold-700 bg-andrade-gold-50"
                      : "text-gray-700 hover:text-andrade-gold-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="tel:(11)3333-4444"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-andrade-gold-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-montserrat">(11) 3333-4444</span>
                </a>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full font-montserrat border-andrade-gold-500 text-andrade-gold-600 hover:bg-andrade-gold-50">
                    Login
                  </Button>
                </Link>
                <Link to="/cadastro" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="gradient-primary text-white w-full font-montserrat font-medium">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
