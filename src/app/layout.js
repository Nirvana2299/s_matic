import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense } from "react";
import Loading from './loading'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Industrial Web App",
  description: "Industrial Web App",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />} >
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
