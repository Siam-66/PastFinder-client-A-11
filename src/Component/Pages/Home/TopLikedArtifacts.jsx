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
        <section className="my-16">
            <h2 className="text-4xl font-bold text-center mb-6">Top Liked Artifacts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artifacts.map((artifact) => (
                    <div key={artifact._id} className="p-4 bg-white shadow-lg rounded-lg">
                        <img
                            src={artifact.image || "https://via.placeholder.com/150"}
                            alt={artifact.name}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">{artifact.name}</h3>
                            <p className="text-gray-600"><strong>Likes:</strong> {artifact.likeCount}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                {artifact.historicalContext || "No description available."}
                            </p>
                            <div className="flex items-center justify-center mt-10">
                    <Link to={`/artifactDetails/${artifact._id}`} className="  btn text-xl hover:bg-gradient-to-r hover:from-yellow-900 hover:via-orange-900 hover:to-red-900 hover:text-white border-2 border-yellow-900 font-semibold ">See all button</Link>
                </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="flex items-center justify-center mt-10">
                    <Link to={"/allArtifacts"} className="  btn text-xl bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white font-semibold ">See all button</Link>
                </div>
        </section>
    );
};
export default TopLikedArtifacts;