import {useState} from "react";
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
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <NavBar theme={{darkTheme, setDarkTheme}} />
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
  );
}

export default App;
