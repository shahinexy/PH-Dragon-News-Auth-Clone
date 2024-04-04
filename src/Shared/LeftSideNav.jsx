import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <div className="bg-gray-300 p-3 text-center">
                <h3 className="font-bold">All Category</h3>
            </div>
            <ul className="space-y-3 my-5 ">
                {
                    category.map(data => <NavLink key={data.id} to={`/category/${data.id}`}><li  className="bg-gray-100 p-2 mb-2">{data.name}</li></NavLink>)
                }
            </ul>
        </div>
    );
};

export default LeftSideNav;