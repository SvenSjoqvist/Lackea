import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

// Define valid locales
type ValidLocale = "se" | "en" | "es" | "ar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ValidLocale }>;
}): Promise<Metadata> {
  // Await the params promise to get the locale
  const { locale } = await params;
  const resolvedLocale = locale || "se"; // Default to Swedish

  const metadata: Record<ValidLocale, Metadata> = {
    se: {
      title: "Expert Billackering & Lackförsegling | Lackea",
      description:
        "Professionell billackering & lackförsegling i Stockholm. Vi erbjuder skadeåtgärd, polering och lackskydd av högsta kvalitet. Boka en kostnadsfri konsultation idag!",
      keywords: [
        "billackering Stockholm",
        "lackförsegling Stockholm",
        "skadeåtgärd bil",
        "lackskydd bil",
        "kostnadsfri konsultation",
        "bilreparation",
        "bilpolering",
        "bilrenovering",
        "repor bil",
        "professionell biltjänst",
        "bucklor bil",
        "vindruta byte",
        "bilunderhåll",
      ],
      openGraph: {
        title: "Expert Billackering & Lackförsegling | Lackea",
        description:
          "Förvandla din bil med våra professionella billackerings- och förseglingstjänster. Betrodd av ledande varumärken erbjuder vi reparationer, polering och mer av hög kvalitet. Boka nu!",
        type: "website",
        url: "https://lackea.se",
        images: [
          {
            url: "https://lackea.se/logo.svg",
            width: 444.779,
            height: 167.312,
            alt: "Billackering & Lackförsegling",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Expert Billackering & Lackförsegling | Lackea",
        description:
          "Förvandla din bil med våra professionella billackerings- och förseglingstjänster. Betrodd av ledande varumärken erbjuder vi reparationer, polering och mer av hög kvalitet. Boka nu!",
        images: ["https://lackea.se/twitter-image.jpg"],
      },
    },
    en: {
      title: "Expert Car Painting & Refinishing Services | Lackea",
      description:
        "Expert car painting & refinishing in Stockholm. We provide scratch repair, polishing, and premium paint protection. Book a free consultation today!",
      keywords: [
        "car painting Stockholm",
        "car refinishing Stockholm",
        "scratch repair car",
        "paint protection car",
        "free consultation",
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
        url: "https://lackea.se/en",
        images: [
          {
            url: "https://lackea.se/logo.svg",
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
        images: ["https://lackea.se/twitter-image.jpg"],
      },
    },
    es: {
      title: "Servicios de Pintura y Reparación de Autos | Lackea",
      description:
        "Expertos en pintura y reparación de autos en Estocolmo. Ofrecemos reparación de rayones, pulido y protección premium de pintura. ¡Reserva una consulta gratuita hoy!",
      keywords: [
        "pintura de autos Estocolmo",
        "reparación de autos Estocolmo",
        "reparación de rayones de autos",
        "protección de pintura de autos",
        "consulta gratuita",
        "reparación de carrocería",
        "pulido de autos",
        "restauración de vehículos",
        "reparación de rayones",
        "servicio profesional de autos",
        "reparación de abolladuras",
        "reemplazo de parabrisas",
        "mantenimiento de autos",
      ],
      openGraph: {
        title: "Servicios de Pintura y Reparación de Autos | Lackea",
        description:
          "Transforma tu auto con nuestros servicios profesionales de pintura y reparación. Confiados por marcas líderes, ofrecemos reparaciones de alta calidad, pulido y más. ¡Reserva ahora!",
        type: "website",
        url: "https://lackea.se/es",
        images: [
          {
            url: "https://lackea.se/logo.svg",
            width: 444.779,
            height: 167.312,
            alt: "Servicios de Pintura y Reparación de Autos",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Servicios de Pintura y Reparación de Autos | Lackea",
        description:
          "Transforma tu auto con nuestros servicios profesionales de pintura y reparación. Confiados por marcas líderes, ofrecemos reparaciones de alta calidad, pulido y más. ¡Reserva ahora!",
        images: ["https://lackea.se/twitter-image.jpg"],
      },
    },
    ar: {
      title: "خدمات دهن السيارات وإصلاحها | Lackea",
      description:
        "خبراء دهن وإصلاح السيارات في ستوكهولم. نقدم إصلاح الخدوش، التلميع، وحماية الطلاء الفاخرة. احجز استشارتك المجانية اليوم!",
      keywords: [
        "دهن السيارات ستوكهولم",
        "إصلاح السيارات ستوكهولم",
        "إصلاح خدوش السيارات",
        "حماية طلاء السيارات",
        "استشارة مجانية",
        "إصلاح هيكل السيارة",
        "تلميع السيارات",
        "استعادة المركبات",
        "إصلاح الخدوش",
        "خدمة السيارات المهنية",
        "إصلاح الدموع",
        "استبدال الزجاج الأمامي",
        "صيانة السيارات",
      ],
      openGraph: {
        title: "خدمات دهن السيارات وإصلاحها | Lackea",
        description:
          "حوّل سيارتك مع خدماتنا المهنية لدهن السيارات والإصلاح. معتمدون من قبل العلامات التجارية الرائدة، نقدم إصلاحات عالية الجودة، تلميع والمزيد. احجز الآن!",
        type: "website",
        url: "https://lackea.se/ar",
        images: [
          {
            url: "https://lackea.se/logo.svg",
            width: 444.779,
            height: 167.312,
            alt: "خدمات دهن السيارات وإصلاحها",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "خدمات دهن السيارات وإصلاحها | Lackea",
        description:
          "حوّل سيارتك مع خدماتنا المهنية لدهن السيارات والإصلاح. معتمدون من قبل العلامات التجارية الرائدة، نقدم إصلاحات عالية الجودة، تلميع والمزيد. احجز الآن!",
        images: ["https://lackea.se/twitter-image.jpg"],
      },
    },
  };
  

  const commonMetadata: Partial<Metadata> = {
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
        url: "https://www.lackea.se",
      },
    ],
    metadataBase: new URL("https://www.lackea.se"),
    alternates: {
      canonical: resolvedLocale === "se" ? "/" : `/${resolvedLocale}`,
    },
  };

  return {
    ...commonMetadata,
    ...metadata[resolvedLocale],
  };
}

// Generate JSON-LD schema based on locale
function generateSchema(locale: ValidLocale) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Lackea",
    image: "https://www.lackea.se/logo.svg",
    url: locale === "se" ? "https://www.lackea.se" : `https://www.lackea.se/${locale}`,
    telephone: "+46 868 44 10 20",
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
      "https://www.facebook.com/LackeaABSE/",
      "https://www.instagram.com/lackeaab/",
      "https://www.linkedin.com/company/lackea/about/",
    ],
  };

  return JSON.stringify(schema);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: ValidLocale }>;
}>) {
  // Await the params promise to get the locale
  const { locale } = await params;

  // Check if the locale is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Fetch messages for the locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema(locale) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
