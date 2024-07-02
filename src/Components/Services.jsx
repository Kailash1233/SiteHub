import React from "react";
import backgroundImage from "/images/1.jpg";

const Services = () => {
  return (
    <section className="bg-white text-center">
      <div
        className="flex items-start justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold mb-4 p-20 text-white">Our Services</h1>
      </div>
      <div className="py-20 max-w-4xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Website Listings</h3>
          <p>
            Post your website for sale with detailed descriptions and attract
            the right buyers.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Buyer Connection</h3>
          <p>
            Our platform connects you with buyers who are specifically looking
            for websites like yours.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Transaction Assistance</h3>
          <p>
            We assist in the negotiation and transaction process to ensure a
            smooth and successful sale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
