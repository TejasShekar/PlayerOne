import {NavLink} from "react-router-dom";

export const SideBar = () => {
  const activeStyle = "text-black bg-[#eea53f]";

  return (
    // Add a btn that will toggle the side bar open and close
    // Add icons to each route. These icons will be visible irrespective of sidebar open or close
    <aside className="flex flex-col text-lg font-normal sticky h-[calc(100vh-6rem)] top-24 overflow-y-auto">
      <div>
        <ol>
          <li>
            <NavLink
              to="/explore"
              className={({isActive}) =>
                `${isActive ? activeStyle : ""} py-4 px-4 flex center`
              }
            >
              <span className="material-icons-outlined mr-2">explore</span>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watch-later"
              className={({isActive}) =>
                `${isActive ? activeStyle : ""} py-4 px-4 flex center`
              }
            >
              <span className="material-icons-outlined mr-2">watch_later</span>
              Watch Later
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liked"
              className={({isActive}) =>
                `${isActive ? activeStyle : ""} py-4 px-4 flex center`
              }
            >
              <span className="material-icons-outlined mr-2">thumb_up</span>
              Liked Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlist"
              className={({isActive}) =>
                `${isActive ? activeStyle : ""} py-4 px-4 flex center`
              }
            >
              <span className="material-icons-outlined mr-2">playlist_play</span>
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({isActive}) =>
                `${isActive ? activeStyle : ""} py-4 px-4 flex center`
              }
            >
              <span className="material-icons-outlined mr-2">history</span>
              History
            </NavLink>
          </li>
        </ol>
      </div>
      {/* Change this to btn so that it will redirect to homepage or the previous public route while also logging out.
      For that rewatch react router part 2*/}
      {/* <NavLink to="/" className=" py-4 px-2 flex center ">
        Log Out
      </NavLink> */}
    </aside>
  );
};
