"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/signup";
  const hideLayout1 = pathname === "/signin";
  return (
    <>
      {!hideLayout && !hideLayout1 && <Header />}
      {children}
      {!hideLayout && !hideLayout1 && <Footer />}
    </>
  );
}

export default Layout;
