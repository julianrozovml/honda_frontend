"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface NavigationContextValue {
  isMenuOpen:   boolean;
  openMenu:     () => void;
  closeMenu:    () => void;
  isSearchOpen: boolean;
  openSearch:   () => void;
  closeSearch:  () => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  isMenuOpen:   false, openMenu:    () => {}, closeMenu:    () => {},
  isSearchOpen: false, openSearch:  () => {}, closeSearch:  () => {},
});

export function useNavigation() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen,   setMenuOpen]   = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <NavigationContext.Provider
      value={{
        isMenuOpen,
        openMenu:    () => setMenuOpen(true),
        closeMenu:   () => { setMenuOpen(false); },
        isSearchOpen,
        openSearch:  () => setSearchOpen(true),
        closeSearch: () => setSearchOpen(false),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
