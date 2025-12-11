"use client";

// import { useNavigation } from "@/contexts/NavigationContext";

export default function Products() {
  // const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Products
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {["Product A", "Product B", "Product C", "Product D"].map(
              (product) => (
                <div
                  key={product}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Amazing product description here...
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                    Learn More
                  </button>
                </div>
              )
            )}
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <p className="text-green-700">
              <strong>Stack Tip:</strong> Navigate between pages and watch the
              stack visualization update in real-time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
