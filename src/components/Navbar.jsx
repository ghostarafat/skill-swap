import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-yellow-200 px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-yellow-800">
        SkillSwap
      </Link>

      <div className="space-x-4">
        <NavLink to="/" className="hover:text-yellow-700 font-medium">
          Home
        </NavLink>
        <NavLink to="/login" className="hover:text-yellow-700 font-medium">
          Login
        </NavLink>
        <NavLink to="/signup" className="hover:text-yellow-700 font-medium">
          Signup
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
