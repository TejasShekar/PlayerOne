import {SideBar} from "../components/SideBar";
import {useDispatch, useSelector} from "react-redux";
import {VideoCard} from "../components/VideoCard";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {removeAllVideosFromHistory} from "../redux/features/historySlice";

export const History = () => {
  const {history} = useSelector((state) => state.history);
  const dispatch = useDispatch();

  useDocumentTitle("History | PLAYERONE");

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main className="mx-4">
        <h1 className="text-3xl font-bold mb-4">History</h1>
        {history.length === 0 ? (
          <h2>No History Available</h2>
        ) : (
          <>
            <div className="flex flex-row-reverse">
              <button
                className="flex center mb-4 "
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(removeAllVideosFromHistory());
                }}
              >
                <span className="material-icons-outlined text-red-600 mr-1">delete</span>
                Clear History
              </button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))]  gap-4">
              {history.map((video) => (
                <VideoCard key={video._id} videoProps={video} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
