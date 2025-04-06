import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eightyaday",
  description:
    "porfolio of eightyaday, montreal based artist, editorial, commision, illustration, mural, comics.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div className="dark:bg-secondaryBlack grid min-h-screen grid-rows-[88px_1fr_20px] items-center justify-items-center bg-(--bg) p-5 font-[family-name:var(--font-geist-sans)]">
            <Navigation />

            {children}
            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
