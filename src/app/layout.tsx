import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
// import { Analytics } from '@vercel/analytics/react';
import './globals.css'
// import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "Amit Sharma - Front-end Developer",
  description: "Amit Sharma is a Front-end Developer specializing in building impactful web applications from scratch. Explore my portfolio to see my projects and skills.",
  keywords: "Amit Sharma, Front-end Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Amit Sharma" }],
  openGraph: {
    title: "Amit Sharma - Front-end Developer",
    description: "Explore the portfolio of Amit Sharma, showcasing innovative web applications and development skills.",
    // url: "https://fardeenmansoori.vercel.app",
    siteName: "Amit Sharma Portfolio",
    // images: [
    //   {
    //     url: "https://ucarecdn.com/ed06f135-d3a8-473d-8057-c7bf634be79b/-/preview/1000x996/",
    //     width: 400,
    //     height: 400,
    //     alt: "Amit Sharma Portfolio",
    //   },
    // ],
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
              {/* <Analytics /> */}
              {/* <ConditionalFooter /> */}
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}