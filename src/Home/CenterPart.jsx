import { FaBookmark, FaEye, FaShare } from "react-icons/fa";

const CenterPart = ({news}) => {
  const {_id, image_url, title, author, details, rating, total_view} = news;
  return (
    <div className="mb-8">
      <div className="border">
        <div className="flex justify-between items-center p-3 bg-gray-200">
          <div className="flex gap-3">
            <img className="w-12 rounded-full" src={author.img} alt="" />
            <div>
                <p>{author.name}</p>
                <small>{author.published_date}</small>
            </div>
          </div>
          <div className="flex gap-5">
            <FaBookmark></FaBookmark>
            <FaShare></FaShare>
          </div>
        </div>
        <div className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">{title}</h2>
            <img src={image_url} alt="" />
            <p>{details}</p>
            <button>Read More</button>
            <hr />
            <div className="flex justify-between">
                <p>Rating {rating.number}</p>
                <p className="flex items-center gap-3"><FaEye></FaEye> {total_view}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CenterPart;
