import { useEffect, useState } from "react";
import AllArtifactsCard from "./Cards/AllArtifactsCard";
import { FiSearch } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {
    const [celestoras, setCelestoras] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search) {
            fetchSearchResults(); // Fetch filtered data when search is active
        } else {
            fetchAllArtifacts(); // Fetch all data when search is empty
        }
    }, [search]);

    // Fetch all artifacts
    const fetchAllArtifacts = () => {
        fetch("https://assignment-11-past-finder-server.vercel.app/celestoras")
            .then((res) => res.json())
            .then((data) => {
                setCelestoras(data);
            })
            .catch((err) => console.error(err));
    };

    // Fetch search results
    const fetchSearchResults = () => {
        fetch(`https://assignment-11-past-finder-server.vercel.app/celestoras/search?search=${encodeURIComponent(search)}`)
            .then((res) => res.json())
            .then((data) => {
                setCelestoras(data);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <Helmet>
                <title> All Artifacts / Celestora</title>
            </Helmet>
            <h1 className="text-5xl bg-gradient-to-r from-yellow-950 via-orange-700 to-red-900 bg-clip-text text-transparent font-bold text-center mb-6 mt-10 ">
                All Artifacts
            </h1>
            <div className="p-4 flex items-center justify-center relative">
                <FiSearch className="absolute lg:mr-[29rem] md:mr-[21rem] max-sm:mr-[26rem]" />
                <input
                    type="text"
                    placeholder="Search by Artifact Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered pl-8 w-full sm:w-1/2 lg:w-1/3"
                />
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
