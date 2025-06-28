import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'roofing', name: 'Roofing' },
    { id: 'siding', name: 'Siding' },
    { id: 'windows', name: 'Windows' },
    { id: 'complete', name: 'Complete Remodels' }
  ];

  const projects = [
    {
      id: 1,
      category: 'roofing',
      title: 'Modern Asphalt Shingle Roof',
      location: 'Sacramento, CA',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete roof replacement with architectural shingles and new gutters.'
    },
    {
      id: 2,
      category: 'siding',
      title: 'Vinyl Siding Installation',
      location: 'San Jose, CA',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful vinyl siding with insulation upgrade for improved energy efficiency.'
    },
    {
      id: 3,
      category: 'windows',
      title: 'Energy-Efficient Window Replacement',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Triple-pane windows with low-E coating for maximum energy savings.'
    },
    {
      id: 4,
      category: 'complete',
      title: 'Complete Exterior Transformation',
      location: 'Fresno, CA',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Full exterior remodel including roof, siding, windows, and landscaping.'
    },
    {
      id: 5,
      category: 'roofing',
      title: 'Metal Roofing System',
      location: 'Oakland, CA',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Durable metal roofing with 50-year warranty and energy-efficient properties.'
    },
    {
      id: 6,
      category: 'siding',
      title: 'Fiber Cement Siding',
      location: 'San Diego, CA',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium fiber cement siding with wood grain texture and custom color.'
    },
    {
      id: 7,
      category: 'complete',
      title: 'Victorian Home Restoration',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Historic home restoration preserving original character with modern updates.'
    },
    {
      id: 8,
      category: 'windows',
      title: 'Bay Window Installation',
      location: 'Berkeley, CA',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Custom bay window installation with energy-efficient glass and trim work.'
    },
    {
      id: 9,
      category: 'roofing',
      title: 'Tile Roof Replacement',
      location: 'Santa Barbara, CA',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Spanish tile roof replacement maintaining architectural authenticity.'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our portfolio of completed projects and see the quality craftsmanship 
              that sets GoldenState Exteriors apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-green-600 font-medium mb-2">{project.location}</p>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-green-600 font-medium mb-4">{selectedImage.location}</p>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready for Your Transformation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can transform your home's exterior with the same quality 
              craftsmanship shown in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </a>
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

export default Gallery;