import { useState } from 'react'
import { Dumbbell, Package, Zap, ChevronLeft, ChevronRight, ShoppingCart, Star, Truck, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import photoone from './assets/photoone.jpg';
import Treadmill from './assets/Treadmill.jpg';
import dumbbell from './assets/Dumbbell.jpg';
import protein from './assets/Protein.jpg';
import blend from './assets/Blend.jpg';
import smart from './assets/Smart.jpg';
import resistance from './assets/Resistance.jpg';
export default function FitnessSuperstore() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      title: "Welcome to FitGear",
      content: null
    },
    {
      title: "Featured Products",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <p className="text-2xl text-center font-light">Check out our top-selling fitness equipment and supplements.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pro-Series Treadmill",
                category: "Equipment",
                price: "11999 MAD",
                rating: 4.8,
                image: Treadmill,
                description: "High-performance treadmill with advanced tracking features and customizable programs for professional training."
              },
              {
                title: "Adjustable Dumbbell Set",
                category: "Equipment",
                price: "3299 MAD",
                rating: 4.9,
                image: dumbbell,
                description: "Space-saving dumbbell set with adjustable weights for versatile strength training."
              },
              {
                title: "Whey Protein Isolate",
                category: "Supplement",
                price: "549 MAD",
                rating: 4.7,
                image: protein,
                description: "Premium-quality whey protein isolate for muscle recovery and enhanced performance."
              },
              {
                title: "Resistance Bands Set",
                category: "Accessories",
                price: "279 MAD",
                rating: 4.6,
                image: resistance,
                description: "Durable resistance bands set ideal for strength training and rehabilitation exercises."
              },
              {
                title: "Smart Fitness Watch",
                category: "Accessories",
                price: "1899 MAD",
                rating: 4.5,
                image: smart,
                description: "Stylish fitness watch with health monitoring and smart features to track your activity."
              },
              {
                title: "Pre-Workout Energy Blend",
                category: "Supplement",
                price: "379 MAD",
                rating: 4.4,
                image: blend,
                description: "Energy-boosting pre-workout supplement with powerful ingredients for enhanced endurance."
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold dark:text-white">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    {
      title: "Special Offers",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <p className="text-2xl text-center font-light">Take advantage of our limited-time deals and bundles.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-2xl font-bold">Summer Shred Bundle</h3>
                <p className="text-purple-100">Save 20% on this complete package</p>
              </div>
              <div className="p-4 space-y-2">
                <p>Includes:</p>
                <ul className="list-disc list-inside">
                  <li>Pro-Series Treadmill</li>
                  <li>3-month supply of Whey Protein</li>
                  <li>Resistance Bands Set</li>
                  <li>Smart Fitness Watch</li>
                </ul>
                <p className="text-2xl font-bold mt-4">1,499.99 MAD</p>
                <p className="text-sm line-through">1,889.96 MAD</p>
              </div>
              <div className="p-4">
                <button className="w-full bg-white text-purple-600 hover:bg-purple-100 py-2 px-4 rounded transition-colors">
                  Claim Offer
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-2xl font-bold">Strength Starter Kit</h3>
                <p className="text-amber-100">Perfect for home gym beginners</p>
              </div>
              <div className="p-4 space-y-2">
                <p>Includes:</p>
                <ul className="list-disc list-inside">
                  <li>Adjustable Dumbbell Set</li>
                  <li>1-month supply of Whey Protein</li>
                  <li>Pre-Workout Energy Blend</li>
                  <li>Fitness Mat</li>
                </ul>
                <p className="text-2xl font-bold mt-4">449.99 MAD</p>
                <p className="text-sm line-through">529.96 MAD</p>
              </div>
              <div className="p-4">
                <button className="w-full bg-white text-orange-600 hover:bg-orange-100 py-2 px-4 rounded transition-colors">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Why Choose FitGear",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <p className="text-2xl text-center font-light">We're committed to helping you achieve your fitness goals with top-quality products and exceptional service.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center text-xl font-semibold">
                <Shield className="mr-2 text-green-500" />Quality Guarantee
              </div>
              <div>
                <p>We source only the best fitness equipment and supplements from trusted brands.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center text-xl font-semibold">
                <Truck className="mr-2 text-blue-500" />Fast & Free Shipping
              </div>
              <div>
                <p>Enjoy free shipping on orders over MAD100 and quick delivery to your doorstep.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center text-xl font-semibold">
                <Zap className="mr-2 text-yellow-500" />Expert Advice
              </div>
              <div>
                <p>Our knowledgeable team is here to help you choose the right products for your fitness journey.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-600 transition-colors">
              Start Shopping Now
            </button>
          </div>
        </motion.div>
      )
    }
  ]

  const maxPage = pages.length - 1

  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="relative bg-gray-50 min-h-screen mt-[-5%]">
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-12">
        {currentPage === 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-8"
            >


              <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Welcome to FitGear
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={photoone}
                  alt="Fitness equipment store"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600/50 to-purple-600/50">
                  <h2 className="text-5xl font-extrabold text-white text-center drop-shadow-lg">Your One-Stop Fitness Shop</h2>
                </div>
              </div>
              <p className="text-2xl text-center font-light">Discover top-quality fitness equipment, accessories, and supplements to power your workouts.</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="flex items-center text-xl font-semibold">
                      <Dumbbell className="mr-2" />Exercise Equipment
                    </h3>
                  </div>
                  <div className="p-4">
                    <p>State-of-the-art machines and tools for every fitness level and goal.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="flex items-center text-xl font-semibold">
                      <Package className="mr-2" />Protein & Supplements
                    </h3>
                  </div>
                  <div className="p-4">
                    <p>Premium nutrition to fuel your workouts and support your recovery.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="flex items-center text-xl font-semibold">
                      <Zap className="mr-2" />Fitness Accessories
                    </h3>
                  </div>
                  <div className="p-4">
                    <p>Essential gear to enhance your training and track your progress.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPage}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {pages[currentPage].title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {pages[currentPage].content}
              </motion.div>
            </AnimatePresence>
          </>
        )}

        <div className="flex justify-center space-x-4 mt-12">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 bg-white text-blue-600 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-100 transition-colors duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === maxPage}
            className="p-2 bg-white text-blue-600 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-100 transition-colors duration-300"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </button>
        </div>
      </div>
    </div>
  )
}

