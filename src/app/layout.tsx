import { ThemeProvider } from "@/components/providers/theme-provider";
import ReactQueryProvider from "@/components/providers/react-query";
import { HighlightInit } from "@highlight-run/next/client";
import { Geist, Geist_Mono } from "next/font/google";
import { EXPERIENCE_DATA } from "@/data/experience";
import { EDUCATION_DATA } from "@/data/education";
import { PERSONAL_DATA } from "@/data/personal";
import { PROJECT_DATA } from "@/data/projects";
import OneKo from "@/components/oneko/oneko";
import { SOCIAL_DATA } from "@/data/social";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_DATA.portfolio),
  title: {
    default: PERSONAL_DATA.nickname,
    template: `%s | ${PERSONAL_DATA.nickname}`,
  },
  description: PERSONAL_DATA.description,
  applicationName: PERSONAL_DATA.nickname,
  authors: [{ name: PERSONAL_DATA.nickname, url: PERSONAL_DATA.portfolio }],
  keywords: [
    PERSONAL_DATA.name,
    PERSONAL_DATA.nickname,
    PERSONAL_DATA.title,
    PERSONAL_DATA.github ?? "AbhiArya20",
    PERSONAL_DATA.nickname.split(" ").join(""),
    ...EDUCATION_DATA.map(education => education.college),
    ...EDUCATION_DATA.map(education => education.university),
    ...PROJECT_DATA.map(project => project.name),
    ...EXPERIENCE_DATA.map(experience => experience.company),
    ...EXPERIENCE_DATA.map(experience => experience.position),
    ...SOCIAL_DATA.map(social => social.username),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen bg-repeat font-sans antialiased`}
      >
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main className="mx-auto max-w-2xl px-4 py-4 sm:py-16 md:px-0 print:p-12">{children}</main>
          </ThemeProvider>
        </ReactQueryProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <HighlightInit
              projectId={"4d7y176d"}
              serviceName={PERSONAL_DATA.nickname.split(" ").join("-").toLowerCase()}
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
        <OneKo />
      </body>
    </html>
  );
}
