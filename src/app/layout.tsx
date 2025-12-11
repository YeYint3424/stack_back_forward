import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/contexts/NavigationContext";
import BrowserNavigation from "@/components/BrowserNavigation";
import NavMenu from "@/components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stack Navigation Demo",
  description: "Demonstrating browser back/forward stack implementation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationProvider>
          <div className="min-h-screen bg-gray-50">
            <BrowserNavigation />
            <NavMenu />
            <main>{children}</main>
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
