import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/firebase.config";

function ForgetPassword() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Check your Gmail for reset link.");
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg bg-yellow-50">
      <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-2 border mb-3"
          required
        />
        <button className="bg-yellow-500 text-white w-full py-2 rounded">
          Reset
        </button>
      </form>
      {message && <p className="text-green-600 text-sm mt-3">{message}</p>}
      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
    </div>
  );
}

export default ForgetPassword;
