import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { authContext } from "../Root/AuthProvider";

const RigthSideNav = () => {
  const {popupLogin, githubLogin} = useContext(authContext)

  const handleGoogleSignin = () =>{
    popupLogin()
    .then()
    .catch()
  }
  const handleGithubLogin = () =>{
    githubLogin()
    .then()
    .catch()
  }
  return (
    <div>
      <div className=" p-3 ">
        <h3 className="font-bold">Login With</h3>
      </div>
      <div>
        <button onClick={handleGoogleSignin} className="btn w-full border-2 border-sky-700 rounded-none text-sky-700 mb-3"><FaGoogle></FaGoogle> Login with google</button>
        <button onClick={handleGithubLogin} className="btn w-full border-2 border-gray-700 rounded-none text-gray-700 mb-3"><FaGithub></FaGithub> Login with github</button>
      </div>

      <div className=" p-3  mt-5">
        <h3 className="font-bold">Find us on</h3>
      </div>
        <div className="border rounded-lg  space-y-2 py-2">
            <a href=""><p className="flex gap-2 items-center p-3"><FaFacebook></FaFacebook> Facebook</p></a>
            <hr />
            <a href=""><p className="flex gap-2 items-center p-3"><FaTwitter></FaTwitter> Twitter</p></a>
            <hr />
            <a href=""><p className="flex gap-2 items-center p-3"><FaInstagram></FaInstagram> Instagram</p></a>
        </div>
    </div>
  );
};

export default RigthSideNav;
