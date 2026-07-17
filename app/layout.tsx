import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_URL, PHONE_DISPLAY, EMAIL, GA_ID, SOCIALS } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Best Deep Cleaning Service in Kochi - One End Solution",
  description:
    "Discover the best deep cleaning service in Kochi, specializing in both commercial and residential cleaning, offer cleaning, maintenance & sanitization services.",
  icons: {
    icon: "/images/cropped-one-end-logo-1-Small-Copy-Copy.png",
    apple: "/images/cropped-one-end-logo-1-Small-Copy-Copy.png",
  },
  openGraph: {
    locale: "en_GB",
    type: "website",
    siteName: "One End Solution",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "One End Solution",
  url: SITE_URL,
  logo: `${SITE_URL}/images/one-end-logo-1-Small-Copy-Copy.png`,
  image: `${SITE_URL}/images/one-end-logo-1-Small-Copy-Copy.png`,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "3rd Floor, Panakkapadath Building, Chalikkavattom, Vyttila",
    addressLocality: "Ernakulam",
    addressRegion: "Kerala",
    postalCode: "682024",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  areaServed: ["Kochi", "Ernakulam", "Kerala"],
  sameAs: [SOCIALS.facebook, SOCIALS.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
