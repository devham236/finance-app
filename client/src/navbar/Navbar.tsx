import ThemeToggle from "./ThemeToggle";
import UserIcon from "./UserIcon";
import Auth from "./Auth";
import Title from "./Title";
import TimePicker from "./TimePicker";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { userData } = useSelector((state: any) => state.user);

  return (
    <nav className="w-full p-8 border-b-2 relative border-slate-50 dark:border-opacity-20 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <Title>Ruune</Title>
      <div className="flex items-center">
        {userData.id && <TimePicker />}
        <ThemeToggle>
          <span className="material-symbols-rounded mr-1">light_mode</span>
          <span className="material-symbols-rounded">dark_mode</span>
        </ThemeToggle>
        <UserIcon>
          <span className={`material-symbols-rounded`}>account_circle</span>
        </UserIcon>
      </div>
      <Auth />
    </nav>
  );
};

export default Navbar;
