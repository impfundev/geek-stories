import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeekStories",
  description: "Fullstack blog platform build with Next.js",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lexend.className} hide-scrollbar bg-slate-100`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
