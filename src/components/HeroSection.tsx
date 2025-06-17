
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-mint-50">
      <div className="container-width section-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            KAI – <span className="text-mint-600">Smarta priser.</span><br />
            <span className="text-mint-600">Mindre svinn.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Vi hjälper butiker sätta rätt pris på varor som annars riskerar att slängas – 
            och snart får du som konsument full koll på erbjudandena.
          </p>
          
          <Button 
            size="lg" 
            className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Läs mer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
