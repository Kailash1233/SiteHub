import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { LuLoader2 } from "react-icons/lu";
import backgroundImage from "/images/1.jpg";

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    liveDemo: "",
    image: "",
    price: "",
    id: "",
  });

  const [showError, setShowError] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [exchange, setExchange] = useState(false);

  const { name, description, liveDemo, image, price, id } = formData;

  const registrationCollection = collection(db, "Templates");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setShowError({});
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Name is required";
    tempErrors.description = description ? "" : "Description is required";
    tempErrors.liveDemo = liveDemo ? "" : "Live Demo URL is required";
    tempErrors.image = image ? "" : "Image URL is required";
    tempErrors.price = price ? "" : "Price is required";
    tempErrors.id = id ? "" : "ID is required";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();
    const isValid = Object.values(tempErrors).every((x) => x === "");
    if (!isValid) {
      setShowError(tempErrors);
      return;
    }

    setExchange(true);

    try {
      const docRef = await addDoc(registrationCollection, {
        name,
        description,
        liveDemo,
        image,
        price,
        id: Number(id),
        time: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);

      setFormData({
        name: "",
        description: "",
        liveDemo: "",
        image: "",
        price: "",
        id: "",
      });
      setSuccessMessage(true);
      setExchange(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      setExchange(false);
      throw new Error("Check your internet connectivity or Try again");
    }
  };

  return (
    <>
      {successMessage ? (
        <div className="flex flex-col items-center justify-center text-center text-green-500">
          Registration successful!
          <img
            src="https://media.giphy.com/media/3o7aCVpSLNZVL9pFlC/giphy.gif"
            alt="Success GIF"
            className="w-24 mt-2"
          />
          <button
            className="text-blue-500 underline mt-2"
            onClick={() => setSuccessMessage(false)}
          >
            Register another
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-white"
            >
              <div className="text-center">
                <h1 className="text-2xl font-bold text-neonGreen">
                  Registration Form
                </h1>
              </div>
              <div className="w-full">
                <label htmlFor="name">Name:</label>
                <input
                  className="w-full p-2 border-2 rounded-lg bg-gray-100 text-gray-800 border-gray-700 focus:border-neonGreen outline-none"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {showError.name && (
                  <p className="text-red-500">{showError.name}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="description">Description:</label>
                <input
                  className="w-full p-2 border-2 rounded-lg bg-gray-100 text-gray-800 border-gray-700 focus:border-neonGreen outline-none"
                  type="text"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter the description"
                />
                {showError.description && (
                  <p className="text-red-500">{showError.description}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="liveDemo">Live Demo:</label>
                <input
                  className="w-full p-2 border-2 rounded-lg bg-gray-100 text-gray-800 border-gray-700 focus:border-neonGreen outline-none"
                  type="text"
                  name="liveDemo"
                  id="liveDemo"
                  value={formData.liveDemo}
                  onChange={handleChange}
                  placeholder="Enter live demo URL"
                />
                {showError.liveDemo && (
                  <p className="text-red-500">{showError.liveDemo}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="price">Price:</label>
                <input
                  className="w-full p-2 border-2 rounded-lg bg-gray-100 text-gray-800 border-gray-700 focus:border-neonGreen outline-none"
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter the price"
                />
                {showError.price && (
                  <p className="text-red-500">{showError.price}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="image">Image:</label>
                <input
                  className="w-full p-2 border-2 rounded-lg bg-gray-100 text-gray-800 border-gray-700 focus:border-neonGreen outline-none"
                  type="text"
                  name="image"
                  id="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter the image link"
                />
                {showError.image && (
                  <p className="text-red-500">{showError.image}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="id">ID:</label>
                <input
                  className="w-full p-2 border-2 rounded-lg bg-gray-100 text-gray-800 border-gray-700 focus:border-neonGreen outline-none"
                  type="number"
                  name="id"
                  id="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="Enter the ID"
                />
                {showError.id && <p className="text-red-500">{showError.id}</p>}
              </div>
              <button
                type="submit"
                className="bg-neonGreen text-white-800 p-3 border-2 border-neonGreen rounded-lg w-full shadow-lg hover:bg-gray-100 hover:text-black hover:border-neonGreen hover:text-neonGreen transition duration-300"
                disabled={exchange}
              >
                {!exchange ? (
                  "Register"
                ) : (
                  <div className="flex gap-2 justify-center items-center">
                    <LuLoader2 className="inline animate-spin" size={20} />
                    <h1>Registering</h1>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-4">
        © 2024 Your Company. All rights reserved.
      </footer> */}
    </>
  );
};

export default Register;
