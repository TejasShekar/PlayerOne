import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <aside className="px-8 py-10 flex flex-col justify-between z-10 relative w-60 bg-[#eea53f] text-xl text-black font-normal">
      <div>
        <figure className="w-14 mb-6">
          <img
            className="rounded-[50%] border-[1px] border-black"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt="profile_img"
          />
        </figure>
        <ol className="flex flex-col gap-8 py-2 ">
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
          <li>
            <Link to="/watch-later">Watch Later</Link>
          </li>
          <li>
            <Link to="/liked-videos">Liked Videos</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ol>
      </div>
      <Link to="/">Log Out</Link>
    </aside>
  );
};
