// components/ContentRouter.tsx
"use client";

import { useNavigation } from "@/contexts/NavigationContext";
import About from "@/templates/about";
import Home from "@/templates/home";
import Products from "@/templates/products";
import Services from "@/templates/services";

export default function ContentRouter() {
  const { history, currentIndex } = useNavigation();
  const currentPath = history[currentIndex];

  const getComponent = () => {
    switch (currentPath) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/services":
        return <Services />;
      case "/products":
        return <Products />;
      default:
        return <NotFound path={currentPath} />;
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="animate-fadeIn">{getComponent()}</div>
    </div>
  );
}

function NotFound({ path }: { path: string }) {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The path{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              &quot;{path}&quot;
            </code>{" "}
            doesn&apos;t exist.
          </p>
          <button
            onClick={() => navigateTo("/")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
