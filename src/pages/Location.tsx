
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Localização
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venha nos visitar em nossa sede no coração da cidade. 
            Estamos estrategicamente localizados para melhor atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Encontre-nos no Mapa</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Simulação de mapa - em produção seria integrado com Google Maps */}
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20"></div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">📍</span>
                    </div>
                    <div className="bg-white/90 p-4 rounded-lg shadow-md">
                      <p className="font-semibold text-gray-800">ImóvelPrime</p>
                      <p className="text-sm text-gray-600">Rua das Flores, 123 - Centro</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full gradient-primary text-white">
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
                <CardTitle className="text-xl">Endereço Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Rua das Flores, 123</p>
                    <p className="text-gray-600">Centro - São Paulo, SP</p>
                    <p className="text-gray-600">CEP: 01234-567</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-gray-600">
                      Estamos localizados em uma região central, próximo a estações de metrô, 
                      bancos e principais avenidas da cidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Como Chegar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🚇 Transporte Público</h4>
                    <p className="text-sm text-gray-600">
                      Estação Sé (Linhas Azul e Vermelha) - 300m
                      <br />
                      Estação São Bento (Linha Azul) - 500m
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🚗 De Carro</h4>
                    <p className="text-sm text-gray-600">
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
                    <h4 className="font-medium text-gray-900 mb-2">🅿️ Estacionamento</h4>
                    <p className="text-sm text-gray-600">
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
                <CardTitle className="text-xl">Pontos de Referência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agende sua Visita
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe está pronta para recebê-lo. Venha conhecer nosso escritório 
                e conversar pessoalmente sobre suas necessidades imobiliárias.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="gradient-primary text-white">
                  Agendar Visita
                </Button>
                <p className="text-sm text-gray-500">
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
