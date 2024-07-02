import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Information</h4>
          <p>Email: info@adszooecom.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 1234 Street Name, City, State, ZIP</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-6">&copy; 2024 Adszoo SiteHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
