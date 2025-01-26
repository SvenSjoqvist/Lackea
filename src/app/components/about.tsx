"use client";
import React from 'react';
import { Check, MapPin, Car, Users } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  const keyPoints = [
    "Plast- och plåtreparationer",
    "Lackering & fälgreparationer", 
    "Vindrutebyten & stenskottslagning",
    "Rekonditionering"
  ];

  return (
    <section className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                Vi behandlar din bil som en familj
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
                Belägen i Botkyrka, söder om Stockholm, är vi en dedikerad billackeringsfirma med ett omfattande tjänsteutbud och starka samarbeten med biluthyrningsfirmor, bilhandlare och bensinstationer.
              </p>

              <div className="space-y-3 md:space-y-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-green-500 mr-2 md:mr-3 w-5 h-5" />
                    <span className="text-gray-200 text-sm md:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics & Achievements */}
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-2xl order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mx-auto mb-2 md:mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Botkyrka</h3>
                  <p className="text-xs md:text-base text-gray-400">Strategiskt placerad</p>
                </div>
                <div className="text-center">
                  <Car className="w-8 h-8 md:w-12 md:h-12 text-yellow-500 mx-auto mb-2 md:mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">500</h3>
                  <p className="text-xs md:text-base text-gray-400">Bil Kapacitet</p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 text-center">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <Users className="text-purple-500 mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs md:text-base text-gray-300">Privat & Företagskunder</span>
                </div>
                <blockquote className="italic text-xs md:text-base text-gray-300">
                  "Varje bil är mer än ett fordon - den är en berättelse."
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