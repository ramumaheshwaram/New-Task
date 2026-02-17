import React from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2e3192] text-white py-16 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* About Us Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Specialist in <br />
            School Transportation & Staff Transportation
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5" />
              <a href="mailto:info@arabfalcondubai.ae" className="hover:underline">info@arabfalcondubai.ae</a>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5" />
              <span>04 3976492, 04 3976490</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5" />
              <span>Al Khabaisi - Dubai - United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-4 text-sm font-semibold">
            <li>
              <a href="#" className="border-b-2 border-white pb-1">Home</a>
            </li>
            <li><a href="#" className="hover:opacity-80">About Us</a></li>
            <li><a href="#" className="hover:opacity-80">Latest News</a></li>
            <li><a href="#" className="hover:opacity-80">Contacts</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Services</h3>
          <ul className="space-y-4 text-sm font-semibold">
            <li><a href="#" className="hover:opacity-80">School Transportation</a></li>
            <li><a href="#" className="hover:opacity-80">Staff Transportation</a></li>
            <li><a href="#" className="hover:opacity-80">Hotel Transportation</a></li>
            <li><a href="#" className="hover:opacity-80">Passenger Transportation</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Newsletter</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Sign up for industry alerts, deals, news and insights from Rapido company.
          </p>
          <div className="flex items-stretch bg-[#0a0e27] p-1 rounded-sm">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none text-white px-4 py-3 w-full focus:ring-0 outline-none text-sm"
            />
            <button className="bg-white text-[#2e3192] px-4 flex items-center justify-center transition-hover hover:bg-gray-200">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
