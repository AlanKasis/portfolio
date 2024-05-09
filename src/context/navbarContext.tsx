import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarContextProps {
  navbar: boolean;
  toggleNavbar: () => void;
}

type NavbarContextProviderProps = {
  children?: ReactNode;
};

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider = ({ children }: NavbarContextProviderProps) => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleNavbar = () => {
    setNavbar((prevState) => !prevState);
  };

  useEffect(() => {
    setNavbar(false);
  }, [pathname]);

  return (
    <NavbarContext.Provider value={{ navbar, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = (): NavbarContextProps => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
