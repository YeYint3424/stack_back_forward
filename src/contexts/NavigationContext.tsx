"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  history: string[];
  currentIndex: number;
  canGoBack: boolean;
  canGoForward: boolean;
  navigateTo: (path: string) => void;
  goBack: () => void;
  goForward: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [history, setHistory] = useState<string[]>(["/"]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  const value = {
    history,
    currentIndex,
    canGoBack: currentIndex > 0,
    canGoForward: currentIndex < history.length - 1,
    navigateTo,
    goBack,
    goForward,
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
