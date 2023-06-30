import Navbar from "@/components/Navbar";
import "./globals.css";
import localFont from "@next/font/local";
import { Providers } from "./Providers";
import AnimateLayout from "./AnimateLayout";
import ClientAnimation from "./ClientAnimation";
const lobsterTwo = localFont({
  src: [
    {
      path: "../public/fonts/LobsterTwo-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/LobsterTwo-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/LobsterTwo-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/LobsterTwo-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lobsterTwo",
});

const overPass = localFont({
  src: [
    {
      path: "../public/fonts/Overpass-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Overpass-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-overPass",
});

const prozaLibre = localFont({
  src: [
    {
      path: "../public/fonts/ProzaLibre-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/ProzaLibre-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/ProzaLibre-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-prozaLibre",
});

export const metadata = {
  title: "Krzysztof Szafran Portfolio / Christopher Saffron Portfolio",
  description: "Made with Next.js, Tailwind and Three.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${lobsterTwo.variable} ${prozaLibre.variable} ${overPass.variable} font-sans`}
    >
      <body className="bg-[#1C1C1E] font-overPass">
        <Providers>
          <Navbar />
          {/* <ClientAnimation>{children}</ClientAnimation> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
