import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeProvider from "@/context/DarkModeContext";
import './globals.css'


export const metadata: Metadata = {
  title: "Fardeen Mansoori",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <DarkModeProvider>
      <body className={`bg-white dark:bg-black`}>
        <Theme className="dark:!bg-black">
          <Navbar/>
          {children}
          <Footer />
        </Theme>
      </body>
    </DarkModeProvider>
    </html>
  );
}
