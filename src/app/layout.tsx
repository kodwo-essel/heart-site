import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Prentice | Cardiac Intelligence",
  description: "Next-generation cardiac monitoring and real-time intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${jetbrainsMono.variable} ${dancingScript.variable} font-sans antialiased`}>
        <Navigation />

        {children}
      </body>
    </html>
  );
}
