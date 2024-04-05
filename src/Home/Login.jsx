import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { authContext } from "../Root/AuthProvider";

const Login = () => {
  const {userSignIN} = useContext(authContext)

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    const email = form.get('email')
    const pass = form.get('pass')
    userSignIN(email, pass)
    .then(res => console.log(res))
    .catch(error =>console.log(error))

  };
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <form onSubmit={handleLogin} className="card-body md:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              type="password"
              name="pass"
              placeholder="password"
              className="input input-bordered"
              
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-purple-500 text-white">Login</button>
          </div>
          <p className="my-3">
            do not have an account?{" "}
            <Link
              to={"/register"}
              className="text-purple-500 font-bold underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
