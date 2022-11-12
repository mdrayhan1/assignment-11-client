import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/Login/login.jpg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogin, provider  } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  const handleGoogleLogin = () =>{
    googleLogin(provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(err =>{
      console.error(err)
    })
    
  }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-accent"
                type="submit"
                value="SignUp with Google"
              >
                LogIn with Google
              </button>
          </form>
          <p className="text-center">
            New to Web Works{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
