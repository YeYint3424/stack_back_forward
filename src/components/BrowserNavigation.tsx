"use client";

import { useNavigation } from "@/contexts/NavigationContext";

export default function BrowserNavigation() {
  const { canGoBack, canGoForward, goBack, goForward, history, currentIndex } =
    useNavigation();

  return (
    <div className="bg-gray-100 border-b border-gray-300 p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={goBack}
            disabled={!canGoBack}
            className={`p-2 rounded-full ${
              canGoBack
                ? "bg-white hover:bg-gray-200 text-gray-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-colors`}
            title="Go Back"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goForward}
            disabled={!canGoForward}
            className={`p-2 rounded-full ${
              canGoForward
                ? "bg-white hover:bg-gray-200 text-gray-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-colors`}
            title="Go Forward"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 border border-gray-300">
          {history[currentIndex]}
        </div>

        {/* Stack Info */}
        <div className="text-xs text-gray-500 bg-white px-3 py-1 rounded border">
          Stack: {currentIndex + 1}/{history.length}
        </div>
      </div>

      {/* Stack Visualization */}
      <div className="max-w-4xl mx-auto mt-4">
        <div className="text-xs text-gray-500 mb-2">Navigation Stack:</div>
        <div className="flex gap-1 overflow-x-auto pb-2">
          {history.map((path, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs border ${
                index === currentIndex
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-gray-200 text-gray-600 border-gray-300"
              } ${index < currentIndex ? "line-through" : ""}`}
            >
              {path === "/" ? "home" : path.replace("/", "")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
