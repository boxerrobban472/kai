
import { RefreshCw, BarChart3, MapPin, Handshake } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Dynamisk prissättning för kortdatumvaror",
      description: "Automatisk prisjustering baserad på utgångsdatum och efterfrågan"
    },
    {
      icon: BarChart3,
      title: "Algoritm som lär sig vad som säljer – och till vilket pris",
      description: "Maskininlärning som optimerar prissättning i realtid"
    },
    {
      icon: MapPin,
      title: "Kommande prisbevakning för konsumenter",
      description: "Se lokala erbjudanden direkt i din närhet"
    },
    {
      icon: Handshake,
      title: "Volymrabatt: ju fler som köper, desto lägre pris för alla",
      description: "Gemensamma besparingar genom smart gruppköp"
    }
  ];

  return (
    <section className="py-20 bg-mint-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vad är KAI?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            KAI är en datadriven prissättningsalgoritm för livsmedelsbutiker.
            Vi hjälper butiker optimera priset på varor nära utgångsdatum i realtid – 
            för att sälja mer, slänga mindre, och samtidigt erbjuda bättre erbjudanden till kunderna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-mint-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-mint-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
