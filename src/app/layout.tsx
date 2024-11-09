import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "Fardeen Mansoori - Full Stack Web Developer",
  description: "Fardeen Mansoori is a Full Stack Web Developer specializing in building impactful web applications from scratch. Explore my portfolio to see my projects and skills.",
  keywords: "Fardeen Mansoori, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Fardeen Mansoori" }],
  openGraph: {
    title: "Fardeen Mansoori - Full Stack Web Developer",
    description: "Explore the portfolio of Fardeen Mansoori, showcasing innovative web applications and development skills.",
    url: "https://fardeenmansuri.onrender.com",
    siteName: "Fardeen Mansoori Portfolio",
    images: [
      {
        url: "https://ucarecdn.com/ed06f135-d3a8-473d-8057-c7bf634be79b/-/preview/1000x996/",
        width: 800,
        height: 600,
        alt: "Fardeen Mansoori Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}