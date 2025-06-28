import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiCheck, FiUser, FiMail, FiPhone, FiHome } = FiIcons;

const LeadMagnetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    zipCode: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const projectTypes = [
    'Roofing',
    'Siding',
    'Windows',
    'Gutters',
    'Painting',
    'Complete Exterior Remodel'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        zipCode: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
      >
        <SafeIcon icon={FiCheck} className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Success!</h3>
        <p className="text-green-700 mb-4">
          Your free guide is being sent to your email right now!
        </p>
        <p className="text-sm text-green-600">
          We'll also contact you within 24 hours to discuss your project.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full mb-4">
          <SafeIcon icon={FiDownload} className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          FREE Home Improvement Guide
        </h3>
        <p className="text-gray-600 text-sm">
          "10 Things Every Homeowner Must Know Before Starting an Exterior Project"
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-green-800 mb-2">What You'll Learn:</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• How to avoid costly contractor mistakes</li>
          <li>• Questions to ask before hiring anyone</li>
          <li>• Timeline and budget planning secrets</li>
          <li>• Material selection guide</li>
          <li>• Permit and insurance requirements</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <SafeIcon icon={FiPhone} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <SafeIcon icon={FiHome} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select Your Project Type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending Guide...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
              Get My FREE Guide Now
            </span>
          )}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Your information will never be shared.
      </p>
    </motion.div>
  );
};

export default LeadMagnetForm;