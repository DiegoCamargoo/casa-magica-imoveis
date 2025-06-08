
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Localização", href: "/localizacao" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d37240a8-ed47-4433-86b6-a0b3223f6dcf.png" 
              alt="Andrade Jr Imóveis"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-kophita font-bold text-andrade-gold-500">
                Andrade Jr
              </span>
              <span className="text-xs font-montserrat text-gray-600 -mt-1">
                Lançamentos Imobiliários
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium font-montserrat transition-colors ${
                  isActiveLink(item.href)
                    ? "text-andrade-gold-600 bg-andrade-gold-50"
                    : "text-gray-700 hover:text-andrade-gold-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="font-montserrat border-andrade-gold-500 text-andrade-gold-600 hover:bg-andrade-gold-50">
                Login
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button size="sm" className="gradient-primary text-white font-montserrat">
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-montserrat transition-colors ${
                    isActiveLink(item.href)
                      ? "text-andrade-gold-600 bg-andrade-gold-50"
                      : "text-gray-700 hover:text-andrade-gold-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full font-montserrat border-andrade-gold-500 text-andrade-gold-600 hover:bg-andrade-gold-50">
                    Login
                  </Button>
                </Link>
                <Link to="/cadastro" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="gradient-primary text-white w-full font-montserrat">
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
