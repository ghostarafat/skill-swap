import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userImage from "../assets/user.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiBodySwapping } from "react-icons/gi";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-800 font-semibold border-b-2 border-yellow-800 pb-1"
      : "hover:text-yellow-700 font-medium";

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 px-4 sm:px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center mx-auto max-w-7xl w-full">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-yellow-800 tracking-wide"
        >
          <span className="flex items-center gap-1">
            <GiBodySwapping />
            SkillSwap
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center flex-1 justify-between">
          {/* Center Nav Links */}
          <div className="flex justify-center gap-6 flex-1">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/all-skills" className={navLinkClass}>
              All Skills
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <NavLink to="/support" className={navLinkClass}>
              Support
            </NavLink>
          </div>

          {/* Auth/User Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <NavLink to="/profile" className={navLinkClass}>
                  My Profile
                </NavLink>

                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition"
                >
                  Logout
                </button>

                <div className="relative group">
                  <img
                    src={user.photoURL || userImage}
                    alt="User"
                    className="w-8 h-8 rounded-full border border-yellow-400 cursor-pointer"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-sm text-gray-700 px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100">
                    {user.displayName}
                  </div>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium hover:bg-yellow-600"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className="px-4 py-2 rounded-md border border-yellow-500 text-yellow-700 font-medium hover:bg-yellow-500 hover:text-white"
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-yellow-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-2 px-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/all-skills"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            All Skills
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>

          <NavLink
            to="/support"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Support
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/profile"
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
              >
                My Profile
              </NavLink>

              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-left font-medium text-red-600"
              >
                Logout
              </button>

              <div className="flex items-center gap-2 pt-2">
                <img
                  src={user.photoURL || userImage}
                  className="w-8 h-8 rounded-full border border-yellow-400"
                />
                <span className="text-sm">{user.displayName}</span>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 text-white px-3 py-2 rounded"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="border border-yellow-500 text-yellow-700 px-3 py-2 rounded"
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
