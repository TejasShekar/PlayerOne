import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {SideBar} from "./components/SideBar";
import {
  HomePage,
  Explore,
  WatchLater,
  Playlist,
  History,
  LikedVideos,
  Page404,
} from "./pages";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <NavBar theme={{darkTheme, setDarkTheme}} />
      <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
        <SideBar />
        <div className=" mx-auto w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/history" element={<History />} />
            <Route path="/liked" element={<LikedVideos />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
