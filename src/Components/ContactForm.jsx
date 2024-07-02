import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles, { layout } from "../style";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgejjayy");

  if (state.succeeded) {
    return (
      <section id="contact" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Thanks for joining!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We appreciate your interest. We'll get in touch with you soon.
          </p>
        </div>
        <div
          className="gmap_canvas"
          style={{ overflow: "hidden", height: "400px", width: "590px" }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Srinivasan%20Chess%20Academy&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={layout.section}>
      <div>
        <h2 className={styles.heading2}>Reach Us!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We're here to assist you. Please use the form below to get in touch
          with us.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mt-5 w-full max-w-md">
            <h3 className="font-poppins font-semibold text-white text-[24px] leading-[30px] mb-3">
              Contact Form
            </h3>

            <div className="mb-4">
              <label htmlFor="name" className="text-gray-300 block">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-4 bg-gray-700 rounded text-white mb-2"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="text-gray-300 block">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="w-full p-4 bg-gray-700 rounded text-white mb-2"
                required
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-gray-300 block">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-4 bg-gray-700 rounded text-white mb-2"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-gray-300 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 bg-gray-700 rounded text-white mb-4"
                rows="6"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={layout.sectionImg}>
        {/* Google Maps Embed Code */}
        <div
          className="mapouter"
          style={{
            position: "relative",
            height: "400px",
            width: "590px",
            background: "#fff",
          }}
        >
          <div
            className="gmap_canvas"
            style={{ overflow: "hidden", height: "400px", width: "590px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Srinivasan%20Chess%20Academy&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
