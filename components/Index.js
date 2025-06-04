import { ExternalLink, Smartphone, Laptop, Watch, Headphones } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">GwisePH – Smart Gadget Price Tracker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#prices" className="text-gray-600 hover:text-blue-600 transition-colors">Prices</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compare Gadget Prices in the Philippines
            <br />
            <span className="text-blue-600">(Starting with Apple — Android coming soon!)</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest Apple product prices from authorized retailers across the Philippines.
            Compare prices and make informed purchasing decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">iPhone</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Laptop className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">MacBook</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Watch className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Apple Watch</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Headphones className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">AirPods</span>
            </div>
          </div>
        </div>
      </section>

      {/* Google Sheet Embed Section */}
      <section id="prices" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Current Price List</h3>
            <p className="text-gray-600 mb-6">
              Real-time pricing data from authorized Apple retailers in the Philippines
            </p>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Last updated: Live data</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQYxB5zQqF4p8tQ8jL7vYxR9gH6nU2wK3mV5sT8fE1qA9bC4dR7sX2nP6yT1vF8kH3mQ9wL5zE2sR4v/pubhtml?widget=true&amp;headers=false"
                className="w-full h-96 md:h-[600px] border-0"
                title="Apple Product Prices Philippines"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Full Spreadsheet</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;