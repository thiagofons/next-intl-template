"use client"

import { createContext, useContext } from "react";

interface PageContextProps {
  pageName: string;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};

export const PageProvider: React.FC<{ pageName: string; children: React.ReactNode }> = ({ pageName, children }) => {
  return (
    <PageContext.Provider value={{ pageName }}>
      {children}
    </PageContext.Provider>
  );
};