import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiShield, FiEye, FiDroplet, FiBrush, FiTool } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Roofing Services',
      description: 'Complete roof replacement, repair, and maintenance services using premium materials.',
      features: [
        'Asphalt shingle installation',
        'Metal roofing systems',
        'Roof leak repairs',
        'Gutter integration',
        'Emergency storm damage repair'
      ],
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiShield,
      title: 'Siding Installation',
      description: 'Beautiful, durable siding that protects your home while enhancing curb appeal.',
      features: [
        'Vinyl siding installation',
        'Fiber cement siding',
        'Wood siding restoration',
        'Insulation upgrades',
        'Trim and fascia work'
      ],
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiEye,
      title: 'Window Replacement',
      description: 'Energy-efficient windows that reduce costs and improve comfort.',
      features: [
        'Double and triple-pane windows',
        'Energy Star certified options',
        'Custom window sizing',
        'Professional installation',
        'Warranty protection'
      ],
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiDroplet,
      title: 'Gutter Systems',
      description: 'Seamless gutters and downspouts to protect your home\'s foundation.',
      features: [
        'Seamless aluminum gutters',
        'Gutter guard installation',
        'Downspout extensions',
        'Gutter cleaning services',
        'Repair and maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiBrush,
      title: 'Exterior Painting',
      description: 'Professional painting services that protect and beautify your home.',
      features: [
        'Premium paint products',
        'Surface preparation',
        'Color consultation',
        'Trim and detail work',
        'Long-lasting finishes'
      ],
      image: 'https://images.unsplash.com/photo-1609767502071-b7f2d157d5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiTool,
      title: 'Complete Remodels',
      description: 'Full exterior transformations that completely change your home\'s appearance.',
      features: [
        'Design consultation',
        'Permit handling',
        'Project management',
        'Quality materials',
        'Warranty coverage'
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'We visit your home to assess your needs and provide expert recommendations.'
    },
    {
      step: '02',
      title: 'Detailed Estimate',
      description: 'Receive a comprehensive, transparent quote with no hidden fees.'
    },
    {
      step: '03',
      title: 'Project Planning',
      description: 'We handle permits, materials, and scheduling to ensure smooth execution.'
    },
    {
      step: '04',
      title: 'Expert Installation',
      description: 'Our skilled craftsmen complete your project with attention to detail.'
    },
    {
      step: '05',
      title: 'Final Walkthrough',
      description: 'We ensure everything meets our high standards and your expectations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive exterior home improvement solutions designed to enhance your home's 
              beauty, protection, and value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                      <SafeIcon icon={service.icon} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-64 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final walkthrough, we ensure a smooth, 
              professional experience every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and detailed estimate for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+1-415-684-09000"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Call (415) 684-09000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;