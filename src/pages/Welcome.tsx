import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Welcome = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="max-w-lg  mx-auto text-center py-12">
      <h2 className="text-green-700 text-4xl font-semibold">
        Welcome to Mindfull Moments
      </h2>
      <p>Promoting mental health through mindful practices</p>
      {login ? <Login /> : <Signup />}

      {login ? (
        <p>
          Don't have account{" "}
          <span
            className="text-green-700 font-bold cursor-pointer "
            onClick={() => setLogin(!login)}
          >
            Sign Up
          </span>
        </p>
      ) : (
        <p>
          Have an account{" "}
          <span
            className="text-green-700 font-bold cursor-pointer "
            onClick={() => setLogin(!login)}
          >
            Login
          </span>
        </p>
      )}
    </div>
  );
};

export default Welcome;
