import { Link, NavLink } from "react-router-dom";
import defaultUser from '../assets/user.png'
import { useContext } from "react";
import { authContext } from "../Root/AuthProvider";
const NavBar = () => {
  const {user, logOut} = useContext(authContext)
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={defaultUser}
                />
              </div>
            </div>
            {
              user ? <button onClick={()=> logOut()} className="btn bg-purple-500 text-white ml-3">Sign Out</button>
              : <Link to={'/login'} className="btn bg-purple-500 text-white ml-3">Login</Link>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
