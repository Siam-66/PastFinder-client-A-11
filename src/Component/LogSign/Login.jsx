import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GoogleLoginButton from "./GoogleLoginButton";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        alert(err.code);
      });
  };

  return (
    <div className="flex items-center justify-center my-16 ">
    <div className="card bg-base-200 w-full max-w-sm shrink-0">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="password"
            className="input input-bordered pr-12"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-12 text-xl"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
          <label className="label">
            <Link
              to="/forgetPassword"
              state={{ email }}
              className="label-text-alt link text-sm text-red-600"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control">
          {error.login && (
            <label className="label text-sm text-red-600">
              Enter the valid password and try again.
            </label>
          )}
          <button className="btn text-xl bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white font-semibold">
            Login
          </button>
        </div>
        <p>
          Don't have an account? Why not
          <Link to="/signup" className="link text-yellow-800 pl-2">
            Sign up
          </Link>
        </p>
        
      </form>
      
      <GoogleLoginButton/>
      
    </div>
  </div>
  );
};

export default Login;
