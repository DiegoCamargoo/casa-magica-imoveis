
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export const SearchForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    neighborhood: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: ""
  });

  const neighborhoods = [
    "Centro", "Vila Nova", "Jardins", "Centro Histórico", 
    "Vila Madalena", "Suburbs", "Bela Vista", "Liberdade"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Busca realizada:", formData);
    // Aqui implementaria a lógica de busca
  };

  return (
    <Card className="p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Tipo de Transação */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo
            </label>
            <Select onValueChange={(value) => setFormData({...formData, type: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectItem value="venda">Venda</SelectItem>
                <SelectItem value="aluguel">Aluguel</SelectItem>
                <SelectItem value="ambos">Ambos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bairro */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bairro
            </label>
            <Select onValueChange={(value) => setFormData({...formData, neighborhood: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {neighborhoods.map((neighborhood) => (
                  <SelectItem key={neighborhood} value={neighborhood}>
                    {neighborhood}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Preço Mínimo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço Mín.
            </label>
            <Input
              type="number"
              placeholder="R$ 0"
              value={formData.minPrice}
              onChange={(e) => setFormData({...formData, minPrice: e.target.value})}
            />
          </div>

          {/* Preço Máximo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço Máx.
            </label>
            <Input
              type="number"
              placeholder="R$ 999.999"
              value={formData.maxPrice}
              onChange={(e) => setFormData({...formData, maxPrice: e.target.value})}
            />
          </div>

          {/* Quartos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quartos
            </label>
            <Select onValueChange={(value) => setFormData({...formData, bedrooms: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Qualquer" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectItem value="1">1 quarto</SelectItem>
                <SelectItem value="2">2 quartos</SelectItem>
                <SelectItem value="3">3 quartos</SelectItem>
                <SelectItem value="4">4+ quartos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-center">
          <Button type="submit" size="lg" className="px-12 gradient-primary text-white">
            Buscar Imóveis
          </Button>
        </div>
      </form>
    </Card>
  );
};
