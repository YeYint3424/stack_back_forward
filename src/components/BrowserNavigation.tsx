// components/BrowserNavigation.tsx
"use client";

import { useState } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

export default function BrowserNavigation() {
  const {
    canGoBack,
    canGoForward,
    goBack,
    goForward,
    history,
    currentIndex,
    clearHistory,
    navigateTo,
  } = useNavigation();

  const [urlInput, setUrlInput] = useState("");
  const [showStackDetails, setShowStackDetails] = useState(true);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      const path = urlInput.startsWith("/") ? urlInput : `/${urlInput}`;
      navigateTo(path);
      setUrlInput("");
    }
  };

  const formatPath = (path: string) => {
    if (path === "/") return "home";
    return path.replace(/^\//, "").split("?")[0];
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 p-4 shadow-2xl min-h-[90vh]">
      <div className="max-w-6xl mx-auto">
        {/* Main Navigation Bar */}
        <div className="flex items-center gap-4 mb-4">
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={goBack}
              disabled={!canGoBack}
              className={`p-3 rounded-xl transition-all duration-200 ${
                canGoBack
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-900 text-gray-600 cursor-not-allowed"
              }`}
              title="Go Back"
            >
              <svg
                className="w-6 h-6"
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
              className={`p-3 rounded-xl transition-all duration-200 ${
                canGoForward
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-900 text-gray-600 cursor-not-allowed"
              }`}
              title="Go Forward"
            >
              <svg
                className="w-6 h-6"
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

          {/* Refresh Button */}
          <button
            onClick={() => window.location.reload()}
            className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
            title="Refresh"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>

          {/* Address Bar */}
          <form onSubmit={handleUrlSubmit} className="flex-1">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter path (e.g., /about or about)"
                className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors"
              >
                Go
              </button>
            </div>
          </form>

          {/* Stack Info */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
              <div className="text-xs text-gray-400">Stack Position</div>
              <div className="text-lg font-bold text-white">
                {currentIndex + 1}
                <span className="text-gray-400">/{history.length}</span>
              </div>
            </div>

            <button
              onClick={() => setShowStackDetails(!showStackDetails)}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-xl transition-colors flex items-center gap-2"
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Stack Details
            </button>

            <button
              onClick={clearHistory}
              className="bg-red-900/30 hover:bg-red-800/40 text-red-300 hover:text-white px-4 py-2 rounded-xl transition-colors flex items-center gap-2 border border-red-800/50"
              title="Clear History"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Clear
            </button>
          </div>
        </div>

        {/* Current Path Display */}
        <div className="bg-gray-900/50 rounded-xl p-4 mb-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400 mb-1">Current Path</div>
              <div className="text-lg font-mono text-white bg-gray-800 px-4 py-2 rounded-lg">
                {history[currentIndex]}
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Last updated:{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>

        {/* Stack Visualization - Expanded View */}
        {showStackDetails && (
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 animate-slideDown">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Navigation Stack
              </h3>
              <div className="text-sm text-gray-400">
                {history.length} items • Size: {JSON.stringify(history).length}{" "}
                bytes
              </div>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {history.map((path, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                    index === currentIndex
                      ? "bg-blue-900/30 border-l-4 border-blue-500"
                      : index < currentIndex
                      ? "bg-gray-800/50"
                      : "bg-gray-800/30"
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-white">{path}</div>
                      <div className="text-xs text-gray-400">
                        {index === currentIndex && (
                          <span className="inline-flex items-center gap-1 bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <circle cx="10" cy="10" r="3" />
                            </svg>
                            Current
                          </span>
                        )}
                        {index < currentIndex && (
                          <span className="text-gray-500">Back History</span>
                        )}
                        {index > currentIndex && (
                          <span className="text-gray-400">Forward History</span>
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatPath(path)}
                      {path === "/" && " • Root"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stack Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {history.length - (history.length - currentIndex)}
                </div>
                <div className="text-xs text-gray-400">Back Stack</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {currentIndex + 1}
                </div>
                <div className="text-xs text-gray-400">Current Position</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {history.length - currentIndex - 1}
                </div>
                <div className="text-xs text-gray-400">Forward Stack</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
