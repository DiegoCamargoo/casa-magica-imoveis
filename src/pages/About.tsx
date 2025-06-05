
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Maria Silva",
      role: "Diretora Comercial",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=60",
      description: "15 anos de experiência no mercado imobiliário"
    },
    {
      name: "João Santos",
      role: "Corretor Senior",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=60",
      description: "Especialista em imóveis comerciais e residenciais"
    },
    {
      name: "Ana Costa",
      role: "Consultora de Vendas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=60",
      description: "Focada em atendimento personalizado ao cliente"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a ImóvelPrime
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 10 anos no mercado, somos uma imobiliária comprometida em 
            encontrar o imóvel perfeito para nossos clientes.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=60"
              alt="Nossa sede"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Na ImóvelPrime, nossa missão é conectar pessoas aos seus lares dos sonhos. 
              Acreditamos que cada cliente merece um atendimento personalizado e uma 
              experiência excepcional durante todo o processo de compra, venda ou locação.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com uma equipe altamente qualificada e conhecimento profundo do mercado 
              local, oferecemos soluções imobiliárias completas e confiáveis.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Imóveis Vendidos</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Confiança</h3>
                <p className="text-gray-600">
                  Construímos relacionamentos duradouros baseados na transparência e honestidade.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excelência</h3>
                <p className="text-gray-600">
                  Buscamos sempre superar as expectativas dos nossos clientes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Inovação</h3>
                <p className="text-gray-600">
                  Utilizamos tecnologia de ponta para facilitar o processo imobiliário.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
