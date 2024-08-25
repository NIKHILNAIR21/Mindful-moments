import { useState } from "react";
import Calendar from "react-calendar";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
import "react-calendar/dist/Calendar.css";
const MoodCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="">
      <Calendar
        onChange={onChange}
        value={value}
        className={"rounded-md "}
        tileClassName={"bg-lime-300"}
      />
    </div>
  );
};

export default MoodCalender;
