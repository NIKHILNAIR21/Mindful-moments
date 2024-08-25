import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { auth } from "../../firebase.ts"; // Adjust the import path to your Firebase configuration file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login (e.g., redirect or show success message)
      console.log("Logged in successfully");
    } catch (error) {
      setError("Failed to login. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-md shadow-md"
      >
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="bg-white p-3 m-2.5 w-[25rem] outline-none rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="bg-white p-3 m-2.5 w-[25rem] outline-none rounded-md"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mt-4">
          <button
            type="submit"
            className={`p-3 ${
              loading ? "bg-gray-500" : "bg-green-800"
            } text-white w-[25rem] rounded-md`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
