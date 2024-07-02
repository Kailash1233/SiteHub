import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        <div>
          <h4 className="font-bold text-2xl mb-4">Adszoo SiteHub</h4>
          <p className="mb-4">
            Adszoo SiteHub helps you sell your website effortlessly. Whether
            it's a template or a fully developed site, we connect you with
            buyers to ensure a smooth and profitable transaction.
          </p>
        </div>
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
          <p>Phone: +91 72005 80860</p>
          <p>Address: Chennai, TamilNadu</p>
          <h4 className="font-bold mt-4 mb-2">Follow Us</h4>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                <FaFacebook size="1.5em" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaTwitter size="1.5em" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaLinkedin size="1.5em" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaInstagram size="1.5em" />
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
