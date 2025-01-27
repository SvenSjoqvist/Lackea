import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations

// Brands data
const brands = [
  { name: "Sixt", logo: "/brands/Sixt.webp" },
  { name: "Circle K", logo: "/brands/CircleK.webp" },
  { name: "Land Rover", logo: "/brands/landRover.webp" },
  { name: "Hedin Bil", logo: "/brands/Hedin.webp" },
  { name: "British Motorgroup", logo: "/brands/Bmg.webp" },
];

const BrandLogos = () => {
  // Fetch translations for the "BrandLogos" namespace
  const t = useTranslations("BrandLogos");

  return (
    <div className="brand-logos bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          {t("title")} {/* Translated title */}
        </h2>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;