import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((user) => {
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <div> 
        <p className="text-center">Or</p>
        <div className="px-20 mt-7 mb-6">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center rounded-2xl border border-yellow-900 py-1 w-full px-2"
      >
        <FcGoogle className="mr-2 size-9" /> Sign in with Google
      </button>
    </div>
    </div>

  );
};

export default GoogleLoginButton;
