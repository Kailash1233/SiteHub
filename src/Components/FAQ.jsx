import React from "react";

const FAQ = () => {
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
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
