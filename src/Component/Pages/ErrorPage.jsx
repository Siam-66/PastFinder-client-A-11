const ErrorPage = () => {
    return (
      <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-900 text-white">
        {/* Glowing 404 Text */}
        <h1 className="text-9xl font-extrabold text-center animate-glow relative">
          404
        </h1>


        {/* Error Description */}
        <p className="text-2xl mt-4 text-center">
        You’re digging in the wrong place!
        </p>
  
        {/* Back Home Button */}
        <button
          className="mt-8 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-950 via-orange-950 to-red-950 rounded-lg focus:ring-4 focus:ring-yellow-900"
          onClick={() => window.location.replace("/")}
        >
          Back to Home
        </button>
      </div>
    );
  };
  
  export default ErrorPage;
  