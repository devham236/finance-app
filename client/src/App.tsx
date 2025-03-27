import Sidebar from "./sidebar/Sidebar";
import MainContent from "./components/MainContent";
import Navbar from "./navbar/Navbar";
import SidebarItem from "./sidebar/SidebarItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebaseConfig.js";
import { logoutUser } from "./redux/thunks/userThunks";
import { setUser } from "./redux/slices/userSlice.js";

const App = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            id: user.uid,
            createdAt: user.reloadUserInfo.createdAt,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main
      className={`w-full h-full dark:bg-body_color_dark ${
        isDarkMode && "dark"
      }`}
    >
      <div className="w-full h-full flex items-center justify-center bg-body_color_light dark:bg-body_color_dark">
        <div className="w-full h-full bg-container_color_light dark:bg-container_color_dark shadow-lg max-w-[1500px] max-h-[900px] rounded-xl">
          <Navbar />
          <div className="w-full h-[calc(100%-98px)] flex">
            <Sidebar>
              <SidebarItem path={"/overview"}>
                <span className="material-symbols-rounded mr-2">grid_view</span>
                <p>Overview</p>
              </SidebarItem>
              <SidebarItem path={"/settings"}>
                <span className="material-symbols-rounded mr-2">settings</span>
                <p>Settings</p>
              </SidebarItem>
            </Sidebar>
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
