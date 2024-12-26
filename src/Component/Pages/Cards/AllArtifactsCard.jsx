import { Link } from "react-router-dom";

const AllArtifactsCard = ({ celestora }) => {
    const { _id,name, image, type, historicalContext,likeCount } = celestora;

return (
    <div className="card bg-base-100 shadow-xl">

    <figure>
        <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        />
    </figure>

    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">
        <strong>Like:</strong> {likeCount}
        </p>
        <p className="text-sm">
        <strong>Type:</strong> {type}
        </p>
        <p className="text-sm">
        <strong>Historical Context:</strong> {historicalContext}
        </p>
        <div className="card-actions justify-center mt-5">

        <Link
            to={`/artifactDetails/${_id}`}
            className="btn bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-lg text-white font-bold rounded-xl"
        >
            View Details
        </Link>
        </div>
    </div>
    </div>
);
};

export default AllArtifactsCard;
