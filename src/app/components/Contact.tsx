"use client";
import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircleIcon, Send, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const openMaps = () => {
    const address = "Terrängvägen 8, 147 39 Tumba, Sweden";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 transform transition-all hover:scale-[1.02]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center">
              <MapPin className="mr-3 text-blue-400" /> Kontakta oss
            </h2>
            <div className="space-y-4 mb-6">
              <div 
                onClick={openMaps} 
                className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                <MapPin className="mr-2 text-green-400" />
                <span className="underline">Terrängvägen 8, 147 39 Tumba</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-red-400" />
                <a 
                  href="mailto:info@lackea.se" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@lackea.se
                </a>
              </div>
              <div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-yellow-400" />
                  <a 
                    href="tel:+46707799026" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Direktnummer: +46 (0) 70 779 90 26
                  </a>
                </div>
                <div className="flex items-center ml-6">
                  <a 
                    href="tel:+46866441020" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Växel: +46 (0) 8 684 410 20
                  </a>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="mr-2 text-purple-400" />
                Måndag-Fredag 8:00-17:00
              </div>
            </div>
            <div className="flex space-x-4 justify-center mt-6">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors"><MessageCircleIcon /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700/30 transform transition-all hover:scale-[1.02]">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <Send className="mr-3 text-blue-400" /> Komma i kontakt
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Fullständigt namn"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-post"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="message"
                placeholder="Meddelande"
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
                <Send className="mr-2" /> Skicka!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;