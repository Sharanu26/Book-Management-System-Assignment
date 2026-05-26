import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0B1120] border-b border-slate-800 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          
          {/* Book Icon */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-md">
            <FaBookOpen className="text-white text-2xl" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-wide">
            <span className="text-white">
              Book 
            </span>{" "}
            <span className="text-cyan-400">
             Management System
            </span>
          </h1>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;