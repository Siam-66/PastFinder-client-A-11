import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
const VlogPreview = () => {
    const featuredVlogs = [
        {
            id: 1,
            title: "Lost Cities of the Maya",
            description: "Digital reconstruction of newly discovered Mayan settlements",
            image: "https://i.ibb.co.com/QvxbrCyz/Lost-Cities-of-the-Maya.jpg",
            author: "Dr. Carlos Ruiz",
            date: "Feb 6, 2025",
            duration: "25 min",
            category: "Mesoamerica"
          },
          {
            id: 2,
            title: "Mysteries of Göbekli Tepe",
            description: "Uncovering the world's oldest known temple complex",
            image: "https://i.ibb.co.com/CKn0CCw1/Mysteries-of-G-bekli-Tepe.jpg",
            author: "Dr. Maya Peterson",
            date: "Feb 7, 2025",
            duration: "20 min",
            category: "Prehistoric"
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
          }
      ];
    
    return (
<section className=" bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4  bg-white dark:bg-gray-800 text-black dark:text-white">Featured Vlogs</h2>
          <p className="text-lg  mb-8 bg-white dark:bg-gray-800 text-black dark:text-white">Discover amazing stories and adventures</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ">
          {featuredVlogs.map((vlog) => (
            <div key={vlog.id} className=" rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 bg-white dark:bg-gray-700 text-black dark:text-white">
              <img src={vlog.image} alt={vlog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{vlog.title}</h3>
                <p className="text-gray-600 h-16 dark:text-gray-400">{vlog.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User size={16} className="mr-2 dark:text-gray-400" />
                  <span className="mr-4 dark:text-gray-400">{vlog.author}</span>
                  <Clock size={16} className="mr-2 dark:text-gray-400" />
                  <span className='dark:text-gray-400'>{vlog.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/vlogPage" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-lg  transition-colors"
          >
            View All Vlogs
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
    );
};

export default VlogPreview;