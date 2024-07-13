import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "/images/6.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [error, setError] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const ref = collection(db, "Templates");
        const snapshot = await getDocs(ref);
        const templatesData = snapshot.docs.map((doc) => doc.data());
        setTemplates(templatesData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching templates: ", err);
      }
    };

    fetchTemplates();
  }, []);

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
    <div className="">
      <div
        className="flex items-start justify-center h-auto"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-4 mt-10 text-center bg-opacity-75 rounded-lg">
          <h1 className="text-4xl sm:text-6xl mb-4 text-white font-Mont font-bold">
            Sell Your Website with Ease
          </h1>
          <p className="text-lg mb-4 text-white font-Noto font-medium">
            Whether it's a template or a fully developed site, we connect you
            with buyers.
          </p>
          <Link to="/services">
            <button className="bg-blue-500 hover:bg-blue-600 text-gray-200 py-2 px-4 rounded-full">
              Get Started
            </button>
          </Link>

          <p className="mt-4 text-gray-200 font-Mont font-bold">
            100+ website sellers here
          </p>
        </div>
      </div>

      {/* Backend Data  */}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center py-4">
          Featured Templates
        </h1>
        {error && <p className="text-red-500 text-center">Error: {error}</p>}
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {templates.length > 0 ? (
            templates.map((template, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
                <p className="text-lg mb-4">{template.description}</p>
                <p className="text-lg font-bold mb-4">{template.price}</p>
                <a
                  href={template["Live Demo"]}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            ))
          ) : (
            <p className="text-center">No templates available.</p>
          )}
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
