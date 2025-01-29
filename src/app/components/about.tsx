import { Check, MapPin, Car, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const AboutUsSection: React.FC = () => {
  const t = useTranslations('aboutUs');

  const keyPoints = [
    t('keyPoints.point1'),
    t('keyPoints.point2'),
    t('keyPoints.point3'),
    t('keyPoints.point4'),
  ];

  return (
    <section id="om-oss" className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                {t('title')}
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
                {t('description')}
              </p>
              <div className="space-y-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-green-500 mr-3 w-6 h-6" />
                    <span className="text-gray-200 text-base md:text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-2xl order-1 md:order-2">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">{t('location.title')}</h3>
                  <p className="text-base md:text-lg text-gray-400">{t('location.subtitle')}</p>
                </div>
                <div className="text-center">
                  <Car className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">{t('capacity.title')}</h3>
                  <p className="text-base md:text-lg text-gray-400">{t('capacity.subtitle')}</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-purple-500 mr-3 w-6 h-6" />
                  <span className="text-base md:text-lg text-gray-300">{t('customers.title')}</span>
                </div>
                <blockquote className="italic text-base md:text-lg text-gray-300">
                  &quot;{t('customers.quote')}&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
