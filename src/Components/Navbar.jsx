// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <img src="/images/icon.png" alt="Logo" className="h-10 mr-2" />
//           <span className="text-xl font-bold">Adszoo E-Com</span>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="block focus:outline-none">
//             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`w-full md:w-auto md:flex ${isOpen ? "block" : "hidden"}`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
//             <li>
//               <Link to="/" className="hover:text-gray-400 block py-2 md:py-0">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/products"
//                 className="hover:text-gray-400 block py-2 md:py-0"
//               >
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/cart"
//                 className="hover:text-gray-400 block py-2 md:py-0"
//               >
//                 Cart
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

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
          <img src="/images/icon.png" alt="Logo" className="h-10 mr-2" />
          <Link to="/">Adszoo E-Com</Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/products" className="hover:text-gray-400">
            Product
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            Cart
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-700 py-4">
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
            to="/product"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Product
          </Link>
          <Link
            to="/cart"
            className="py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
