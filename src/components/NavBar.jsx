import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import{ AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

    let {user, logOutUser} = useContext(AuthContext);
    console.log(user);

    let logoutUserButton = ()=>{
        logOutUser()
        .then((result)=>{
            console.log(result);
        })
        .catch(error=>console.log(error));
    }


  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
    
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>

                {
                    user && <>
                        <li><NavLink to="/order">Orders</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </>
                }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                {
                    user && <>
                        <li><NavLink to="/order">Orders</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>

                    </>
                }

          </ul>
        </div>

        {
            user &&         <div className="navbar-end">
          <a className="btn">{user?.email}</a>
          <button onClick={logoutUserButton} className="btn ml-2">Log Out</button>
        </div>
        }

        
      </div>
    </>
  );
};

export default NavBar;
