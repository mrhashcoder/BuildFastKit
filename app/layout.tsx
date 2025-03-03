import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Ubuntu_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NavBar from "@/components/core/navbar";
import Footer from "@/components/core/footer";
import StrapiAuthProvider from "@/components/providers/strapi-auth-provider";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/core/sidebar";
import TopNav from "@/components/core/dashnavbar";
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
  return (
    <html lang="en">
      <body className={`${ubuntu_mono.className} bg-background text-primary `}>
        <StrapiAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </StrapiAuthProvider>
      </body>
    </html>
  );
}
