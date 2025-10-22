import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userImage from "../assets/user.png";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-yellow-200 px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-yellow-800">
        SkillSwap
      </Link>

      <div className="space-x-4 flex items-center">
        <NavLink to="/" className="hover:text-yellow-700 font-medium">
          Home
        </NavLink>

        {user ? (
          <>
            <NavLink
              to="/profile"
              className="hover:text-yellow-700 font-medium"
            >
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
                alt="avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <div
                className="absolute left-0 mt-1 bg-white text-sm text-gray-700 px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                role="tooltip"
              >
                {user.displayName}
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" className="hover:text-yellow-700 font-medium">
              Login
            </NavLink>
            <NavLink to="/signup" className="hover:text-yellow-700 font-medium">
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
