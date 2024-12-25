import { useEffect, useState } from "react";
import useAuth from "../../../Provider/useAuth";
import Swal from "sweetalert2";

const EmptyState = ({ title, message }) => (
    <div className="flex flex-col items-center justify-center py-12 px-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-center max-w-sm">{message}</p>
    </div>
);

const MyArtifacts = () => {
    const [celestoras, setCelestoras] = useState([]);
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentArtifact, setCurrentArtifact] = useState(null);

    const fetchCelestoras = () => {
        fetch(`http://localhost:4000/celestora?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setCelestoras(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    useEffect(() => {
        fetchCelestoras();
    }, [user.email]);

// artifact data delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/celestora/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userEmail: user.email }),
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! status: ${res.status}`);
                        }
                        return res.json();
                    })
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your celestora has been deleted.",
                                icon: "success",
                            });
                            setCelestoras(
                                celestoras.filter(
                                    (celestora) => celestora._id !== id
                                )
                            );
                        } else {
                            throw new Error("Failed to delete celestora");
                        }
                    })
                    .catch((error) => {
                        console.error("Delete error:", error);
                        Swal.fire({
                            title: "Error!",
                            text: error.message || "Failed to delete celestora",
                            icon: "error",
                        });
                    });
            }
        });
    };

    const handleModal = (artifact) => {
        setCurrentArtifact(artifact);
        setIsModalOpen(true);
    };

    // artifacts update 

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
      
        const name = form.name.value;
        const image = form.image.value;
        const type = form.type.value;
        const historicalContext = form.historicalContext.value;
        const createdAt = form.createdAt.value;
        const discoveredAt = form.discoveredAt.value;
        const discoveredBy = form.discoveredBy.value;
        const presentLocation = form.presentLocation.value;
      
        const updatedCelestora = { name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation };

        fetch(`http://localhost:4000/celestora/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCelestora),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.modifiedCount> 0) {
                setIsModalOpen(false);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Visa Updated Successfully!",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        })

      };
      

    return (
        <div className="container mx-auto px-5 py-10">
            <h2 className="text-4xl text-center font-medium mb-10">
                My Posted Celestoras: {celestoras.length}
            </h2>

            {celestoras.length === 0 ? (
                <EmptyState
                    title="No celestoras posted yet"
                    message="Start sharing your historical celestoras with the community by posting your first celestora."
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {celestoras.map((celestora) => (
                        <div
                            key={celestora._id}
                            className="card bg-white shadow-xl rounded-lg"
                        >
                            <figure className="p-4">
                                <img
                                    src={celestora.image}
                                    alt={celestora.name}
                                    className="rounded-lg w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-2xl font-bold ">
                                    {celestora.name}
                                </h2>
                                <p className="text-gray-700 text-md ">
                                    <strong>Type:</strong> {celestora.type}
                                </p>
                                <p className="text-gray-700 text-md ">
                                    <strong>Created At:</strong>{" "}
                                    {celestora.createdAt}
                                </p>
                                <p className="text-gray-700 text-md ">
                                    <strong>Discovered At:</strong>{" "}
                                    {celestora.discoveredAt}
                                </p>
                                <p className="text-gray-700 text-md ">
                                    <strong>Discovered By:</strong>{" "}
                                    {celestora.discoveredBy}
                                </p>
                                <p className="text-gray-700 text-md ">
                                    <strong>Present Location:</strong>{" "}
                                    {celestora.presentLocation}
                                </p>
                                <p className="text-gray-700 text-md ">
                                    <strong>Historical Context:</strong>{" "}
                                    {celestora.historicalContext}
                                </p>
                                
                                <div className="card-actions flex justify-around mt-5">
                                    <button
                                        onClick={() =>
                                            handleModal(celestora)
                                        }
                                        className="btn bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white font-bold rounded-xl shadow-md hover:shadow-lg"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(celestora._id)
                                        }
                                        className="btn bg-red-500 text-white font-bold rounded-xl shadow-md hover:bg-red-600 hover:shadow-lg"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">
                            Update Artifact
                        </h3>
<form onSubmit={handleUpdate}>
    {/* Artifact Name */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Artifact Name</label>
    <input
        name="name"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter artifact name"
        required
        defaultValue={currentArtifact.name}
    />
    </div>

    {/* Artifact Image (URL) */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Artifact Image URL</label>
    <input
        name="image"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter artifact image URL"
        required
        defaultValue={currentArtifact.image}
    />
    </div>

    {/* Artifact Type */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Artifact Type</label>
    <select
        name=""
        className="w-full p-2 border rounded"
        required
        defaultValue={currentArtifact.type}
    >
        <option value="">Select an artifact type</option>
        <option value="Tools">Tools</option>
        <option value="Weapons">Weapons</option>
        <option value="Documents">Documents</option>
        <option value="Writings">Writings</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Pottery">Pottery</option>
        <option value="Sculptures">Sculptures</option>
        <option value="Clothing">Clothing</option>
        <option value="Paintings">Paintings</option>
        <option value="Coins">Coins</option>        
    </select>
    </div>



    {/* Created At */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Created At</label>
    <input
        name="createdAt"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., 100 BC"
        required
        defaultValue={currentArtifact.createdAt}
    />
    </div>

    {/* Discovered At */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Discovered At</label>
    <input
        name="discoveredAt"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., 1799"
        required
        defaultValue={currentArtifact.discoveredAt}
    />
    </div>

    {/* Discovered By */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Discovered By</label>
    <input
        name="discoveredBy"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter the discoverer's name"
        required
        defaultValue={currentArtifact.discoveredBy}
    />
    </div>

    {/* Present Location */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Present Location</label>
    <input
        name="presentLocation"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter present location of the artifact"
        required
        defaultValue={currentArtifact.presentLocation}
    />
    </div>

        {/* Historical Context */}
        <div className="mb-4">
    <label className="block font-semibold mb-2">Historical Context</label>
    <textarea
        name="historicalContext"
        className="w-full p-2 border rounded"
        placeholder="Provide the historical context of the artifact"
        required
        defaultValue={currentArtifact.historicalContext}
    ></textarea>
    </div>
                            {/* Submit */}
                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn bg-gray-300 text-lg text-black hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white font-bold text-lg hover:shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
</form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyArtifacts;
