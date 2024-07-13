import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold py-2 flex justify-center items-center">
          <Link to="/">SiteHub</Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          {/* <Link to="/cart" className="hover:text-gray-400">
            Cart
          </Link> */}
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          {/* <Link to="/blog" className="hover:text-gray-400">
            Blogs
          </Link> */}
          <Link to="/register" className="hover:text-gray-400">
            Register
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-300">
          <Link
            to="/"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Services
          </Link>
          {/* <Link
            to="/blog"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Blogs
          </Link> */}
          {/* <Link
            to="/cart"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Cart
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
