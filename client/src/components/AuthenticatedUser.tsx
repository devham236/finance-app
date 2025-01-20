import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/thunks/userThunks";

const AuthenticatedUser = () => {
  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="w-[500px] bg-item_color_light dark:bg-body_color_dark rounded-md p-[1.5rem] text-text_color_light dark:text-text_color_dark">
      <h2 className="text-xl font-bold mb-4">
        Hello there!
        <span className="text-green_color ml-2">
          {userData?.displayName === "" || userData?.displayName === null
            ? userData?.email
            : userData?.displayName}
        </span>
      </h2>
      <button
        onClick={() => dispatch(logoutUser())}
        className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
      >
        Log out
      </button>
    </div>
  );
};

export default AuthenticatedUser;
