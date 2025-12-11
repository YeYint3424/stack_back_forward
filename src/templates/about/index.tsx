"use client";

import { useNavigation } from "@/contexts/NavigationContext";

export default function About() {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            This page demonstrates how the back/forward stack works in web
            browsers.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Stack Behavior:</strong> When you navigate here from Home,
              &quot;Home&quot; stays in the stack and &quot;About&quot; gets
              pushed on top.
            </p>
          </div>

          <button
            onClick={() => navigateTo("/products")}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Check Our Products
          </button>
        </div>
      </div>
    </div>
  );
}
