import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/transitionprovider"
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import { Nunito_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '600', '700', '800', '1000'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Houssam's Portfolio",
  description: "3rd year CS student at ESI Algiers - Web developer, AI enthusiast",
  icons: {
    icon: '/hero1.png',
    shortcut: '/hero1.png',
    apple: '/hero1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={nunitoSans.variable} >
      <head>
        <link rel="icon" href="/hero1.png" type="image/png" />
      </head>
      <body>
        <div className="w-screen h-fit bg-gradient-to-b from-blue-50 to-red-100 ">
          <TransitionProvider>
            
              <Cursor />
              {children} <Analytics />
            
          </TransitionProvider>
        </div>
      </body>
    </html>
  );
}

