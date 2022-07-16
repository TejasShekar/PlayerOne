import {NavLink} from "react-router-dom";
import fallback_DP from "../assets/fallback_DP.jpg";

export const SideBar = () => {
  const activeStyle = {
    color: "black",
    fontWeight: "700",
    backgroundColor: "#eea53f",
  };
  return (
    <aside className="flex flex-col text-xl font-normal sticky h-screen top-20 overflow-y-auto">
      <div>
        <div className="flex items-center mb-4">
          <figure className="w-14 mx-2">
            <img
              className="rounded-[50%] border-[1px] border-black"
              src={fallback_DP}
              alt="profile_img"
            />
          </figure>
          <p>Hello, User</p>
        </div>
        <ol>
          <li>
            <NavLink
              to="/explore"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
              className=" inline-block py-4 px-2 w-full "
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlist"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
              className=" inline-block py-4 px-2 w-full "
            >
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watch-later"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
              className=" inline-block py-4 px-2 w-full "
            >
              Watch Later
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liked"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
              className=" inline-block py-4 px-2 w-full "
            >
              Liked Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
              className=" inline-block py-4 px-2 w-full "
            >
              History
            </NavLink>
          </li>
        </ol>
      </div>
      <NavLink to="/" className=" inline-block py-4 px-2 w-full ">
        Log Out
      </NavLink>
    </aside>
  );
};
