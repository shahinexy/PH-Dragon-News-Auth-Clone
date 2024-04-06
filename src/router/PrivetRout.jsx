import { useContext } from "react";
import { authContext } from "../Root/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(authContext)
    if(loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivetRout;