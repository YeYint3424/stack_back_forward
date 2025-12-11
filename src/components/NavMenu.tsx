"use client";

import { useNavigation } from "@/contexts/NavigationContext";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
];

export default function NavMenu() {
  const { navigateTo, history, currentIndex } = useNavigation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-500 text-white px-3 py-2 rounded-lg font-bold">
              StackNav
            </div>
            <span className="ml-2 text-sm text-gray-500">
              Browser Simulation
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  history[currentIndex] === item.path
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
