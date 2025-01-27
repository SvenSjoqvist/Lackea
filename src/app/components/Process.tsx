"use client";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Settings, Sun, Check } from "lucide-react";
import { useTranslations } from "next-intl";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const t = useTranslations("ProcessSection");

  const steps = [
    {
      title: t("steps.inspection.title"),
      description: t("steps.inspection.description"),
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: t("steps.repair.title"),
      description: t("steps.repair.description"),
      icon: <Settings className="w-6 h-6 text-teal-500" />,
    },
    {
      title: t("steps.polishing.title"),
      description: t("steps.polishing.description"),
      icon: <Sun className="w-6 h-6 text-amber-500" />,
    },
    {
      title: t("steps.qualityControl.title"),
      description: t("steps.qualityControl.description"),
      icon: <Check className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="process" className="process-section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {t("title")}
        </h2>

        {/* Section Subtitle */}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
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