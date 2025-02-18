import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TopLikedArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTopLikedArtifacts = async () => {
            try {
                const response = await fetch("https://assignment-11-past-finder-server.vercel.app/topCelestora?limit=6");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setArtifacts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchTopLikedArtifacts();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
<section className=" sm:my-16 px-4 sm:px-6 w-full overflow-hidden container mx-auto bg-white dark:bg-gray-800 text-black dark:text-white ">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Top Liked Artifacts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {artifacts.map((artifact) => (
                    <div key={artifact._id} className="p-4 bg-white shadow-lg rounded-lg  dark:bg-gray-700 text-black dark:text-white">
                        <img
                            src={artifact.image || "https://via.placeholder.com/150"}
                            alt={artifact.name}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="mt-4">
                            <h3 className="text-lg sm:text-xl font-semibold">{artifact.name}</h3>
                            <p className="text-gray-600"><strong>Likes:</strong> {artifact.likeCount}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                {artifact.historicalContext || "No description available."}
                            </p>
                            <div className="flex items-center justify-center mt-6 sm:mt-10">
                                <Link to={`/artifactDetails/${artifact._id}`} className="btn text-base sm:text-xl hover:bg-gradient-to-r hover:from-yellow-950  hover:to-orange-700 hover:text-white border-2 border-yellow-900 font-semibold">
                                    See Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-6 sm:mt-10">
                <Link to="/allArtifacts" className="btn text-base sm:text-xl bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold">
                    See All Artifacts
                </Link>
            </div>
        </section>
    );
};
export default TopLikedArtifacts;