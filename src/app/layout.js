import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ShopContextProvider } from "@/context/shopContext";

export const metadata = {
  title: {
    default: "Nextjs Store",
    template: "%s | Nextjs Store",
  },
  description: "This is a E-commerce store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">
        <div>
          <ShopContextProvider>
            <Navbar />
            {children}
            <Footer />
          </ShopContextProvider>
        </div>
      </body>
    </html>
  );
}
