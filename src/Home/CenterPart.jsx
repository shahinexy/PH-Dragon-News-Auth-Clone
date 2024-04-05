import { FaBookmark, FaEye, FaShare } from "react-icons/fa";

const CenterPart = () => {
  return (
    <div>
      <div className="border">
        <div className="flex justify-between items-center p-3 bg-gray-200">
          <div className="flex gap-3">
            <img src="" alt="" />
            <div>
                <p>name</p>
                <small>date</small>
            </div>
          </div>
          <div className="flex gap-5">
            <FaBookmark></FaBookmark>
            <FaShare></FaShare>
          </div>
        </div>
        <div className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Title</h2>
            <img src="" alt="" />
            <p>description</p>
            <button>Read More</button>
            <hr />
            <div className="flex justify-between">
                <p>rating</p>
                <p className="flex items-center gap-3"><FaEye></FaEye> view</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CenterPart;
