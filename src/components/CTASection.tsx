
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vill du vara med?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Vi söker pilotbutiker och framtida konsumenter som vill testa vår plattform.
          </p>
          
          <Button 
            size="lg"
            className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Bli testpartner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
