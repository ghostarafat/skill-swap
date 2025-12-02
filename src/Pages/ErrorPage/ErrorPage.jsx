import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from "lucide-react";
import AOS from "aos";

const ErrorPage = () => {
  const error = useRouteError();

  React.useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // ডিফল্ট এরর স্ট্যাটাস
  let title = "Something Went Wrong";
  let message = "An unexpected error occurred. Please try again later.";
  let status = 500;
  let icon = <AlertTriangle className="w-20 h-20 text-red-500" />;

  if (error?.status === 404) {
    title = "Oops! Page Not Found";
    message =
      "The page you are looking for might have been removed or is temporarily unavailable.";
    status = 404;
    icon = <div className="text-8xl font-black text-yellow-600">404</div>;
  } else if (error?.status === 401) {
    title = "Unauthorized Access";
    message = "You need to log in to view this page.";
    status = 401;
    icon = <AlertTriangle className="w-20 h-20 text-orange-500" />;
  } else if (error?.status === 403) {
    title = "Access Forbidden";
    message = "You don't have permission to access this page.";
    status = 403;
    icon = <AlertTriangle className="w-20 h-20 text-red-600" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 flex items-center justify-center px-4">
      <div
        className="max-w-2xl w-full text-center bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 border border-white/30"
        data-aos="zoom-in"
      >
        {/* আইকন / স্ট্যাটাস */}
        <div className="mb-8" data-aos="fade-down" data-aos-delay="200">
          {icon}
        </div>

        {/* স্ট্যাটাস কোড */}
        <h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {status}
        </h1>

        {/* টাইটেল */}
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-700 mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {title}
        </h2>

        {/* মেসেজ */}
        <p
          className="text-lg text-gray-600 mb-10 max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {message}
        </p>

        {/* বাটনগুলো */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-xl hover:bg-gray-300 transform hover:scale-105 transition duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            Reload Page
          </button>

          <Link
            to="-1"
            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Link>
        </div>

        {status === 404 && (
          <p
            className="mt-12 text-gray-500 text-sm"
            data-aos="fade"
            data-aos-delay="800"
          >
            Pro tip: Sometimes the best skills are found by going back home
          </p>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
