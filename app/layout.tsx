import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeekStories",
  description: "Fullstack blog platform build with Next.js",
};

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ui/toggle-dark-mode";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-background text-foreground"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
