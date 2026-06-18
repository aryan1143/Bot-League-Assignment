import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar bg-[#1E1E1E] p-8 w-full py-0 flex h-18">
      <div className="h-full w-full max-w-420 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center h-full">
          <img className="h-7/10 mr-12" src="/icon.png" alt="Icon" />
        </Link>
        <div className="flex justify-between w-4/10 space-x-8 font-orbitron mr-auto ml-12 h-full text-[1.2rem]">
          <NavLink
            to="/"
            className="text-white hover:text-gray-400 px-2 border-b-4 border-transparent h-full transition-colors duration-100 ease-in-out flex items-center"
          >
            Events
          </NavLink>
          <NavLink
            to="/program"
            className="text-white hover:text-gray-400 px-2 border-b-4 border-transparent h-full transition-colors duration-100 ease-in-out flex items-center"
          >
            Program
          </NavLink>
          <NavLink
            to="/community"
            className="text-white hover:text-gray-400 px-2 border-b-4 border-transparent h-full transition-colors duration-100 ease-in-out flex items-center"
          >
            Community
          </NavLink>
          <NavLink
            to="/ranks"
            className="text-white hover:text-gray-400 px-2 border-b-4 border-transparent h-full transition-colors duration-100 ease-in-out flex items-center"
          >
            Ranks
          </NavLink>
        </div>
        <div className="flex space-x-4 items-center ml-auto">
          <Link
            to="/login"
            className="text-white hover:text-gray-400 outline outline-white hover:outline-gray-400 px-6 py-1.5 rounded"
          >
            LOGIN
          </Link>
          <Link
            to="/register"
            className="bg-[#FF4C4C] text-white px-6 py-1.5 rounded hover:bg-[#FA3A3A]"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
