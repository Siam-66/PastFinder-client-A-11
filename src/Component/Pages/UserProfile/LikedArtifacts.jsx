import { useEffect, useState } from "react";
import useAuth from "../../../Provider/useAuth";

const LikedArtifacts = () => {
  const { user } = useAuth(); // Fetch the authenticated user's email
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    // Fetch liked artifacts based on the user's email
    fetch(`http://localhost:4000/likedCelestora?email=${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch liked artifacts");
        return res.json();
      })
      .then((data) => {
        setLikedArtifacts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching liked artifacts:", error);
        setLoading(false);
      });
  }, [user.email]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {loading ? (
        <p className="text-center text-xl font-bold">Loading your artifacts...</p>
      ) : likedArtifacts.length === 0 ? (
        <p className="text-center text-xl font-bold">
          You haven’t liked any artifacts yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {likedArtifacts.map((artifact) => (
            <div
              key={artifact.celestora_id}
              className="card bg-white shadow-xl rounded-lg"
            >
              <figure className="p-4">
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-2xl font-bold mb-2">
                  {artifact.name}
                </h2>
                <p className="text-gray-700 text-md mb-2">
                  <strong>Type:</strong> {artifact.type}
                </p>
                <p className="text-gray-700 text-md mb-2">
                  <strong>Discovered By:</strong> {artifact.discoveredBy}
                </p>
                <p className="text-gray-700 text-md mb-2">
                  <strong>Location:</strong> {artifact.presentLocation}
                </p>
                <p className="text-gray-700 text-md">
                  <strong>Historical Context:</strong> {artifact.historicalContext}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
