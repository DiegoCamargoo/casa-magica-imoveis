import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-kophita font-bold text-gray-900 mb-6">
            Nossa Localização
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
            Venha nos visitar em nossa sede no coração da cidade. 
            Estamos estrategicamente localizados para melhor atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-kophita">Encontre-nos no Mapa</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Simulação de mapa - em produção seria integrado com Google Maps */}
                <div className="w-full h-80 bg-gradient-to-br from-andrade-yellow-100 to-andrade-gold-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20"></div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">📍</span>
                    </div>
                    <div className="bg-white/90 p-4 rounded-lg shadow-md">
                      <p className="font-kophita font-semibold text-gray-800">Andrade</p>
                      <p className="text-sm text-gray-600 font-montserrat">Rua das Flores, 123 - Centro</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full gradient-primary text-white font-montserrat">
                    Abrir no Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-kophita">Endereço Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-kophita font-medium text-gray-900">Rua das Flores, 123</p>
                    <p className="text-gray-600 font-montserrat">Centro - São Paulo, SP</p>
                    <p className="text-gray-600 font-montserrat">CEP: 01234-567</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-gray-600 font-montserrat">
                      Estamos localizados em uma região central, próximo a estações de metrô, 
                      bancos e principais avenidas da cidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-kophita">Como Chegar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-kophita font-medium text-gray-900 mb-2">🚇 Transporte Público</h4>
                    <p className="text-sm text-gray-600 font-montserrat">
                      Estação Sé (Linhas Azul e Vermelha) - 300m
                      <br />
                      Estação São Bento (Linha Azul) - 500m
                    </p>
                  </div>
                  <div>
                    <h4 className="font-kophita font-medium text-gray-900 mb-2">🚗 De Carro</h4>
                    <p className="text-sm text-gray-600 font-montserrat">
                      Fácil acesso pelas principais vias:
                      <br />
                      - Viaduto do Chá
                      <br />
                      - Rua da Consolação
                      <br />
                      - Avenida São João
                    </p>
                  </div>
                  <div>
                    <h4 className="font-kophita font-medium text-gray-900 mb-2">🅿️ Estacionamento</h4>
                    <p className="text-sm text-gray-600 font-montserrat">
                      Estacionamento próprio disponível para clientes
                      <br />
                      (2 horas gratuitas)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-kophita">Pontos de Referência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 font-montserrat">
                  <p>🏛️ Próximo ao Teatro Municipal (200m)</p>
                  <p>🏪 Shopping Light (150m)</p>
                  <p>🏛️ Catedral da Sé (400m)</p>
                  <p>🏢 Edifício Martinelli (300m)</p>
                  <p>🌳 Vale do Anhangabaú (250m)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visit Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-kophita font-bold text-gray-900 mb-4">
                Agende sua Visita
              </h3>
              <p className="text-gray-600 mb-6 font-montserrat">
                Nossa equipe está pronta para recebê-lo. Venha conhecer nosso escritório 
                e conversar pessoalmente sobre seus lançamentos imobiliários.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="gradient-primary text-white font-montserrat">
                  Agendar Visita
                </Button>
                <p className="text-sm text-gray-500 font-montserrat">
                  Ou entre em contato: (11) 3333-4444
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Location;
