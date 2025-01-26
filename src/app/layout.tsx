import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Expert Car Painting & Refinishing Services | Lackea",
  description:
    "Transform your car with our professional car painting and refinishing services. Trusted by leading brands, we offer high-quality repairs, polishing, and more. Book now!",
  keywords: [
    "car painting",
    "car refinishing",
    "auto body repair",
    "car polishing",
    "vehicle restoration",
    "car scratch repair",
    "professional car services",
    "car dent repair",
    "windshield replacement",
    "car maintenance",
  ],
  openGraph: {
    title: "Expert Car Painting & Refinishing Services | Lackea",
    description:
      "Transform your car with our professional car painting and refinishing services. Trusted by leading brands, we offer high-quality repairs, polishing, and more. Book now!",
    type: "website",
    url: "https://lackea.se", // Replace with your actual website URL
    images: [
      {
        url: "https://lackea.se/logo.svg", // Replace with your actual OG image URL
        width: 444.779,
        height: 167.312,
        alt: "Car Painting & Refinishing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Car Painting & Refinishing Services | Lackea",
    description:
      "Transform your car with our professional car painting and refinishing services. Trusted by leading brands, we offer high-quality repairs, polishing, and more. Book now!",
    images: ["https://www.yourcompanywebsite.com/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "Lackea.se",
      url: "https://www.lackea.se", // Replace with your actual website URL
    },
  ],
  metadataBase: new URL("https://www.lackea.se"), // Replace with your actual website URL
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Lackea",
            image: "https://www.lackea.se/logo.svg", // Replace with your logo URL
            url: "https://www.lackea.se", // Replace with your website URL
            telephone: "+46 868 44 10 20", // Replace with your phone number
            address: {
              "@type": "PostalAddress",
              streetAddress: "Terrängvägen 8 147 39",
              addressLocality: "Botkyrka",
              postalCode: "147 39",
              addressCountry: "Sweden",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
            priceRange: "$$",
            sameAs: [
              "https://www.facebook.com/LackeaABSE/", // Replace with your Facebook page
              "https://www.instagram.com/lackeaab/", // Replace with your Instagram page
              "https://www.linkedin.com/company/lackea/about/", // Replace with your LinkedIn page
            ],
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}