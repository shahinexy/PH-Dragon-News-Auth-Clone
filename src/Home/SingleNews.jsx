import { useParams, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";
import RigthSideNav from "../Shared/RigthSideNav";

const SingleNews = () => {
    const news = useLoaderData()
    const {id} = useParams()
    const anews = news.find(news => news._id === id)
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-3 space-y-4 mb-7">
                    <h2 className="text-3xl font-bold">{anews.title}</h2>
                    <img src={anews.image_url} alt="" />
                    <p>{anews.details}</p>
                </div>
                <div>
                    <RigthSideNav></RigthSideNav>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;