import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';


const AddArtifacts = () => {

    const { user} = useContext(AuthContext);
    
    const handleSubmit = (e) => {
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
            const username = form.username.value;
            const userEmail = form.userEmail.value;

            const newCelestora = {name, image, type,  historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation,username,userEmail }
            console.log(newCelestora);


            fetch('https://assignment-11-past-finder-server.vercel.app/celestora',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newCelestora)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Visa Application Created",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            })
    }
    return (
<div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"> 
    <Helmet>
        <title> Add Artifacts / Celestora</title>
    </Helmet>
    <h2 className="text-5xl bg-gradient-to-r from-yellow-950 via-orange-700 to-red-900 bg-clip-text text-transparent font-bold text-center mb-6">
    Add Artifact
    </h2>
<form onSubmit={handleSubmit}>  
    {/* Artifact Name */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Artifact Name</label>
    <input
        name="name"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter artifact name"
        required
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
    />
    </div>

    {/* Artifact Type */}
    <div className="mb-4">
    <label className="block font-semibold mb-2">Artifact Type</label>
    <select
        name="type"
        className="w-full p-2 border rounded"
        required
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
    ></textarea>
    </div>
    {/* User Name & Email */}
    <div className="form-control grid grid-cols-2 gap-4 mb-4">
    <div>
        <label className="label">
            <span className="label-text font-medium text-gray-700">Your Name</span>
        </label>
        <input type="text" name="username" defaultValue={user?.displayName} className="input input-bordered w-full" readOnly />
    </div>
    <div>
        <label className="label">
            <span className="label-text font-medium text-gray-700">Your Email</span>
        </label>
        <input type="email"
            defaultValue={user?.email}
            name="userEmail" className="input input-bordered w-full" readOnly />
    </div>
    </div>

    {/* Add Artifact Button */}
    <button
    type="submit"
    className="w-full bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white font-semibold text-xl py-2 rounded"
    >
      Add Artifact
    </button>
  </form>
</div>

    );
};

export default AddArtifacts;