import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";


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

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleUnlike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
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
        <div > 
            <h1 className="card-title text-3xl font-bold mb-4">{name}</h1>

            <p className=" text-lg font-bold text-gray-700">
            Likes: <span className="text-blue-500 font-bold border-2 rounded-lg p-1">
                {likes}
                </span> 
            </p>
            </div>
 
        <p className="text-lg">
            <strong>Type:</strong> {type}
        </p>
        <p className="text-lg">
            <strong>Historical Context:</strong> {historicalContext}
        </p>
        <p className="text-lg">
            <strong>Created At:</strong> {createdAt}
        </p>
        <p className="text-lg">
            <strong>Discovered At:</strong> {discoveredAt}
        </p>
        <p className="text-lg">
            <strong>Discovered By:</strong> {discoveredBy}
        </p>
        <p className="text-lg">
            <strong>Present Location:</strong> {presentLocation}
        </p>

          {/* Like and Unlike Buttons */}
        <div className="flex items-center justify-evenly mt-6">
            <button
            className="btn bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-lg mr-4 hover:bg-green-600"
            onClick={handleLike}
            >
            <SlLike className="size-6" />Like
            </button>
            <button
            className="btn bg-red-500 text-white text-xl font-bold px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={handleUnlike}
            >
            <SlDislike className="size-6" />Unlike
            </button>

        </div>
        </div>
    </div>
    </div>
);
};

export default ArtifactDetails;
