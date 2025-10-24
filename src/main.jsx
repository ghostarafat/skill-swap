import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import SkillDetails from "./Pages/SkillDetails";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import MyProfile from "./Pages/Profile/MyProfile";
import AllSkills from "./Pages/AllSkills"; //

function MainApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forget" element={<ForgetPassword />} />

              <Route
                path="/skill/:id"
                element={
                  <PrivateRoute>
                    <SkillDetails />
                  </PrivateRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <MyProfile />
                  </PrivateRoute>
                }
              />

              <Route path="/all-skills" element={<AllSkills />} />
            </Routes>
          </main>

          <Footer />

          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
