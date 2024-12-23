import { useLoaderData, useParams } from "react-router-dom";
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
    const [likes, setLikes] = useState(0);

    // Fetch initial liked status and likes count
    useEffect(() => {
        // Check if the artifact is liked by the user
        fetch(`http://localhost:4000/likedCelestora/${id}?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.liked) {
                    setIsLiked(true);
                }
            })
            .catch((error) => console.error("Error fetching liked status:", error));

        // Fetch the total likes for the artifact
        fetch(`http://localhost:4000/likedCelestora/likes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLikes(data.likes);
            })
            .catch((error) => console.error("Error fetching likes:", error));
    }, [id, user.email]);

    // Handle like action
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
            setLikes((prevLikes) => prevLikes + 1); // Increment likes after successful like
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
                setLikes((prevLikes) => Math.max(prevLikes - 1, 0)); // Decrement likes after successful unlike
            })
            .catch((error) => console.error("Error unliking artifact:", error));
    };

    return (
        <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
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

                    {/* Likes Count */}
                    <p className="text-lg font-bold text-gray-700">
                        Likes: <span className="text-blue-500 font-bold border-2 rounded-lg p-1">
                            {likes}
                        </span>
                    </p>

                    {/* Artifact Info */}
                    <p className="text-lg"><strong>Type:</strong> {type}</p>
                    <p className="text-lg"><strong>Historical Context:</strong> {historicalContext}</p>
                    <p className="text-lg"><strong>Created At:</strong> {createdAt}</p>
                    <p className="text-lg"><strong>Discovered At:</strong> {discoveredAt}</p>
                    <p className="text-lg"><strong>Discovered By:</strong> {discoveredBy}</p>
                    <p className="text-lg"><strong>Present Location:</strong> {presentLocation}</p>

                    {/* Like and Unlike Buttons */}
                    <div className="flex items-  mt-6">
                        {isLiked ? (
                            <button
                                className="btn bg-red-500 text-white text-xl font-bold px-4 py-2 rounded-lg mr-4 hover:bg-red-600"
                                onClick={handleUnlike}
                            >
                                <SlDislike className="size-6" /> Unlike
                            </button>
                        ) : (
                            <button
                                className="btn bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-lg hover:bg-green-600"
                                onClick={handleLike}
                            >
                                <SlLike className="size-6" /> Like
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;
