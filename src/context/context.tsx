import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  activeTag: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  handleOnTagClick: (tag: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTag, setActiveTag] = useState<string>("Все темы");
  const [isLoading, setIsLoading] = useState(true);
  const handleOnTagClick = (tag: string) => {
    setActiveTag(tag);
  };

  const contextValue: ThemeContextType = {
    activeTag,
    isLoading,
    setIsLoading,
    handleOnTagClick,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
