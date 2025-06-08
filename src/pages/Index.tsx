
import { useState } from "react";
import { SearchForm } from "@/components/property/SearchForm";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Building2, Star } from "lucide-react";

const Index = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Residencial Vista Dourada",
      price: "R$ 450.000",
      type: "venda",
      neighborhood: "Centro",
      bedrooms: 3,
      bathrooms: 2,
      area: "120m²",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Apartamento Golden Palace",
      price: "R$ 2.500/mês",
      type: "aluguel",
      neighborhood: "Vila Nova",
      bedrooms: 2,
      bathrooms: 1,
      area: "80m²",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Condomínio Andrade Jardins",
      price: "R$ 850.000",
      type: "venda",
      neighborhood: "Jardins",
      bedrooms: 4,
      bathrooms: 3,
      area: "200m²",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=60"
    }
  ];

  const stats = [
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "2.500+", label: "Famílias Atendidas", icon: Users },
    { number: "50+", label: "Empreendimentos", icon: Building2 },
    { number: "98%", label: "Satisfação", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
            alt="Empreendimento Andrade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-andrade-gold-500 text-white font-montserrat">
              Lançamento Exclusivo
            </Badge>
            <h1 className="text-5xl md:text-7xl font-kophita font-bold text-white mb-6 leading-tight">
              Seu novo lar te espera
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-montserrat leading-relaxed">
              Descubra os melhores lançamentos imobiliários com a qualidade e tradição que só a 
              <span className="text-andrade-gold-400 font-semibold"> Andrade </span>
              pode oferecer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white font-montserrat font-medium group">
                Conhecer Lançamentos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-montserrat">
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-kophita font-bold text-center mb-8 text-gray-900">
              Encontre seu Imóvel Ideal
            </h2>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-andrade-gold-500 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-kophita font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-montserrat">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-andrade-gold-100 text-andrade-gold-800 font-montserrat">
              Lançamentos Exclusivos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-kophita font-bold text-gray-900 mb-6">
              Empreendimentos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
              Conheça nossos lançamentos mais procurados, projetados para oferecer 
              qualidade de vida e valorização do seu investimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="font-montserrat border-andrade-gold-500 text-andrade-gold-600 hover:bg-andrade-gold-50 group">
              Ver Todos os Lançamentos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-andrade-gold-100 text-andrade-gold-800 font-montserrat">
                Sobre a Andrade
              </Badge>
              <h2 className="text-4xl font-kophita font-bold text-gray-900 mb-6">
                Tradição e Inovação em Lançamentos Imobiliários
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-montserrat leading-relaxed">
                Com mais de 15 anos de experiência no mercado imobiliário, a Andrade Lançamentos 
                Imobiliários se especializou em conectar famílias aos seus lares ideais.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-montserrat leading-relaxed">
                Nossa expertise em lançamentos nos permite oferecer as melhores oportunidades 
                de investimento, sempre com transparência, qualidade e atendimento personalizado.
              </p>
              <Button size="lg" className="gradient-primary text-white font-montserrat group">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                alt="Equipe Andrade"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-andrade-gold-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-kophita font-bold">2.500+</div>
                <div className="font-montserrat">Famílias Realizadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-kophita font-bold mb-6">
            Pronto para Encontrar seu Novo Lar?
          </h2>
          <p className="text-xl mb-8 text-white/90 font-montserrat max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você a encontrar o 
            imóvel perfeito ou realizar o melhor investimento da sua vida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-montserrat font-medium">
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-andrade-gold-600 font-montserrat">
              Agendar Visita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
