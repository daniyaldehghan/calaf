import "./globals.css";
import Layout from "../components/layout/Layout";
import { yekan } from "../utils/fonts";
import { ThemeProvider } from "next-themes";
import NextAuthProvider from "../providers/NextAuthProvider";
import { CartProvider } from "../context/CartContext";
// import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: " گیم مکس| خرید و فروش بازی های دیجیتال",
  description: "سایت فروش بازی",
  icons: { icon: "/svg/game.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={yekan.className}>
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <CartProvider>
              <Layout>{children}</Layout>
            </CartProvider>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
