// contexts/NavigationContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface NavigationContextType {
  history: string[];
  currentIndex: number;
  canGoBack: boolean;
  canGoForward: boolean;
  navigateTo: (path: string) => void;
  goBack: () => void;
  goForward: () => void;
  clearHistory: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

const STORAGE_KEY = "browser_navigation_stack";

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [history, setHistory] = useState<string[]>(["/"]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { history: savedHistory, currentIndex: savedIndex } =
          JSON.parse(saved);
        setHistory(savedHistory);
        setCurrentIndex(savedIndex);
      }
    } catch (error) {
      console.error("Failed to load navigation state:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ history, currentIndex, timestamp: Date.now() })
      );
    } catch (error) {
      console.error("Failed to save navigation state:", error);
    }
  }, [history, currentIndex, isInitialized]);

  const navigateTo = (path: string) => {
    // Remove any forward history when navigating to a new page
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(path);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const clearHistory = () => {
    setHistory(["/"]);
    setCurrentIndex(0);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = {
    history,
    currentIndex,
    canGoBack: currentIndex > 0,
    canGoForward: currentIndex < history.length - 1,
    navigateTo,
    goBack,
    goForward,
    clearHistory,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
