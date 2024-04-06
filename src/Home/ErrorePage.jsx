import { Link } from "react-router-dom";


const ErrorePage = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen flex-col">
                <h1 className="text-3xl font-bold">404 Page Not Found!!</h1>
                <Link to={'/'}><button className="btn bg-purple-500 text-white font-bold my-5">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorePage;