import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Ubuntu_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NavBar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import SupabaseProvider from "@/components/providers/supabase-provider";
import createClient from "@/components/providers/supabase-server";
import SupabaseAuthProvider from "@/components/providers/supabase-auth-provider";
import { Toaster } from "@/components/ui/toaster";

const ubuntu_mono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const courier_prime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@_rdev7",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <html lang="en">
      <body className={`${ubuntu_mono.className} bg-background text-primary`}>
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                <div>
                  <NavBar />
                  {children}
                  <Footer />
                  <Toaster />
                </div>
            </ThemeProvider>
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
