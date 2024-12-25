
const AddArtifacts = () => {
    return (
<div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
  <h2 className="text-5xl bg-gradient-to-r from-yellow-950 via-orange-700 to-red-900 bg-clip-text text-transparent font-bold text-center mb-6">
    Add Artifact
  </h2>
  <form >
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
      </select>
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