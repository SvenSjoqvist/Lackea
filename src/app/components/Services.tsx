"use client"
import React from 'react';
import { Shield, Car, Sparkles, Wrench, Star, Handshake, Truck, Check, Clock, Phone } from 'lucide-react';

const CombinedSection = () => {
  const serviceDetails = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Komplett Skadehantering",
      description: "Professionell reparation för alla fordonstyper, med eller utan försäkring.",
      details: "Från små bucklor till omfattande skador - vi hanterar allt med precision och omsorg."
    },
    {
      icon: <Car className="w-12 h-12 text-green-500" />,
      title: "Lackering & Polering",
      description: "Högkvalitativ lackering och polering för alla fordonsmodeller.",
      details: "Återställ din bils ursprungliga glans med vår expertis inom lackarbete."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-500" />,
      title: "Specialreparationer",
      description: "Vindrutebyte, stenskottsreparation och bucklor utan lackering.",
      details: "Specialiserade tekniker för precisa och effektiva reparationer."
    },
    {
      icon: <Wrench className="w-12 h-12 text-red-500" />,
      title: "Professionell Service",
      description: "Snabb, pålitlig och högkvalitativ fordonsreparation.",
      details: "Modern teknologi kombinerad med gedigen expertis för bästa resultat."
    }
  ];

  const reasons = [
    {
      icon: <Star className="w-12 h-12 text-purple-500" />,
      title: "Erfaren målarverkstad",
      description: "Med många år i branschen garanterar vi professionella och pålitliga tjänster."
    },
    {
      icon: <Handshake className="w-12 h-12 text-blue-500" />,
      title: "Samarbetar med många försäkringsbolag",
      description: "Vi gör processen smidig för dig genom våra partnerskap med ledande försäkringsbolag."
    },
    {
      icon: <Truck className="w-12 h-12 text-green-500" />,
      title: "Hämtning och återlämning",
      description: "Vid bokning erbjuder vi både hämtning och återlämning till den plats du önskar."
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "Snabb service och garanti",
      description: "Vi erbjuder snabba och effektiva reparationer med kvalitetsgaranti."
    }
  ];

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-800 mb-4">
            Våra Tjänster och Varför Välja Oss
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professionella fordonsreparationer med fokus på kvalitet och kundnöjdhet.
          </p>
        </header>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceDetails.map((service, index) => (
            <article 
              key={index}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 id={`service-title-${index}`} className="ml-4 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-700 font-medium">{service.details}</p>
            </article>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Varför välja oss?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Här är några skäl att välja oss för dina fordonsbehov.
          </p>
        </div>
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

export default CombinedSection;