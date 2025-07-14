import React, { createContext, ReactNode, useContext, useState } from "react";

// Definindo o tipo do contexto
interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

// Criando o contexto
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provedor do contexto
interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const value: MenuContextType = {
    isOpen,
    toggleMenu,
    openMenu,
    closeMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

// Hook personalizado para usar o contexto
const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error("useMenu deve ser usado dentro de um MenuProvider");
  }

  return context;
};

export default useMenu;