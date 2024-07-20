"use client";
import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarBg, setNavbarBg] = useState("white");
  const [navbarVisible, setNavbarVisible] = useState(true);

  return (
    <NavbarContext.Provider
      value={{ navbarBg, setNavbarBg, navbarVisible, setNavbarVisible }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
