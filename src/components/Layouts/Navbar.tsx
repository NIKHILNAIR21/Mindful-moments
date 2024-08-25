import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase"; // Adjust the import path to your Firebase configuration file

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the login page or home page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="flex bg-emerald-400 justify-between px-5 py-2 items-center w-full rounded-md">
      <h2 className="text-2xl font-semibold text-white">Welcome User</h2>
 
      <div className="w-12 h-12 rounded-full bg-blue-400"></div>
    </div>
  );
};

export default Navbar;
