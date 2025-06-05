
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold">ImóvelPrime</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Sua imobiliária de confiança. Encontre o imóvel dos seus sonhos com nossa 
              equipe especializada e atendimento personalizado.
            </p>
            <div className="text-gray-400">
              <p>📞 (11) 3333-4444</p>
              <p>📧 contato@imovelprime.com.br</p>
              <p>📍 Rua das Flores, 123 - Centro</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/localizacao" className="text-gray-400 hover:text-white transition-colors">
                  Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Venda de Imóveis</li>
              <li>Aluguel de Imóveis</li>
              <li>Consultoria Imobiliária</li>
              <li>Avaliação de Imóveis</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ImóvelPrime. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
