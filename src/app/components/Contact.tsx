"use client";
import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, MessageCircleIcon, Send, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ContactSection: React.FC = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if the user is on an iOS device
    const isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsIOS(isIphone);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const openLocation = () => {
    const latitude = 59.1959331;
    const longitude = 17.8755517;
    const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    if (isIOS) {
      // On iOS, open a menu to select either Apple Maps or Google Maps
      const appleMapsUrl = `maps:${latitude},${longitude}`;
      const googleMapsUrl = `comgooglemaps://?q=${latitude},${longitude}`;

      // Try Google Maps first, then fallback to Apple Maps
      window.location.href = googleMapsUrl;
      setTimeout(() => {
        window.location.href = appleMapsUrl;
      }, 25);
    } else {
      // On Android or other platforms, use Google Maps
      window.open(locationUrl, '_blank');
    }
  };

  return (
    <section id="kontakt" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 transform transition-all hover:scale-[1.02]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center">
              <MapPin className="mr-3 text-blue-400" /> {t('title')}
            </h2>
            <div className="space-y-4 mb-6">
              <div 
                onClick={openLocation} 
                className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                <MapPin className="mr-2 text-green-400" />
                <span className="underline">{t('address')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-red-400" />
                <a 
                  href="mailto:info@lackea.se" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('email')}
                </a>
              </div>
              <div>
                {/* Phone Numbers */}
                <div className="flex items-start mb-4">
                  <Phone className="mr-3 text-yellow-400 mt-3" />
                  <div className="flex flex-col">
                    <a 
                      href="tel:+46707799026" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {t('directNumber')}
                    </a>
                    <a 
                      href="tel:+46866441020" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {t('switchboard')}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="mr-2 text-purple-400" />
                {t('openingHours')}
              </div>
              {/* WhatsApp Contact */}
              <div className="flex items-center space-x-2 mt-4">
                <MessageCircleIcon className="text-green-500" />
                <a 
                  href="https://wa.me/46707799026" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700/30 transform transition-all hover:scale-[1.02]">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <Send className="mr-3 text-blue-400" /> {t('getInTouch')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder={t('fullName')}
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('phonePlaceholder')}
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="message"
                placeholder={t('messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Send className="mr-2" /> {t('sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
