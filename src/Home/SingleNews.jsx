import { useParams } from "react-router-dom";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";
import RigthSideNav from "../Shared/RigthSideNav";

const SingleNews = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    single news
                    <p className="text-3xl">{id}</p>
                </div>
                <div>
                    <RigthSideNav></RigthSideNav>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;