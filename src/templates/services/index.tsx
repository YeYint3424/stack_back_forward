"use client";

import { useNavigation } from "@/contexts/NavigationContext";

export default function Services() {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>

          <div className="grid gap-4 mb-8">
            {[
              "Web Development",
              "Mobile Apps",
              "Cloud Solutions",
              "Consulting",
            ].map((service) => (
              <div key={service} className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-700">
              <strong>Try this:</strong> Use the back button to see how the
              stack pops this page!
            </p>
          </div>

          <button
            onClick={() => navigateTo("/")}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
