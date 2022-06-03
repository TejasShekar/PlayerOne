import {Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar";
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
  return (
    <div className="App w-full h-screen flex">
      <NavBar />
      <div className="mx-auto relative z-0 mt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
