"use client"
import React from 'react';
import { Check, Star, Shield, Truck, Handshake, Clock, Phone } from 'lucide-react';

const CTASection = () => {
  const reasons = [
    {
      icon: <Star className="w-12 h-12 text-purple-500" aria-hidden="true" />,
      title: "Erfaren målarverkstad",
      description: "Med många år i branschen garanterar vi professionella och pålitliga tjänster."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" aria-hidden="true" />,
      title: "Hög kvalitet och utmärkt kundupplevelse",
      description: "Vi sätter alltid kvalitet och kundnöjdhet i fokus."
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-500" aria-hidden="true" />,
      title: "Samarbetar med många försäkringsbolag",
      description: "Vi gör processen smidig för dig genom våra partnerskap med ledande försäkringsbolag."
    },
    {
      icon: <Truck className="w-12 h-12 text-red-500" aria-hidden="true" />,
      title: "Reparerar alla bilmärken",
      description: "Oavsett bilmärke eller modell kan vi hjälpa dig med reparationen."
    },
    {
      icon: <Check className="w-12 h-12 text-purple-500" aria-hidden="true" />,
      title: "Hämtning och återlämning",
      description: "Vid bokning erbjuder vi både hämtning och återlämning till den plats du önskar."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" aria-hidden="true" />,
      title: "Skador med eller utan försäkring",
      description: "Vi tar emot alla typer av skador, oavsett om du har försäkring eller inte."
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" aria-hidden="true" />,
      title: "Snabb service och garanti",
      description: "Vi erbjuder snabba och effektiva reparationer med kvalitetsgaranti."
    },
    {
      icon: <Phone className="w-12 h-12 text-red-500" aria-hidden="true" />,
      title: "Kontakta oss",
      description: "Tveka inte att höra av dig för en kostnadsfri konsultation eller bokning på +46 (0) 70 779 90 26"
    }
  ];

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="why-choose-us-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="why-choose-us-heading" className="text-3xl font-bold text-gray-800 mb-4">
            Därför ska ni välja oss
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder professionella och pålitliga tjänster som sätter dig i fokus.
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