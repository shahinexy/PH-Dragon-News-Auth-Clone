import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { authContext } from "../Root/AuthProvider";

const Register = () => {
  const { createUser } = useContext(authContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    const email = form.get('email')
    const pass = form.get('pass')
    createUser(email, pass)
    .then(res => console.log(res))
    .catch(error =>console.log(error))

  };
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <form onSubmit={handleRegister} className="card-body md:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Register</button>
          </div>
          <p className="my-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-purple-500 font-bold underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
