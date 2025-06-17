
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container-width section-padding">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Byggt med omtanke av teamet bakom KAI
          </p>
          
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-mint-600 transition-colors">
              Kontakt
            </a>
            <a href="#" className="text-gray-500 hover:text-mint-600 transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="text-gray-500 hover:text-mint-600 transition-colors">
              Press
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
