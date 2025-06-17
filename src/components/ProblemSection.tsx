
const ProblemSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Hundratusentals ton ätbar mat slängs i Sverige varje år. Samtidigt brottas både 
            butiker och konsumenter med ineffektiv prissättning och osynliga erbjudanden.
          </p>
          
          <div className="bg-mint-50 rounded-2xl p-8 md:p-12 border border-mint-100">
            <div className="text-6xl md:text-7xl font-bold text-mint-600 mb-4">78%</div>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              handlar redan rabatterat – men utan insyn, struktur eller timing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
