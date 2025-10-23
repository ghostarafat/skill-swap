import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userImage from "../assets/user.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-800 font-semibold border-b-2 border-yellow-800 pb-1"
      : "hover:text-yellow-700 font-medium";

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 px-4 sm:px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-yellow-800 tracking-wide"
        >
          SkillSwap
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="text-yellow-800 text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {user ? (
            <>
              <NavLink to="/profile" className={navLinkClass}>
                My Profile
              </NavLink>

              <button
                onClick={logout}
                className="hover:text-yellow-700 font-medium"
              >
                Logout
              </button>

              <div className="relative group">
                <img
                  src={user.photoURL || userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full cursor-pointer border border-yellow-400"
                />
                <div className="absolute left-0 mt-1 bg-white text-sm text-gray-700 px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {user.displayName}
                </div>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink to="/signup" className={navLinkClass}>
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-3 space-y-2 md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Home
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
                className="hover:text-yellow-700 font-medium text-left"
              >
                Logout
              </button>

              <div className="flex items-center gap-2 pt-1">
                <img
                  src={user.photoURL || userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-yellow-400"
                />
                <span className="text-sm text-gray-700">
                  {user.displayName}
                </span>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
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
