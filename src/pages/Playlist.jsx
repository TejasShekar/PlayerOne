import {SideBar} from "../components/SideBar";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {PlayListCard} from "../components/PlayListCard";
import {PlaylistModal} from "../components/PlaylistModal";
import {setIsModalOpen} from "../redux/features/playlistSlice";

export const Playlist = () => {
  useDocumentTitle("Playlists | PLAYERONE");
  const {playlists, isModalOpen} = useSelector((state) => state.playlist);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main className="mx-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Playlists</h1>
          <button
            className=" bg-[#eea53f] font-bold text-xl p-2 rounded-lg text-black mr-2 px-4"
            onClick={(e) => {
              e.stopPropagation();
              token ? dispatch(setIsModalOpen(true)) : navigate("/login");
            }}
          >
            Create a Playlist
          </button>
        </div>
        {playlists?.length === 0 ? (
          <>
            <div>
              You have no playlists yet.{" "}
              <Link to="/explore">
                <button className=" hover:underline font-bold">Click here</button>
              </Link>{" "}
              to go to explore page to add videos to playlist.
            </div>
          </>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4 mt-6">
            {playlists.map((playlist) => (
              <PlayListCard key={playlist._id} data={playlist} />
            ))}
          </div>
        )}
        {isModalOpen && <PlaylistModal />}
      </main>
    </div>
  );
};
