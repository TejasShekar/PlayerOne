import {NavLink} from "react-router-dom";
import fallback_DP from "../assets/fallback_DP.jpg";

export const SideBar = () => {
  const activeStyle = {
    color: "black",
    fontWeight: "700",
    backgroundColor: "#eea53f",
  };
  return (
    // Add a btn that will toggle the side bar open and close
    // Add icons to each route. These icons will be visible irrespective of sidebar open or close
    <aside className="flex flex-col text-xl font-normal sticky h-[calc(100vh-6rem)] top-24 overflow-y-auto">
      <div>
        <div className="flex items-center mb-4">
          <figure className="w-14 mx-2">
            <img
              className="rounded-[50%] border-[1px] border-black"
              // http://xsgames.co/randomusers/assets/avatars/pixel/${random_number}.jpg -> use this link to get an random number between 0 and 53 and assign that img as profile picture to a new user.
              // src="https://xsgames.co/randomusers/avatar.php?g=pixel"
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
              className={(isActive) =>
                `${isActive ? activeStyle : ""} inline-block py-4 px-2 w-full`
              }
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
      {/* Change this to btn so that it will redirect to homepage or the previous public route while also logging out.
      For that rewatch react router part 2*/}
      <NavLink to="/" className=" inline-block py-4 px-2 w-full ">
        Log Out
      </NavLink>
    </aside>
  );
};
