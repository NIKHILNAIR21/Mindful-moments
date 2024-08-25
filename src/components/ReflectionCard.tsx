import { FaChevronRight } from "react-icons/fa";
type cardprop = {
  shortLine: string;
  date: string;
};
const ReflectionCard = ({ shortLine, date }: cardprop) => {
  return (
    <div className="bg-black text-white rounded-md p-3 flex justify-between items-center">
      <div className="flex items-center justify-between w-full">
        <p>{shortLine}</p> <p className="bg-green-400 w-fit p-1 mx-4 rounded-md">{date}</p>
      </div>
      <FaChevronRight />
    </div>
  );
};

export default ReflectionCard;
