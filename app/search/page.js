export default function Search() {
  const crops = [
    {
      name: "Wheat",
      price: "₹2,200 / quintal",
      season: "Rabi",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
    },
    {
      name: "Rice",
      price: "₹2,040 / quintal",
      season: "Kharif",
      image:
        "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
    },
    {
      name: "Maize",
      price: "₹1,960 / quintal",
      season: "Kharif",
      image:
        "https://images.unsplash.com/photo-1592928305748-df92ef41d05d",
    },
    {
      name: "Barley",
      price: "₹1,850 / quintal",
      season: "Rabi",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    },
    {
      name: "Sugarcane",
      price: "₹315 / quintal",
      season: "All Season",
      image:
        "https://images.unsplash.com/photo-1615484477861-3d4c7b5fbb06",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex gap-6">

      {/* Sidebar Filters */}
      <aside className="w-1/4 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Season</label>
          <select className="w-full border rounded-lg p-2 focus:outline-none">
            <option>All</option>
            <option>Kharif</option>
            <option>Rabi</option>
            <option>Zaid</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Base Price Range
          </label>
          <input type="range" className="w-full accent-yellow-400" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹300</span>
            <span>₹2500+</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Farmer Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full border rounded-lg p-2 focus:outline-none"
          />
        </div>
      </aside>

      {/* Crop Results */}
      <main className="w-3/4">
        <h1 className="text-2xl font-semibold mb-6">
          Available Crops
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden
                         shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                         hover:shadow-[0_12px_35px_rgba(252,191,73,0.5)]
                         transition"
            >
              {/* Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">{crop.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Season: {crop.season}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-yellow-500">
                    {crop.price}
                  </span>

                  <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:opacity-90">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
