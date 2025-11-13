"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/signup";
  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default Layout;
