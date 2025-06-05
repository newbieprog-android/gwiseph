import { useState, useEffect } from 'react';
import Logo from "@/components/Logo";
import Image from "next/image";

const models = [
  {
    name: 'iPhone 16 Pro',
    image: '/models/16procolors.webp',
    description: '"Built to Lead." Titanium strength. A18 Pro speed.',
    colors: ['Desert Titanium', 'Black Titanium', 'White Titanium', 'Natural Titanium'],
    capacities: ['128GB', '256GB', '512GB', '1TB'],
  },
  {
    name: 'iPhone 16 Pro Max',
    image: '/models/16procolors.webp',
    description: '"The Best. Period." The most powerful iPhone ever.',
    colors: ['Desert Titanium', 'Black Titanium', 'White Titanium', 'Natural Titanium'],
    capacities: ['256GB', '512GB', '1TB'],
  },
  {
    name: 'iPhone 16 Plus',
    image: '/models/16colors.webp',
    description: '"Everything you want. And more of it." A big deal — literally',
    colors: ['Black', 'White', 'Pink', 'Teal','Ultramarine'],
    capacities: ['128GB', '256GB', '512GB'],
  },
  {
    name: 'iPhone 16',
    image: '/models/16colors.webp',
    description: '"Welcome to the future". Faster. Smarter. Sleeker.',
    colors: ['Black', 'White', 'Pink', 'Teal','Ultramarine'],
    capacities: ['128GB', '256GB', '512GB'],
  },
  {
    name: 'iPhone 16e',
    image: '/models/16ecolors.webp',
    description: '“Essentially iPhone." Everything you need. Nothing you dont.',
    colors: ['White', 'Black'],
    capacities: ['128GB', '256GB', '512GB'],
  },
  {
    name: 'iPhone 15 Plus',
    image: '/models/15colors.webp',
    description: '“More iPhone than ever”. Size meets style.',
    colors: ['Pink', 'Green', 'Yellow', 'Black', 'Blue'],
    capacities: ['128GB', '256GB','512GB'],
  },
  {
    name: 'iPhone 15',
    image: '/models/15colors.webp',
    description: '“Color. Power. Precision.”, Beauty with Brains.',
    colors: ['Pink', 'Green', 'Yellow', 'Black', 'Blue'],
    capacities: ['128GB', '256GB','512GB'],
  },
  {
    name: 'iPhone 14 Plus',
    image: '/models/14colors.webp',
    description: '“Battery life, reimagined.” Big screen. Big endurance..',
    colors: ['Product RED', 'Startlight', 'Midnight', 'Yellow', 'Purple', 'Blue'],
    capacities: ['128GB', '256GB','512GB'],
  },
  {
    name: 'iPhone 14',
    image: '/models/14colors.webp',
    description: '“Dont think. Just shoot.” Great photos. Every time.',
    colors: ['Product RED', 'Startlight', 'Midnight', 'Yellow', 'Purple', 'Blue'],
    capacities: ['128GB', '256GB','512GB'],
  },
  {
    name: 'iPhone 13',
    image: '/models/13colors.webp',
    description: '“So fast, it feels unfair." A leap where it matters.',
    colors: ['Blue', 'Pink', 'Starlight', 'Midnight', 'Green'],
    capacities: ['128GB', '256GB','512GB'],
    
  },
    {
    name: 'iPhone SE (3rd Gen)',
    image: '/models/secolors.webp',
    description: '“The power of Pro. The size of simplicity.”Small is still mighty.',
    colors: ['Midnight', 'Starlight', 'Product RED'],
    capacities: ['64GB','128GB', '256GB'],
  }
];

export default function iPhonePage() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    if (selectedModel && selectedColor && selectedCapacity) {
      // Replace with your sheet.best or API URL
      fetch('https://api.sheetbest.com/sheets/b4bda95a-ad7a-4dd1-8843-ab538df779eb')
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(entry =>
            entry.Model === selectedModel.name &&
            entry.Color === selectedColor &&
            entry.Capacity === selectedCapacity
          );
          setPriceList(filtered);
        });
    }
  }, [selectedModel, selectedColor, selectedCapacity]);

  return (
    <main className="p-6 font-sans">
     <header className="flex justify-between items-center mb-6">
     <Logo />
    <nav className="space-x-6 text-sm">
    <a href="#">Back</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    </nav>
    </header>

      {!selectedModel && (
         <section>
    <h2 className="text-2xl font-semibold mb-4">Select your iPhone model</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {models.map((model, index) => (
        <div key={index} className="bg-white p-4 border rounded shadow-sm">
          <img
            src={model.image}
            alt={model.name}
               className="h-32 object-contain"
          />
          <h3 className="font-bold text-lg">{model.name}</h3>
          <p className="text-sm text-gray-600">{model.description}</p>
          <button
            onClick={() => setSelectedModel(model)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded"
          >
            Compare Prices
          </button>
        </div>
      ))}
    </div>
  </section>
      )}

     {selectedModel && (
  <section className="mt-12">
    <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
      {/* LEFT: Selection Panel */}
      <div className="md:w-2/3 w-full">
        <h2 className="text-xl font-bold mb-2">{selectedModel.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{selectedModel.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold mb-1">Choose Color</h4>
          <div className="flex gap-2 flex-wrap">
            {selectedModel.colors.map((color) => (
              <button
                key={color}
                className={`px-3 py-1 rounded-full border ${
                  selectedColor === color
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-1">Choose Storage</h4>
          <div className="flex gap-2 flex-wrap">
            {selectedModel.capacities.map((capacity) => (
              <button
                key={capacity}
                className={`px-3 py-1 rounded-full border ${
                  selectedCapacity === capacity
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setSelectedCapacity(capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="md:w-1/3 w-full flex justify-center">
        <img
          src={selectedModel.image}
          alt={selectedModel.name}
          className="h-64 object-contain"
        />
            </div>
          </div>

         

          {priceList.length > 0 && (
            <div className="bg-gray-50 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Price Comparison</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-800">
                  
                </thead>
                <thead className="bg-gray-100 text-gray-800">
  <tr>
    <th className="p-2 text-left">Store</th>
    <th className="p-2 text-left">Price</th>
    <th className="p-2 text-left">Availability</th>
    <th className="p-2 text-left">Link</th>
  </tr>
</thead>
<tbody className="text-gray-700">
  {priceList.map((entry, i) => (
    <tr key={i} className="border-t">
      <td className="p-2 font-medium">{entry.Store}</td>
      <td className="p-2">{entry.Price}</td>
      <td className="p-2">
        {entry.Available === "Yes" ? (
          <span className="text-green-600 font-semibold">In stock</span>
        ) : (
          <span className="text-red-500 font-semibold">Out of stock</span>
        )}
      </td>
      <td className="p-2">
        {entry.Available === "Yes" ? (
          <a
            href={entry.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Site
          </a>
        ) : (
          <span className="text-gray-400">Unavailable</span>
        )}
      </td>
    </tr>
  ))}
</tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">Disclaimer: Lazada prices shown are regular prices. Lazada frequently offers flash sales, vouchers, or limited-time promos that may lower the actual price.</p>
              <p className="text-xs text-gray-500 mt-2">Shopee prices may differ per user based on available vouchers, coins, or personalized offers.</p>
              <p className="text-xs text-gray-500 mt-2">Prices may change. We recommend checking the store page for current promos and final pricing.</p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
