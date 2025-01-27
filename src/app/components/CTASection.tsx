import { Check, Star, Shield, Truck, Handshake, Clock, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

const CTASection = () => {
  const t = useTranslations('CTASection');

  const reasons = [
    {
      icon: <Star className="w-12 h-12 text-purple-500" aria-hidden="true" />,
      title: t('reasons.experienced.title'),
      description: t('reasons.experienced.description')
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" aria-hidden="true" />,
      title: t('reasons.quality.title'),
      description: t('reasons.quality.description')
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-500" aria-hidden="true" />,
      title: t('reasons.insurance.title'),
      description: t('reasons.insurance.description')
    },
    {
      icon: <Truck className="w-12 h-12 text-red-500" aria-hidden="true" />,
      title: t('reasons.brands.title'),
      description: t('reasons.brands.description')
    },
    {
      icon: <Check className="w-12 h-12 text-purple-500" aria-hidden="true" />,
      title: t('reasons.pickup.title'),
      description: t('reasons.pickup.description')
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" aria-hidden="true" />,
      title: t('reasons.damage.title'),
      description: t('reasons.damage.description')
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" aria-hidden="true" />,
      title: t('reasons.service.title'),
      description: t('reasons.service.description')
    },
    {
      icon: <Phone className="w-12 h-12 text-red-500" aria-hidden="true" />,
      title: t('reasons.contact.title'),
      description: t('reasons.contact.description')
    }
  ];

  return (
    <section id="tjanster" className="bg-gray-50 py-16" aria-labelledby="why-choose-us-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="why-choose-us-heading" className="text-3xl font-bold text-gray-800 mb-4">
            {t('heading')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <article 
              key={index}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              role="article"
              aria-labelledby={`reason-title-${index}`}
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 id={`reason-title-${index}`} className="ml-4 text-xl font-semibold text-gray-800">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;