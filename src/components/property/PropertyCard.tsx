
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
          className={`absolute top-3 left-3 font-montserrat ${
            property.type === 'venda' ? 'bg-green-600' : 'bg-andrade-gold-600'
          }`}
        >
          {property.type === 'venda' ? 'Venda' : 'Aluguel'}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-kophita font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>
        
        <p className="text-2xl font-kophita font-bold text-andrade-gold-600 mb-3">
          {property.price}
        </p>
        
        <p className="text-gray-600 mb-4 font-montserrat">
          📍 {property.neighborhood}
        </p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4 font-montserrat">
          <span>🛏️ {property.bedrooms} quartos</span>
          <span>🚿 {property.bathrooms} banheiros</span>
          <span>📐 {property.area}</span>
        </div>
        
        <div className="flex space-x-2">
          <Button className="flex-1 gradient-primary text-white font-montserrat">
            Ver Detalhes
          </Button>
          <Button variant="outline" className="flex-1 font-montserrat border-andrade-gold-500 text-andrade-gold-600 hover:bg-andrade-gold-50">
            Contato
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
