import React from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-gray-100 py-16">
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-gray-800 sm:text-5xl"
          variants={itemVariants}
        >
          Welcome to{" "}
          <span className="text-blue-600">Celestora</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-600"
          variants={itemVariants}
        >
          Explore the world's most fascinating historical artifacts like the
          Rosetta Stone and Antikythera Mechanism. Contribute your findings and
          preserve history.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          variants={itemVariants}
        >
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="container mx-auto px-6 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Feature 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-center"
          variants={itemVariants}
          whileHover={{ y: -10 }}
        >
          <h3 className="text-xl font-bold text-gray-800">Track Artifacts</h3>
          <p className="mt-2 text-gray-600">
            Discover, explore, and learn about historical artifacts.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-center"
          variants={itemVariants}
          whileHover={{ y: -10 }}
        >
          <h3 className="text-xl font-bold text-gray-800">Contribute</h3>
          <p className="mt-2 text-gray-600">
            Share your own findings and enrich the database.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-center"
          variants={itemVariants}
          whileHover={{ y: -10 }}
        >
          <h3 className="text-xl font-bold text-gray-800">Like & Save</h3>
          <p className="mt-2 text-gray-600">
            Save and like your favorite artifacts for quick access.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
