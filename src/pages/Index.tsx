
import { useState } from "react";
import { SearchForm } from "@/components/property/SearchForm";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Casa Moderna no Centro",
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
      title: "Apartamento Vila Nova",
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
      title: "Casa de Luxo Jardins",
      price: "R$ 850.000",
      type: "venda",
      neighborhood: "Jardins",
      bedrooms: 4,
      bathrooms: 3,
      area: "200m²",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Studio Centro Histórico",
      price: "R$ 1.800/mês",
      type: "aluguel",
      neighborhood: "Centro Histórico",
      bedrooms: 1,
      bathrooms: 1,
      area: "45m²",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "Cobertura Vila Madalena",
      price: "R$ 650.000",
      type: "venda",
      neighborhood: "Vila Madalena",
      bedrooms: 3,
      bathrooms: 2,
      area: "150m²",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "Casa Térrea Suburbs",
      price: "R$ 3.200/mês",
      type: "aluguel",
      neighborhood: "Suburbs",
      bedrooms: 4,
      bathrooms: 2,
      area: "180m²",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=60"
    }
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Encontre o Imóvel dos seus Sonhos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Milhares de opções para venda e aluguel em toda a cidade
          </p>
          <Button size="lg" variant="secondary" className="animate-fade-in">
            Ver Imóveis
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Busque seu Imóvel Ideal
            </h2>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Imóveis em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Ver Todos os Imóveis
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa Vender ou Alugar seu Imóvel?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Nossa equipe especializada está pronta para ajudar você
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Anunciar Imóvel
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-800">
              Falar com Corretor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
