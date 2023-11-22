import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="flex flex-col gap-6 py-24 px-[5%] md:px-[10%]">
          {children}
        </div>
      </body>
    </html>
  );
}
