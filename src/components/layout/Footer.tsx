
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/d37240a8-ed47-4433-86b6-a0b3223f6dcf.png" 
                alt="Andrade Jr Imóveis"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-kophita font-bold text-andrade-gold-400">
                  Andrade Jr
                </span>
                <span className="text-sm font-montserrat text-gray-300 -mt-1">
                  Lançamentos Imobiliários
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md font-montserrat">
              Especialistas em lançamentos imobiliários. Encontre o imóvel dos seus sonhos com nossa 
              equipe especializada e atendimento personalizado.
            </p>
            <div className="text-gray-400 font-montserrat">
              <p>📞 (11) 3333-4444</p>
              <p>📧 contato@andradejr.com.br</p>
              <p>📍 Rua das Flores, 123 - Centro</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-kophita font-semibold mb-4 text-andrade-gold-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-andrade-gold-400 transition-colors font-montserrat">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-andrade-gold-400 transition-colors font-montserrat">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-andrade-gold-400 transition-colors font-montserrat">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/localizacao" className="text-gray-400 hover:text-andrade-gold-400 transition-colors font-montserrat">
                  Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-kophita font-semibold mb-4 text-andrade-gold-400">Serviços</h3>
            <ul className="space-y-2 text-gray-400 font-montserrat">
              <li>Lançamentos Imobiliários</li>
              <li>Venda de Imóveis</li>
              <li>Aluguel de Imóveis</li>
              <li>Consultoria Imobiliária</li>
              <li>Avaliação de Imóveis</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="font-montserrat">&copy; 2024 Andrade Jr Lançamentos Imobiliários. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
