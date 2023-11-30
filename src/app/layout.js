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
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-2xl 2xl:px-0">
          <Navbar />
        </div>
        <div className="flex flex-col bg-neutral-50">
          <div className="mx-auto max-w-screen-2xl 2xl:px-0">{children}</div>
        </div>
        <div className="mx-auto max-w-screen-2xl 2xl:px-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
