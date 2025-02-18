import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
const VlogPage = () => {
    const allVlogs = [
        // Previous featured vlogs
        {
            id: 1,
            title: "Unveiling the Rosetta Stone",
            description: "A deep dive into the discovery that unlocked ancient Egyptian hieroglyphs",
            image: "https://i.ibb.co.com/svtt0mCw/Rosetta-Stone.jpg",
            author: "Dr. Sarah Walker",
            date: "Feb 10, 2025",
            duration: "15 min",
            category: "Ancient Egypt"
          },
          {
            id: 2,
            title: "Hidden Treasures of Pompeii",
            description: "Exploring newly excavated artifacts from the ancient Roman city",
            image: "https://i.ibb.co.com/C4bMzPd/Treasures-of-Pompeii.jpg",
            author: "Prof. Marco Bianchi",
            date: "Feb 9, 2025",
            duration: "12 min",
            category: "Roman Empire"
          },
          {
            id: 3,
            title: "The Terracotta Army Up Close",
            description: "Behind-the-scenes look at China's most impressive archaeological find",
            image: "https://i.ibb.co.com/wFr5LWvK/Terracotta.jpg",
            author: "Dr. Li Wei",
            date: "Feb 8, 2025",
            duration: "18 min",
            category: "Ancient China"
          },
          {
            id: 4,
            title: "Mysteries of Göbekli Tepe",
            description: "Uncovering the world's oldest known temple complex",
            image: "https://i.ibb.co.com/CKn0CCw1/Mysteries-of-G-bekli-Tepe.jpg",
            author: "Dr. Maya Peterson",
            date: "Feb 7, 2025",
            duration: "20 min",
            category: "Prehistoric"
          },
          {
            id: 5,
            title: "Lost Cities of the Maya",
            description: "Digital reconstruction of newly discovered Mayan settlements",
            image: "https://i.ibb.co.com/QvxbrCyz/Lost-Cities-of-the-Maya.jpg",
            author: "Dr. Carlos Ruiz",
            date: "Feb 6, 2025",
            duration: "25 min",
            category: "Mesoamerica"
          },
          {
            id: 6,
            title: "Viking Treasures of Norway",
            description: "Exploring recently unearthed Viking artifacts and their historical significance",
            image: "https://i.ibb.co.com/0dfKrtL/Viking-Treasures-of-Norway.jpg",
            author: "Dr. Erik Larsson",
            date: "Feb 5, 2025",
            duration: "30 min",
            category: "Viking Age"
          }
      ];
    
      const categories = ["All", "Ancient Egypt", "Roman Empire", "Ancient China", "Prehistoric", "Mesoamerica", "Viking Age"];
      const [selectedCategory, setSelectedCategory] = React.useState("All");
    
      const filteredVlogs = selectedCategory === "All" 
        ? allVlogs 
        : allVlogs.filter(vlog => vlog.category === selectedCategory);
    
    return (
<div className="min-h-screen  bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl bg-gradient-to-r from-yellow-950 via-orange-700 to-red-900 bg-clip-text text-transparent font-bold text-center mb-6">Artifact Stories</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Discover the fascinating world of historical artifacts through our expert-led video series</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-950  to-orange-700 text-white'
                  : 'bg-white dark:bg-gray-500 dark:text-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVlogs.map((vlog) => (
            <div key={vlog.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105  dark:bg-gray-700 text-black dark:text-white">
              <img src={vlog.image} alt={vlog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm font-semibold text-orange-800 mb-2 dark:text-orange-700">{vlog.category}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-300">{vlog.title}</h3>
                <p className="text-gray-600 h-16 dark:text-gray-400">{vlog.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User size={16} className="mr-2 dark:text-gray-400" />
                    <span className='dark:text-gray-400'>{vlog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span className='dark:text-gray-400'>{vlog.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default VlogPage;