import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "/home/jessa06/coursework/cap-site/src/App.css";
// import { NavBar } from "./components/NavBar";
import { Route } from "react-router-dom";
// import { AuthProvider } from "./components/Auth";
import { Routes } from "react-router-dom";
// import { Profile } from "./components/Profile";
// import { Login } from "./components/Login";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Search from "./Search";

export default function App() {
  return (
    // <AuthProvider>
    <>
      {/* <NavBar /> */}
      <Search />
      <AllProducts />

      {/* // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/contact" element={<Contact />} />
      //   <Route path="/login" element={<Login />} />
      //   <Route path="/register" element={<Register />} />
      //   <Route path="/profile" element={<Profile />} />
      //   <Route path="*" element={<NotFound />} />
      // </Routes> */}
      {/* </AuthProvider> */}
      {/* © <a href='https://www.123rf.com/profile_virtosmedia'>virtosmedia</a>, <a href='https://www.123rf.com/free-images/'>123RF Free Images</a> */}
    </>
  );
}
