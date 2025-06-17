
const ProductPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Så här fungerar det
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En smidig upplevelse för både butiker och konsumenter
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/lovable-uploads/27c7edb4-02e5-4d9a-b5ef-0de0e2e41fe4.png" 
                alt="KAI app erbjudande"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smarta erbjudanden
              </h3>
              <p className="text-gray-600">
                Konsumenter får personliga erbjudanden på varor nära utgångsdatum
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/lovable-uploads/325bf090-852a-4ad2-a193-056909fe8325.png" 
                alt="KAI dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Realtidsdashboard
              </h3>
              <p className="text-gray-600">
                Butiker får full översikt över priser och besparingar
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/lovable-uploads/58ddd343-ad6a-49fe-a725-0040e8b0a7ac.png" 
                alt="KAI QR-kod bekräftelse"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enkel bekräftelse
              </h3>
              <p className="text-gray-600">
                Snabb och säker betalning med QR-kod i kassan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;
