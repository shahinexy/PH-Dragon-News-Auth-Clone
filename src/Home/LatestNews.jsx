import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div>
            
      {/* latest news  */}
      <div className="flex p-2 bg-gray-300">
        <button className="btn bg-purple-500 rounded-none text-white">Latest</button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link className="mr-5" to={'/'}>I can be a React component, multiple React components, or just some
          text.</Link>
          <Link className="mr-5" to={'/'}>I can be a React component, multiple React components, or just some
          text.</Link>
          <Link className="mr-5" to={'/'}>I can be a React component, multiple React components, or just some
          text.</Link> 
        </Marquee>
      </div>
        </div>
    );
};

export default LatestNews;