import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadMagnetForm from '../components/LeadMagnetForm';

const { FiStar, FiShield, FiAward, FiUsers, FiTrendingUp, FiCheckCircle } = FiIcons;

const Home = () => {
  const benefits = [
    {
      icon: FiShield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind'
    },
    {
      icon: FiAward,
      title: '15+ Years Experience',
      description: 'Proven track record of excellence in exterior home improvement'
    },
    {
      icon: FiUsers,
      title: 'Local Experts',
      description: 'California-based team that understands local building codes'
    },
    {
      icon: FiTrendingUp,
      title: 'Increase Home Value',
      description: 'Quality improvements that boost your property value'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Sacramento, CA',
      rating: 5,
      text: 'GoldenState Exteriors transformed our home completely. The new siding and roof look amazing!'
    },
    {
      name: 'Mike Chen',
      location: 'San Jose, CA',
      rating: 5,
      text: 'Professional, punctual, and perfect results. Highly recommend for any exterior work.'
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'The team was fantastic. Great communication throughout the entire project.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Home's
                <span className="text-yellow-400"> Exterior</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                California's premier exterior remodeling experts. From roofing to siding, 
                we deliver quality craftsmanship that stands the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+1-415-684-09000"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-all duration-200 text-center"
                >
                  Call (415) 684-09000
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <LeadMagnetForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose GoldenState Exteriors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just contractors – we're your partners in creating the home of your dreams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete exterior solutions for your home</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Roofing',
                image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Complete roof replacement and repair services'
              },
              {
                title: 'Siding',
                image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Beautiful, durable siding installation and repair'
              },
              {
                title: 'Windows',
                image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Energy-efficient window replacement'
              },
              {
                title: 'Gutters',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Seamless gutter installation and maintenance'
              },
              {
                title: 'Exterior Painting',
                image: 'https://images.unsplash.com/photo-1609767502071-b7f2d157d5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Professional exterior painting services'
              },
              {
                title: 'Complete Remodels',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Full exterior home transformations'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation estimate for your exterior project today.
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
                Call Now: (415) 684-09000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;