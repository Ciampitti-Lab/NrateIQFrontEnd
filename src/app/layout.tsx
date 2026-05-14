import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Absolute URLs for Open Graph / Twitter. Set `NEXT_PUBLIC_SITE_URL` on Vercel when using a custom domain. */
function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

const SITE_TITLE = "NRate IQ";
const SITE_DESCRIPTION =
  "Crop modeling-based decision support tool for corn nitrogen fertilization across Indiana. Uses the MRTN approach to recommend economically optimal N rates based on local grain and nitrogen prices.";

const OG_IMAGE_PATH = "/logos/NrateIQ_logo_v6.svg";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logos/NrateIQ_favicon_bw.svg", type: "image/svg+xml" }],
    apple: "/logos/NrateIQ_favicon_bw.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: OG_IMAGE_PATH,
        type: "image/svg+xml",
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
