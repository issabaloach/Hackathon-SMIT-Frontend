import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <p>A-25, Bahadurabad Chowrangi, Karachi, Pakistan</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <p>UAN: 111-729-526</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <p>info@saylaniwelfare.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">How to Apply</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-6">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2025 Saylani Welfare Microfinance. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;