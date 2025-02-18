import { useEffect, useState } from "react";
import AllArtifactsCard from "./Cards/AllArtifactsCard";
import { FiSearch } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { RiResetLeftFill } from "react-icons/ri";
const AllArtifacts = () => {
    const [celestoras, setCelestoras] = useState([]);
    const [originalData, setOriginalData] = useState([]); // Store original data
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("none");

    useEffect(() => {
        if (search) {
            fetchSearchResults();
        } else {
            fetchAllArtifacts();
        }
    }, [search]);

    // Fetch all artifacts
    const fetchAllArtifacts = () => {
        fetch("https://assignment-11-past-finder-server.vercel.app/celestoras")
            .then((res) => res.json())
            .then((data) => {
                setCelestoras(data);
                setOriginalData(data); // Store original data
            })
            .catch((err) => console.error(err));
    };

    // Fetch search results
    const fetchSearchResults = () => {
        fetch(`https://assignment-11-past-finder-server.vercel.app/celestoras/search?search=${encodeURIComponent(search)}`)
            .then((res) => res.json())
            .then((data) => {
                setCelestoras(data);
                setOriginalData(data); // Update original data with search results
            })
            .catch((err) => console.error(err));
    };

    // Handle sort change
    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        
        if (order === "none") {
            setCelestoras([...originalData]); // Reset to original data
            return;
        }

        const sortedArtifacts = [...celestoras].sort((a, b) => {
            const likeA = a.likeCount || 0;
            const likeB = b.likeCount || 0;
            
            return order === "asc" ? likeA - likeB : likeB - likeA;
        });
        setCelestoras(sortedArtifacts);
    };

    // Reset to original state
    const handleReset = () => {
        setSortOrder("none");
        setCelestoras([...originalData]);
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>All Artifacts / Celestora</title>
            </Helmet>
            <h1 className="text-5xl bg-gradient-to-r from-yellow-950 via-orange-700 to-red-950 bg-clip-text text-transparent font-bold text-center mb-6 mt-10">
                All Artifacts
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
                {/* Search Input */}
                <div className="relative w-full md:w-auto">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search by Artifact Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered pl-10 w-full md:w-80"
                    />
                </div>

                {/* Sort Dropdown */}
                <div className="flex gap-2 items-center">
                    <select
                        value={sortOrder}
                        onChange={handleSortChange}
                        className="select select-bordered w-full md:w-60"
                    >
                        <option value="none">Sort by...</option>
                        <option value="desc">Likes High to Low</option>
                        <option value="asc">Likes Low to High</option>
                        
                    </select>

                    {/* Reset Button */}
                    <button
                        onClick={handleReset}
                        className="btn bg-gradient-to-r from-yellow-950 to-orange-700 text-white"
                    >
                        <RiResetLeftFill />Reset All
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {celestoras.map((celestora) => (
                    <AllArtifactsCard key={celestora._id} celestora={celestora} />
                ))}
            </div>
        </div>
    );
};

export default AllArtifacts;