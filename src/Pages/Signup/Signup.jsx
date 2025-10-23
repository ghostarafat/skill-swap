import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      return setError("At least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return setError("At least one lowercase letter");
    }
    if (password.length < 6) {
      return setError("Minimum 6 characters");
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg bg-yellow-50">
      <h2 className="text-2xl font-bold text-center mb-4">Signup Here</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="w-full p-2 border mb-3"
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
          Register
        </button>
      </form>

      <button
        onClick={handleGoogle}
        className="bg-red-400 text-white w-full py-2 mt-3 rounded flex items-center justify-center gap-2"
      >
        <FcGoogle size={18} />
        Signup with Google
      </button>

      <p className="mt-3 text-center text-sm">
        Already have an account?
        <Link to="/login" className="text-yellow-700">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
