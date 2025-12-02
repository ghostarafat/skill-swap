import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="text-center bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 max-w-lg w-full">
        <div className="text-9xl font-black text-yellow-600 mb-6">404</div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <p className="mt-10 text-gray-500 text-sm">
          Pro tip: Sometimes the best skills are found by going back home
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
