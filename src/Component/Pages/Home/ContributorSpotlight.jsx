import React from 'react';
import { motion } from 'framer-motion';

const ContributorSpotlight = () => {
    const contributors = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            contributions: 127,
            expertise: "Ancient Asian Artifacts",
            avatar: "https://pbs.twimg.com/profile_images/1286049501032189952/iEbaqtrN_400x400.jpg",
            recentFind: "Tang Dynasty Ceramic Vessel"
        },
        {
            id: 2,
            name: "Prof. James Miller",
            contributions: 98,
            expertise: "Medieval European History",
            avatar: "https://images2.imgbox.com/9c/e1/mg0jk7kq_o.jpg",
            recentFind: "15th Century Manuscript"
        },
        {
            id: 3,
            name: "Dr. Amira Hassan",
            contributions: 115,
            expertise: "Middle Eastern Archaeology",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJdAB_bfMz9rwE6PeA6GOCDjiTg0DjU_fXd8884bikInihbigHB-v4OrVOKZn-GhpOg8&usqp=CAU",
            recentFind: "Ancient Mesopotamian Tablet"
        }
    ];

    return (
        <section className="py-16 container mx-auto bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
                    Top Contributors
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contributors.map((contributor, index) => (
                        <motion.div
                            key={contributor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden p-6  dark:bg-gray-700 text-black dark:text-white" 
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={contributor.avatar}
                                    alt={contributor.name}
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                                        {contributor.name}
                                    </h3>
                                    <p className="text-orange-900 font-medium text-sm sm:text-base dark:text-orange-700">
                                        {contributor.expertise}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm sm:text-base dark:text-gray-400">Contributions:</span>
                                    <span className="font-semibold text-gray-800 text-sm sm:text-base dark:text-gray-300">
                                        {contributor.contributions}
                                    </span>
                                </div>
                                <div className="border-t pt-3">
                                    <p className="text-sm text-gray-600   dark:text-gray-400">Recent Discovery:</p>
                                    <p className="font-medium text-gray-800 text-sm sm:text-base dark:text-gray-300">
                                        {contributor.recentFind}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContributorSpotlight;
