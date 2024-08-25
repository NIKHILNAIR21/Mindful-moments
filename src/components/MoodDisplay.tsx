const MoodDisplay = () => {
  return (
    <div className=" w-[40%] h-72 bg-green-200 rounded-md py-8">
      <h2 className="text-center text-2xl font-bold">Your Current Mood</h2>
      <p className="text-6xl text-center py-4">😀</p>
      <p className="text-center text-xl py-4">Happy Mood</p>
      <div className="flex justify-center">
        <button className="bg-lime-400 rounded-md p-2 font-semibold" >See More</button>
      </div>
    </div>
  );
};

export default MoodDisplay;
