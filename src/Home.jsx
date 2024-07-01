import React from "react";
import backgroundImage from "/images/beams.jpg";

const Home = () => {
  return (
    <div
      className="h-screen flex items-start justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 mt-10 text-center bg-opacity-75 rounded-lg">
        <h1 className="text-4xl sm:text-6xl mb-4 text-black font-Mont font-bold">
          Sell Your Website with Ease
        </h1>
        <p className="text-lg mb-4 text-black font-Noto font-medium">
          Adszoo E-Com helps you sell your website effortlessly. Whether it's a
          template or a fully developed site, we connect you with buyers.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
          Get Started
        </button>
        <p className="mt-4 text-black font-Mont font-bold">100+ website sellers here</p>
      </div>
    </div>
  );
};

export default Home;
