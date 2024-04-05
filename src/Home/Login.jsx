import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <form className="card-body md:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
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
