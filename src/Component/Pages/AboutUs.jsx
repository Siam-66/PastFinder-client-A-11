import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16">
            <Helmet>
                <title> AboutUs / Celestora</title>
            </Helmet>
      {/* Hero Section */}
      <section className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          About <span className=" bg-gradient-to-r from-yellow-950 via-orange-700 to-red-900 bg-clip-text text-transparent">Celestora</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Celestora is your gateway to the fascinating world of historical artifacts.  From the
          Rosetta Stone to the Antikythera Mechanism, <br className="max-md:hidden max-sm:hidden" />explore, learn, and contribute to preserving
          history.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="container mx-auto px-6 mt-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Mission */}
          <div className="bg-gradient-to-r from-yellow-950 via-orange-900 to-red-950 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-gray-300">
              To create a user-friendly platform for tracking, exploring, and sharing the history of
              humanity through its artifacts.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-r from-yellow-950 via-orange-900 to-red-950 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="mt-4 text-gray-300">
              To make history accessible to everyone and empower communities to connect with their
              cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2024/01/solo-leveling-anime-to-premiere-this-week-on-crunchyroll.jpg?q=50&fit=crop&w=750&h=422&dpr=1.5"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Siam Mahmud</h3>
              <p className="text-sm text-yellow-800">Lead Historian</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*by-ZjRm4e-BIM9ZUh4Stlg.png"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Afrin Riha</h3>
              <p className="text-sm text-yellow-800">Artifact Curator</p>
            </div>
          </div>


          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src="https://wallpapers.com/images/featured/goku-background-vhm3f71ddueli0kl.jpg"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Ornob Addi</h3>
              <p className="text-sm text-yellow-800">UI/UX Designer</p>
            </div>
          </div>

        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-6 mt-16 bg-gradient-to-r from-yellow-950 via-orange-900 to-red-950 text-white rounded-lg py-12 text-center">
        <h2 className="text-3xl font-bold">Join the Celestora Journey</h2>
        <p className="mt-4 mb-7 text-lg">
          Help us preserve the stories of historical artifacts. Sign up today and contribute to
          history.
        </p>
        <Link to={"/signup"}  className=" px-8 py-3 bg-white text-yellow-900 font-bold rounded-lg hover:bg-gray-100">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
