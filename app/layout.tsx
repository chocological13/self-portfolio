import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Annisa's Journey",
  description: "Portfolio of My Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
