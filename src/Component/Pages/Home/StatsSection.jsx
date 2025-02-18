import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    title: "Artifacts Tracked",
    value: 1230,
    description: "Historical artifacts preserved and documented.",
  },
  {
    id: 2,
    title: "Active Users",
    value: 5000,
    description: "Users exploring and contributing to history.",
  },
  {
    id: 3,
    title: "Total Likes",
    value: 6850,
    description: "Likes received across artifact entries.",
  },
  {
    id: 4,
    title: "Contributions",
    value: 1100,
    description: "User-submitted artifact entries.",
  },
];

const StatsSection = () => {
  return (
    <section className=" py-8 sm:py-16 w-full overflow-hidden container mx-auto bg-white dark:bg-gray-800 text-black dark:text-white">
      <motion.div
        className="mx-auto px-4 sm:px-6 text-center max-w-[100vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold  bg-white dark:bg-gray-800 text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Impact in Numbers
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 px-2 bg-white dark:bg-gray-800  dark:text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          See how Celestora is preserving history with your help.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-gradient-to-r from-yellow-950 to-orange-800 shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp start={0} end={stat.value} duration={2} separator="," />+
              </h3>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-gray-200">
                {stat.title}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
