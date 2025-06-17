
import { ShoppingCart, Archive, TrendingUp, Leaf } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: ShoppingCart,
      value: "15%",
      label: "lägre priser i snitt",
      description: "med rätt prissättning"
    },
    {
      icon: Archive,
      value: "500+",
      label: "kg mat räddat",
      description: "under pilotperioden"
    },
    {
      icon: TrendingUp,
      value: "Realtid",
      label: "dataoptimering",
      description: "kontinuerlig förbättring"
    },
    {
      icon: Leaf,
      value: "Mindre",
      label: "svinn för alla",
      description: "både butik och kund"
    }
  ];

  return (
    <section className="py-20 bg-mint-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Varför det här spelar roll
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verklig påverkan för miljö, ekonomi och samhälle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-mint-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-mint-600" />
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-mint-600 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
