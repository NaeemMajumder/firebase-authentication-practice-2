import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    let navigate = useNavigate();

    let {loginUser, signInwithGoogle} = useContext(AuthContext);

    let handleLogin = (event)=>{
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;

        loginUser(email, password)
        .then((result)=>{
            console.log(result.user);
            event.target.reset();
            navigate("/")
        })
        .catch(error=>console.log(error));

    }

    let loginWithGoogle = ()=>{
        signInwithGoogle()
        .then((result)=>{
            console.log(result.user);
            navigate("/")
        })
        .catch((error)=>{
            console.log(error);
        })
    }

  return (
    <>
      <h1 className="text-purple-600 text-3xl font-bold my-16">Login Form</h1>
      <div className="max-w-[500px] m-auto mb-4">
        <form onSubmit={handleLogin} action="">

          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input name="email" type="text" className="grow" placeholder="Email" required />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input name="password" type="password" className="grow" placeholder="password" required />
          </label>

          <p className="mb-4 text-start">Do not have an account? <NavLink className={"text-blue-500 underline"} to="/register">Register</NavLink></p>

          <button className="btn btn-wide text-md font-bold text-white bg-purple-600">Login</button>
          <button onClick={loginWithGoogle} className="btn btn-wide text-md font-bold ">Google</button>

        </form>

      </div>
    </>
  );
};

export default Login;
