import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      quote:
        "Adszoo E-Com made selling my website so easy and hassle-free. Highly recommend!",
      image: "/images/john.jpg",
    },
    {
      name: "Jane Smith",
      quote:
        "The platform is very user-friendly and I found a buyer for my website within days.",
      image: "/images/jane.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2">
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
    </section>
  );
};

export default Testimonials;
