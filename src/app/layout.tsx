import { ThemeProvider } from "@/components/providers/theme-provider";
import { HighlightInit } from "@highlight-run/next/client";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import { DATA } from "@/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Add metadata for SEO and social sharing
export const metadata: Metadata = {
  metadataBase: new URL(DATA.portfolio),
  title: {
    default: DATA.nickname,
    template: `%s | ${DATA.nickname}`,
  },
  description: DATA.description,
  applicationName: DATA.nickname,
  authors: [{ name: DATA.nickname, url: DATA.portfolio }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="mx-auto max-w-2xl px-4 py-4 sm:px-0 sm:py-16 print:p-12">{children}</main>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <HighlightInit
              projectId={"4d7y176d"}
              serviceName={DATA.nickname.split(" ").join("-").toLowerCase()}
              tracingOrigins
              networkRecording={{
                enabled: true,
                recordHeadersAndBody: true,
                urlBlocklist: [],
              }}
            />
            {/* TODO: Add analytics - Google Analytics, Vercel Analytics or Open-Panel more*/}
          </>
        )}
        {/* TODO: Create React component for Oneko */}
        <Script src="/oneko.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
