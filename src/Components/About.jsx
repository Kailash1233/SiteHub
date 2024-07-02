import React from "react";
import backgroundImage from "/images/beams.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-grow font-Noto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">About Adszoo E-Com</h1>
          <p className="text-lg mb-4">
            Welcome to Adszoo E-Com, your go-to platform for selling websites
            with ease and efficiency. Whether you're a developer looking to sell
            your latest website template or a business owner ready to pass on
            your fully developed site, Adszoo E-Com connects you with eager
            buyers in the market.
          </p>
          <p className="text-lg mb-4">
            At Adszoo E-Com, our mission is to simplify the website selling
            process. We understand that selling a website can be a daunting
            task, from finding the right buyer to negotiating the best price.
            That's why we've created a streamlined platform that handles all the
            complexities, allowing you to focus on what you do best—creating and
            managing exceptional websites.
          </p>
          <p className="text-lg mb-4">
            <h1 className="text-xl font-bold mb-4">Why Choose Us?</h1>
            <li>
              Effortless Selling: List your website with ease and let our
              platform do the rest. We connect you with a large pool of
              potential buyers, making it simple to find the right match.
            </li>
            <li>
              Wide Reach: With over 100+ website sellers and countless buyers,
              Adszoo E-Com is a bustling marketplace for website transactions.
            </li>
            <li>
              Secure Transactions: Your security is our priority. We ensure that
              all transactions are safe, secure, and transparent, giving you
              peace of mind throughout the process.
            </li>
            <li>
              Expert Support: Our team of experts is always here to assist you.
              From listing your website to closing the deal, we provide support
              every step of the way.
            </li>
          </p>
          <p className="text-lg mb-4">
            <h1 className="text-xl font-bold mb-4">Our Services</h1>
            <li>
              Website Listings: Post your website for sale with detailed
              descriptions and attract the right buyers.
            </li>
            <li>
              Buyer Connection: Our platform connects you with buyers who are
              specifically looking for websites like yours.
            </li>
            <li>
              Transaction Assistance: We assist in the negotiation and
              transaction process to ensure a smooth and successful sale.
            </li>
          </p>
          <div className="flex justify-between items-center border-t border-gray-300 pt-4">
            <div>
              <p className="text-lg font-semibold">
                Join the Adszoo E-Com community today and experience a new level
                of convenience in selling websites. Whether you're a seasoned
                developer or a first-time seller, our platform is designed to
                cater to all your needs.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Contact Us:</p>
            <p className="text-lg">Phone: +91 7200580860</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
