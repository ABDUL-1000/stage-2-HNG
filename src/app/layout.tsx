import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Road+Rage&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body 
      
        className={` antialiased`}
      ><div className="flex flex-col space-y-4 justify-center   bg-deepDark">
         <DesktopNavbar/>
         <MobileNavbar />
        {children}
        </div>
      </body>
    </html>
  );
}
