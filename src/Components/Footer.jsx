import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">Adszoo E-Com</h3>
          <p className="text-sm">Sell your website with ease.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="text-sm">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Payment Methods</h3>
          <p className="text-sm">Accepting payments via Stripe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
