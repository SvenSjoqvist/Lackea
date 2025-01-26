"use client";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Settings, Sun, Check } from "lucide-react";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      title: "Skadebesiktning",
      description:
        "Vi börjar med en noggrann skadebesiktning för att identifiera alla skador på din bil. Vi erbjuder flexibla alternativ: antingen hämtar vi din bil på en plats som passar dig, eller så kan du lämna den hos oss. Under besiktningen dokumenterar vi skadorna och diskuterar med dig vilka reparationer som behövs. Vi tar även hänsyn till eventuella önskemål från ditt försäkringsbolag för att säkerställa en smidig process.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Bilreparation",
      description:
        "Efter skadebesiktningen påbörjar vi reparationen av din bil. Vårt team av certifierade tekniker använder moderna verktyg och högkvalitativa material för att återställa din bil till dess ursprungliga skick. Vi samarbetar nära med dig och ditt försäkringsbolag för att säkerställa att alla reparationer utförs enligt överenskommelsen. Under hela processen håller vi dig informerad om framstegen.",
      icon: <Settings className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "Polering och Slipning",
      description:
        "När reparationerna är klara går din bil till vår poleringsavdelning. Här slipar och polerar vi bilens ytor för att återställa dess glans och skydd. Vi använder professionella produkter och tekniker för att säkerställa en fläckfri finish. Detta steg är avgörande för att ge din bil en fräsch och som ny look, samt för att skydda den mot framtida skador.",
      icon: <Sun className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Kvalitetskontroll och Leverans",
      description:
        "Innan vi levererar din bil utför vi en noggrann kvalitetskontroll. Vi kontrollerar att färgen matchar perfekt, att lacken är slät och att alla reparationer är utförda enligt högsta standard. Efter en sista tvätt och detaljgranskning är din bil redo att återvända till dig. Vi strävar efter att överraska dig med en bil som ser och känns som ny.",
      icon: <Check className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="process-section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Vår Process för Bilreparation
        </h2>

        {/* Section Subtitle */}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hos oss genomgår din bil en noggrann och strukturerad process för att säkerställa att den får den bästa möjliga vården. Läs mer om varje steg nedan.
        </p>

        {/* Accordion Steps */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Header */}
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div>{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>

                {/* Chevron Icon */}
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    activeStep === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Step Description (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeStep === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 px-6 pb-6">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;