import { sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../provider/AuthProvider";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { handleForgetPassword } = useContext(AuthContext);
  const location = useLocation();

  console.log(auth);

  useEffect(() => {
    const emailFromState = location.state?.email;
    if (emailFromState) {
      setEmail(emailFromState);
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) return setError("Please enter your email!");

    handleForgetPassword(email)
      .then(() => {
        setMessage("✅ Check your Gmail for the reset link.");
        setError("");

        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 1500);
      })
      .catch((err) => {
        setError(err.message);
        setMessage("");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg bg-yellow-50 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-yellow-700">
        Reset Password
      </h2>

      <form onSubmit={handleReset} className="space-y-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 border rounded-md"
          required
        />
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
          Reset
        </button>
      </form>

      {message && <p className="text-green-600 text-sm mt-3">{message}</p>}
      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

      <p className="text-center mt-4 text-sm text-gray-600">
        Remembered your password?{" "}
        <Link
          to="/login"
          className="text-yellow-700 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default ForgetPassword;
