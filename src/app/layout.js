import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edu Wave",
  description: "",
  icons: "favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <Navbar />
        <div className="flex flex-col min-h-screen mb-20 bg-neutral-50">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
