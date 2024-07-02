import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "/images/3.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const testimonials = [
    {
      name: "John Doe",
      quote:
        "Adszoo SiteHub made selling my website so easy and hassle-free. Highly recommend!",
      image: "/testimonial/ez1.png",
    },
    {
      name: "Jane Smith",
      quote:
        "The platform is very user-friendly and I found a buyer for my website within days.",
      image: "/testimonial/ez.png",
    },
  ];

  const faqs = [
    {
      question: "How do I list my website for sale?",
      answer:
        "To list your website, simply sign up, fill out the listing form with your website details, and submit. Your listing will be reviewed and published shortly.",
    },
    {
      question: "Is there a fee for listing my website?",
      answer:
        "Listing your website on Adszoo SiteHub is free. We only charge a commission once your website is sold.",
    },
    {
      question: "How secure are transactions on Adszoo SiteHub?",
      answer:
        "We prioritize security by using trusted payment gateways and ensuring that all transactions are safe and transparent.",
    },
  ];

  return (
    <div className="h-full">
      <div
        className="flex items-start justify-center"
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
            Whether it's a template or a fully developed site, we connect you
            with buyers.
          </p>
          <Link to="/services">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Get Started
            </button>
          </Link>

          <p className="mt-4 text-black font-Mont font-bold">
            100+ website sellers here
          </p>
        </div>
      </div>
      {/* About  */}
      <div>
        <h1 className="text-3xl font-bold mb-4 p-4 text-black text-center">
          About Adszoo SiteHub
        </h1>
        <div className="flex-grow font-Noto">
          <div className="container mx-auto">
            <p className="text-lg mb-4">
              Welcome to Adszoo SiteHub, your go-to platform for selling
              websites with ease and efficiency. Whether you're a developer
              looking to sell your latest website template or a business owner
              ready to pass on your fully developed site, Adszoo SiteHub
              connects you with eager buyers in the market.
            </p>
            <p className="text-lg mb-4">
              <h1 className="text-xl font-bold mb-4">Why Choose Us?</h1>
              <li className="mb-2">
                Effortless Selling: List your website with ease and let our
                platform do the rest. We connect you with a large pool of
                potential buyers, making it simple to find the right match.
              </li>
              <li className="mb-2">
                Wide Reach: With over 100+ website sellers and countless buyers,
                Adszoo SiteHub is a bustling marketplace for website
                transactions.
              </li>
              <li className="mb-2">
                Secure Transactions: Your security is our priority. We ensure
                that all transactions are safe, secure, and transparent, giving
                you peace of mind throughout the process.
              </li>
            </p>
            <p className="text-lg mb-4">
              <h1 className="text-xl font-bold mb-4">Our Services</h1>
              <li className="mb-2">
                Website Listings: Post your website for sale with detailed
                descriptions and attract the right buyers.
              </li>
              <li className="mb-2">
                Buyer Connection: Our platform connects you with buyers who are
                specifically looking for websites like yours.
              </li>
              <li className="mb-2">
                Transaction Assistance: We assist in the negotiation and
                transaction process to ensure a smooth and successful sale.
              </li>
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial  */}
      <div className="p-4">
        <h1 className="text-3xl font-bold p-4 text-center text-black">
          What Our Users Say
        </h1>
        <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 font-Noto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p>"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
      {/* FAQs  */}
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3
                className="text-xl font-semibold mb-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <span className="ml-2">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </h3>
              {openIndex === index && (
                <p className="p-4 bg-gray-200 rounded-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
