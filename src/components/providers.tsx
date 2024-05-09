"use client";

import { NavbarProvider } from "@/context/navbarContext";
import React from "react";

interface ProvidersProps {
  children?: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <NavbarProvider>{children}</NavbarProvider>;
};

export default Providers;
