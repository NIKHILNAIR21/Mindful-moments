import { ReactNode } from "react";
import Sidebar from "./Layouts/Sidebar";
import Navbar from "./Layouts/Navbar";

type LayoutProps = {
  children: ReactNode; // Allows for any valid React child
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full h-screen p-3">
      <Sidebar /> {/* Adjust width as needed */}
      <div className="flex-1 px-3">
        <Navbar />
        <span className="">{children}</span>
      </div>
    </div>
  );
};

export default Layout;
