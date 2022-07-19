import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filterByCategory} from "../redux/features/videoSlice";

export const Categories = ({currentCategory}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const categories = ["All", "Racing", "Action", "Sports", "Adventure"];
  return (
    <div className="mb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={(e) => {
            dispatch(filterByCategory(e.target.value));
            if (pathname === "/") navigate("/explore");
          }}
          value={category}
          className={`mx-2 border-[#eea53f] border-2 rounded-full px-4 py-1 ${
            currentCategory === category ? "bg-[#eea53f] text-black" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
