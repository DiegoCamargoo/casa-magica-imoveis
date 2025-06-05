
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  title: string;
  price: string;
  type: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className={`absolute top-3 left-3 ${
            property.type === 'venda' ? 'bg-green-600' : 'bg-blue-600'
          }`}
        >
          {property.type === 'venda' ? 'Venda' : 'Aluguel'}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>
        
        <p className="text-2xl font-bold text-blue-600 mb-3">
          {property.price}
        </p>
        
        <p className="text-gray-600 mb-4">
          📍 {property.neighborhood}
        </p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>🛏️ {property.bedrooms} quartos</span>
          <span>🚿 {property.bathrooms} banheiros</span>
          <span>📐 {property.area}</span>
        </div>
        
        <div className="flex space-x-2">
          <Button className="flex-1 gradient-primary text-white">
            Ver Detalhes
          </Button>
          <Button variant="outline" className="flex-1">
            Contato
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
