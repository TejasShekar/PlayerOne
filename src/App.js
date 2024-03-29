import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {RequireAuth} from "./components/RequiresAuth";

import {
  HomePage,
  Explore,
  WatchLater,
  Playlist,
  History,
  LikedVideos,
  Page404,
  Login,
  SignUp,
  SingleVideo,
} from "./pages";
import {SinglePlaylist} from "./pages/SinglePlaylist";
import {fetchVideos} from "./redux/features/videoSlice";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const {token} = useSelector((store) => store.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const previousRoute = location.state?.from?.pathname ?? "/explore";

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <NavBar theme={{darkTheme, setDarkTheme}} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:videoId" element={<SingleVideo />} />
        <Route element={<RequireAuth />}>
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="playlist/:playlistId" element={<SinglePlaylist />} />
          <Route path="/history" element={<History />} />
          <Route path="/liked" element={<LikedVideos />} />
        </Route>
        {!token ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to={previousRoute} replace />} />
            <Route path="/signup" element={<Navigate to={previousRoute} replace />} />
          </>
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
