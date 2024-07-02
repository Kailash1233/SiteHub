import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Adszoo SiteHub?</h2>
      <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Effortless Selling</h3>
          <p>
            List your website with ease and let our platform do the rest. We
            connect you with a large pool of potential buyers, making it simple
            to find the right match.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
          <p>
            With over 100+ website sellers and countless buyers, Adszoo SiteHub is
            a bustling marketplace for website transactions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
          <p>
            Your security is our priority. We ensure that all transactions are
            safe, secure, and transparent, giving you peace of mind throughout
            the process.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p>
            Our team of experts is always here to assist you. From listing your
            website to closing the deal, we provide support every step of the
            way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
