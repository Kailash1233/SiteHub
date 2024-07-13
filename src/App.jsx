import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
// import Blog from "./Components/Blog";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
