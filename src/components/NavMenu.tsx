// components/NavMenu.tsx
"use client";

import { useNavigation } from "@/contexts/NavigationContext";

const navItems = [
  { path: "/", label: "🏠 Home" },
  { path: "/about", label: "📖 About" },
  { path: "/services", label: "⚡ Services" },
  { path: "/products", label: "🛒 Products" },
];

export default function NavMenu() {
  const { navigateTo, history, currentIndex } = useNavigation();

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
              🌐 StackNav
            </div>
            <div className="hidden md:block">
              <div className="text-white font-medium">Browser Simulation</div>
              <div className="text-xs text-gray-400">
                with localStorage persistence
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  history[currentIndex] === item.path
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="bg-gray-800/50 rounded-xl px-4 py-2 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Path History</div>
            <div className="flex items-center gap-2 flex-wrap">
              {history
                .slice(Math.max(0, currentIndex - 2), currentIndex + 1)
                .map((path, idx, arr) => (
                  <div key={idx} className="flex items-center">
                    <div
                      className={`px-3 py-1 rounded-lg text-sm ${
                        idx === arr.length - 1
                          ? "bg-blue-900/50 text-blue-300 font-medium"
                          : "bg-gray-700/50 text-gray-400"
                      }`}
                    >
                      {formatPath(path)}
                    </div>
                    {idx < arr.length - 1 && (
                      <svg
                        className="w-4 h-4 text-gray-600 mx-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function formatPath(path: string): string {
  if (path === "/") return "Home";
  return path.charAt(1).toUpperCase() + path.slice(2);
}
