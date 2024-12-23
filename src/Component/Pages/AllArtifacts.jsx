import { useEffect, useState } from "react";
import AllArtifactsCard from "./Cards/AllArtifactsCard";
const AllArtifacts = () => {

    const [celestoras, setCelestoras]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/celestora')
        .then(res=>res.json())
        .then(data=>{
            setCelestoras(data);
        })
    },[])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {
                celestoras.map(celestora=><AllArtifactsCard key={celestora._id} celestora={celestora}>
                </AllArtifactsCard>)
            }
        </div>
    );
};

export default AllArtifacts;