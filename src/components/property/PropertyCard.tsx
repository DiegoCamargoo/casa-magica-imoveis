
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";

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
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <Badge 
          className={`absolute top-4 left-4 font-montserrat shadow-lg ${
            property.type === 'venda' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-andrade-gold-600 hover:bg-andrade-gold-700'
          }`}
        >
          {property.type === 'venda' ? 'Venda' : 'Aluguel'}
        </Badge>
        
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
          <Heart className="h-5 w-5 text-gray-600 hover:text-andrade-gold-600 transition-colors" />
        </button>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-kophita font-bold mb-1">
            {property.title}
          </h3>
          <div className="flex items-center text-white/90 font-montserrat">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.neighborhood}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-3xl font-kophita font-bold text-andrade-gold-600">
            {property.price}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-gray-600">
          <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
            <Bed className="h-4 w-4 mr-2 text-andrade-gold-600" />
            <span className="text-sm font-montserrat font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
            <Bath className="h-4 w-4 mr-2 text-andrade-gold-600" />
            <span className="text-sm font-montserrat font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
            <Square className="h-4 w-4 mr-2 text-andrade-gold-600" />
            <span className="text-sm font-montserrat font-medium">{property.area}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full gradient-primary text-white font-montserrat font-medium">
            Ver Detalhes
          </Button>
          <Button variant="outline" className="w-full font-montserrat border-andrade-gold-500 text-andrade-gold-600 hover:bg-andrade-gold-50">
            Agendar Visita
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
