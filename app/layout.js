//main layout of the application
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CartProvider  from "@/components/utils/Providers";

const railway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Application",
  description: "Demo application for a ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={railway.className} data-theme="fantasy">
        <CartProvider>
          <NavBar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
