"use client";

import { useNavigation } from "@/contexts/NavigationContext";

export default function Home() {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome Home
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience browser navigation with stack implementation
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How Stack Navigation Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-500 text-lg font-semibold mb-2">
                  1. Push to Stack
                </div>
                <p className="text-gray-600">
                  Each page visit gets pushed onto the stack
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-green-500 text-lg font-semibold mb-2">
                  2. Back Button
                </div>
                <p className="text-gray-600">
                  Pops the current page from stack
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-purple-500 text-lg font-semibold mb-2">
                  3. Forward Button
                </div>
                <p className="text-gray-600">
                  Re-pushes previously popped pages
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigateTo("/about")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit About Page
            </button>
            <button
              onClick={() => navigateTo("/services")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
