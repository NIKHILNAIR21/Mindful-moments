import { IoHomeOutline } from "react-icons/io5";
import { SiPivotaltracker } from "react-icons/si";
import { BsJournalText } from "react-icons/bs";
import { GiMeditation } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div className="bg-lime-500 text-white rounded-md p-1.5 pt-4 h-[99%] flex flex-col justify-between items-start">
      <div className="flex flex-col  gap-8 justify-start ">
        <span className="flex items-center justify-start font-bold text-base gap-1">
          <IoHomeOutline /> Home
        </span>
        <span className="flex items-center justify-start font-bold text-base gap-1">
          <SiPivotaltracker /> Mood Tracker
        </span>
        <span className="flex items-center justify-start font-bold text-base gap-1">
          <BsJournalText /> Daily journal
        </span>
        <span className="flex items-center justify-start font-bold text-base gap-1">
          <GiMeditation /> Mindfull practices
        </span>
      </div>
      <button className="border  bg-red-400/80 border-red-500 rounded-md p-1.5">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
