import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./provider/AuthProvider";

function MainApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar></Navbar>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
              <Route
                path="/forget"
                element={<ForgetPassword></ForgetPassword>}
              ></Route>
            </Routes>
          </main>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp></MainApp>
  </React.StrictMode>
);
