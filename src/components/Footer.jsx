import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Roofing',
    'Siding',
    'Windows',
    'Gutters',
    'Exterior Painting',
    'Complete Remodels'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GS</span>
              </div>
              <span className="text-xl font-bold">GoldenState Exteriors</span>
            </div>
            <p className="text-gray-300 mb-4">
              California's premier exterior remodeling experts, transforming homes with 
              quality craftsmanship since 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-green-500" />
                <a 
                  href="tel:+1-415-684-09000"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  (415) 684-09000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-green-500" />
                <a 
                  href="mailto:info@goldenstateexteriors.com"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  info@goldenstateexteriors.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">California Statewide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} GoldenState Exteriors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                License Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;