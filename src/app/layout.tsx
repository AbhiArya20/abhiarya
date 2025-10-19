import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import FadeDown from "@/components/animation/fade-down";
import { OneKo } from "@/components/oneko/oneko";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { EDUCATION_DATA } from "@/data/education";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // We can use `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` to get the production URL of the project on Vercel
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const domain = `${protocol}://${host}`;

  // biome-ignore lint/complexity/noFlatMapIdentity: It's fine to use flatMap here
  const educationKeywords = EDUCATION_DATA.map((education) => [
    education.college.name,
    education.university.name,
    education.college.shortName,
    education.university.shortName,
  ]).flatMap((keywords) => keywords);

  return {
    metadataBase: new URL(domain),
    title: {
      default: PERSONAL_DATA.nickname,
      template: `%s | ${PERSONAL_DATA.nickname}`,
    },
    description: PERSONAL_DATA.summary,
    applicationName: PERSONAL_DATA.nickname,
    authors: [
      { name: PERSONAL_DATA.nickname, url: new URL(domain) },
      { name: PERSONAL_DATA.name, url: new URL(domain) },
    ],
    keywords: [
      PERSONAL_DATA.name,
      PERSONAL_DATA.name.split(" ")[0],
      PERSONAL_DATA.nickname,
      PERSONAL_DATA.nickname.split(" ")[0],
      PERSONAL_DATA.nickname.split(" ").join(""),
      PERSONAL_DATA.title,
      PERSONAL_DATA.github,
      PERSONAL_DATA.portfolio,
      ...PERSONAL_DATA.phones,
      ...PERSONAL_DATA.emails,
      ...educationKeywords,
      ...EXPERIENCE_DATA.map((experience) => experience.company),
      ...EXPERIENCE_DATA.map((experience) => experience.position),
      ...SOCIAL_DATA.map((social) => social.username),
    ],
    referrer: "strict-origin-when-cross-origin",
    creator: PERSONAL_DATA.nickname,
    publisher: PERSONAL_DATA.nickname,
    openGraph: {
      url: new URL(domain),
      siteName: PERSONAL_DATA.nickname,
      // TODO: Add og:video support
      type: "website",
      emails: PERSONAL_DATA.emails,
      phoneNumbers: PERSONAL_DATA.phones,
      countryName: "India",
      locale: "en_IN",
      ttl: 60 * 60 * 24,
    },
    twitter: {
      siteId: "1859480388193701888",
      creator: `@${PERSONAL_DATA.twitter}`,
      creatorId: "1859480388193701888",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto max-w-2xl min-w-xs p-4 sm:py-16 md:px-0">
            {/* FadeDown component should be always in layout.tsx - To avoid animation on navigation */}
            <FadeDown>{children}</FadeDown>
          </main>
          <OneKo />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
