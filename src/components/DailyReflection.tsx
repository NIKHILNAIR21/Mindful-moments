import ReflectionCard from "./ReflectionCard";

const DailyReflection = () => {
  return (
    <div className="w-[70%]  bg-green-500 flex  justify-start flex-col gap-3 p-4 rounded-md">
      <h2 className="text-justify text-3xl font-semibold text-white">
        Daily Reflection
      </h2>
      <ReflectionCard shortLine="today was a good day " date="17-10-2024" />
      <ReflectionCard shortLine="today was a good day " date="17-10-2024" />
      <ReflectionCard shortLine="today was a good day " date="17-10-2024" />
    </div>
  );
};

export default DailyReflection;
