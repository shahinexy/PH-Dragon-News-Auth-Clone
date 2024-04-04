import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import NavBar from "../Shared/NavBar";
import RigthSideNav from "../Shared/RigthSideNav";
import CenterPart from "./CenterPart";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <NavBar></NavBar>

      <div className="grid md:grid-cols-4 grid-cols-1 my-8 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <CenterPart></CenterPart>
        </div>
        <div>
          <RigthSideNav></RigthSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
