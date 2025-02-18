import { useLoaderData, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import useAuth from "../../Provider/useAuth";
import { Helmet } from "react-helmet-async";

const ArtifactDetails = () => {
    const {
        likeCount,
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
        fetch(`https://assignment-11-past-finder-server.vercel.app/likedCelestora/${id}?email=${user.email}`)
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

        fetch('https://assignment-11-past-finder-server.vercel.app/likedCelestora', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(likedArtifact),
        })
        .then((res) => res.json())
            .then(() => {
                setIsLiked(true);
            })
            .catch((error) => console.error("Error liking artifact:", error));
    };

    

    // Handle unlike action
    const handleUnlike = () => {
        fetch(`https://assignment-11-past-finder-server.vercel.app/likedCelestora/${id}?email=${user.email}`, {
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
        <div className="container mx-auto  ">
            <Helmet>
                <title> Artifact Details/Celestora</title>
            </Helmet>
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white">

            
            <h1 className="text-5xl bg-gradient-to-r from-yellow-950 via-orange-700 to-red-900 bg-clip-text text-transparent font-bold text-center mb-6 mt-10 ">Artifact Details</h1>
            <div className="p-6 flex justify-center items-center  bg-white dark:bg-gray-800 text-black dark:text-white">
                <div className="card shadow-xl rounded-lg w-full max-w-lg bg-white dark:bg-gray-700 text-black dark:text-white">
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
                        <p className="text-sm">
                            <strong>Like:</strong> {likeCount}
                        </p>
                        {/* Artifact Info */}
                        <p className="text-lg"><strong>Type:</strong> {type}</p>

                        <p className="text-lg"><strong>Created At:</strong> {createdAt}</p>
                        <p className="text-lg"><strong>Discovered At:</strong> {discoveredAt}</p>
                        <p className="text-lg"><strong>Discovered By:</strong> {discoveredBy}</p>
                        <p className="text-lg"><strong>Present Location:</strong> {presentLocation}</p>
                        <p className="text-lg"><strong>Historical Context:</strong> {historicalContext}</p>
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
        </div>
    );
};

export default ArtifactDetails;
