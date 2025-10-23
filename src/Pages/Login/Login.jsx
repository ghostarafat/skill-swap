import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setError(err.message));
  };

  const handleGoogle = () => {
    googleLogin().then(() => navigate(from, { replace: true }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg bg-yellow-50">
      <h2 className="text-2xl font-bold text-center mb-4">Login Here</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} //
          className="w-full p-2 border mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-yellow-500 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
      <button
        onClick={handleGoogle}
        className="bg-red-400 text-white w-full py-2 mt-3 rounded flex items-center justify-center gap-2"
      >
        <FcGoogle size={18} /> Login with Google
      </button>

      <p className="mt-3 text-center text-sm">
        Forget password?
        <Link to="/forget" state={{ email }} className="text-yellow-700">
          Reset
        </Link>
      </p>

      <p className="mt-1 text-center text-sm">
        New here?{" "}
        <Link to="/signup" className="text-yellow-700">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
