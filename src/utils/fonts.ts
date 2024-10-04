import { Bricolage_Grotesque, Inter } from "next/font/google";


const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
//   variable: "--font-bricolage-grotesque",
});

const inter_init = Inter({
  subsets: ['latin'],
  display: 'swap',
//   variable: '--font-inter',
})

export const bricolage_grotesque = bricolage_grotesque_init.className;
export const inter = inter_init.className;