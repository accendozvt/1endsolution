export const SITE_URL = "https://1endsolution.com";
export const SITE_NAME = "One End Solution";
export const LOCALE = "en-IN";
export const OG_LOCALE = "en_IN";

export const PHONE_DISPLAY = "+91 70343 79 777";
export const PHONE_TEL = "+917034379777";
export const PHONE_WA_PRIMARY = "917034379777";
export const PHONE_WA_BOOKING = "918714523898";

export const EMAIL = "info@1endsolution.com";

export const ADDRESS =
  "3rd Floor, Panakkapadath Building, Chalikkavattom, Vyttila, Ernakulam, Kerala 682024";

export const BUSINESS_HOURS = "8:00 AM – 6:00 PM · 7 Days a Week";

export const SOCIALS = {
  facebook: "https://www.facebook.com/oneendsolution/",
  instagram: "https://www.instagram.com/oneendsolution/",
};

export const GA_ID = "G-ZE8EEC0V6P";

export const waLink = (phone: string, text?: string) =>
  `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/the-best-professional-cleaning-service-in-kochi" },
  { label: "Residential Cleaning", href: "/residential-cleaning-in-kerala" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning-in-kerala" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
