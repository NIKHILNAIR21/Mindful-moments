import DailyReflection from "../components/DailyReflection";
import Layout from "../components/Layout";
import MindfulPrac from "../components/MindfulPrac";
import MoodCalender from "../components/MoodCalender";
import MoodDisplay from "../components/MoodDisplay";

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-2 flex gap-3 mt-4">
        <MoodCalender />
        <MoodDisplay />
      </div>
      <div className="p-2 flex gap-3 mt-4">
        <DailyReflection />
        <MindfulPrac />
      </div>
    </Layout>
  );
};

export default Dashboard;
