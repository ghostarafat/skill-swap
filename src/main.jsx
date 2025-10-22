import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {/* other routes will be added later like /login, /signup etc */}
          </Routes>
        </main>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp></MainApp>
  </React.StrictMode>
);
