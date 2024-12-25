import { useLoaderData, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import useAuth from "../../Provider/useAuth";

const ArtifactDetails = () => {
    const {
        name,
        image,
        type,
        historicalContext,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation,
    } = useLoaderData();

    const { id } = useParams();
    const { user } = useAuth();

    const [isLiked, setIsLiked] = useState(false);

    // Fetch initial liked status
    useEffect(() => {
        fetch(`http://localhost:4000/likedCelestora/${id}?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.liked) {
                    setIsLiked(true);
                }
            })
            .catch((error) => console.error("Error fetching liked status:", error));
    }, [id, user.email]);

    // Handle like action
    const handleLike = () => {
        const likedArtifact = {
            celestora_id: id,
            applicant_email: user.email,
            name,
            image,
            type,
            historicalContext,
            createdAt,
            discoveredAt,
            discoveredBy,
            presentLocation,
        };

        fetch('http://localhost:4000/likedCelestora', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(likedArtifact),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to like artifact");
                return res.json();
            })
            .then(() => {
                setIsLiked(true);
            })
            .catch((error) => console.error("Error liking artifact:", error));
    };

    // Handle unlike action
    const handleUnlike = () => {
        fetch(`http://localhost:4000/likedCelestora/${id}?email=${user.email}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to unlike artifact");
                return res.json();
            })
            .then(() => {
                setIsLiked(false);
            })
            .catch((error) => console.error("Error unliking artifact:", error));
    };

    return (
        <div>
            <div className="p-6 flex justify-center items-center bg-gray-100">
                <div className="card bg-white shadow-xl rounded-lg w-full max-w-lg">
                    {/* Artifact Image */}
                    <figure className="p-6">
                        <img
                            src={image}
                            alt={name}
                            className="rounded-lg w-full h-64 object-cover"
                        />
                    </figure>

                    {/* Artifact Details */}
                    <div className="card-body p-6">
                        <h1 className="card-title text-3xl font-bold mb-4">{name}</h1>

                        {/* Artifact Info */}
                        <p className="text-lg"><strong>Type:</strong> {type}</p>
                        <p className="text-lg"><strong>Historical Context:</strong> {historicalContext}</p>
                        <p className="text-lg"><strong>Created At:</strong> {createdAt}</p>
                        <p className="text-lg"><strong>Discovered At:</strong> {discoveredAt}</p>
                        <p className="text-lg"><strong>Discovered By:</strong> {discoveredBy}</p>
                        <p className="text-lg"><strong>Present Location:</strong> {presentLocation}</p>

                        {/* Like and Unlike Buttons */}
                        <div className="flex flex-col items-center mt-6">
                            {isLiked ? (
                                <button
                                    className="btn w-full bg-red-500 text-white text-xl font-bold px-4 py-2 rounded-lg hover:bg-red-600"
                                    onClick={handleUnlike}
                                >
                                    <SlDislike className="inline-block mr-2" /> Unlike
                                </button>
                            ) : (
                                <button
                                    className="btn w-full bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-lg hover:bg-green-600"
                                    onClick={handleLike}
                                >
                                    <SlLike className="inline-block mr-2" /> Like
                                </button>
                            )}
                            <Link to={"/allArtifacts"} className="w-full mt-3">
                                <button className="btn w-full text-xl bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white font-semibold">
                                    Go back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;
