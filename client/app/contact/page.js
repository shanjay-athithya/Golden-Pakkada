"use client";

import { API } from "../config/config";
import axios from "axios";
import React, { useState } from "react";

const brandColor = "#000000"; // Example brand color
const blackki = "#000000";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^\d{10}$/.test(phone);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!validatePhone(phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API}/api/send-email`, {
        name,
        email,
        phone,
        subject,
      });
      console.log(res.data);

      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");

      // Show thank you message
      setIsSubmitted(true);

      // Hide the modal after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" flex items-center justify-center bg-pyellow">
      <main
        id="contact"
        className="flex flex-col justify-center bg-pyellow  items-center px-10 lg:px-30 py-10 relative pt-[40px] w-full"
        
      >
        <div className="text-center mb-6">
          <h1
            className="text-center font-semibold lg:text-4xl text-3xl mt-8 mb-10 tracking-wide text-pgreen"
            style={{ fontFamily: "Montserrat, sans-serif" }} // Font for "Contact Us"
          >
            Contact Us
          </h1>
        </div>
        <div className="grid lg:grid-cols-1 gap-10 max-w-md w-full">
          {/* Contact Form */}
          <div className="rounded-2xl bg-center p-8 shadow-2xl bg-white">
            <form action="" className="grid gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-700 mb-2 font-semibold lg:text-lg text-md"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="px-4 py-3 focus:outline-none bg-gray-100 rounded-md shadow-sm hover:shadow-lg transition-shadow text-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 mb-2 font-semibold lg:text-lg text-md"
                >
                  E-Mail ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-3 focus:outline-none bg-gray-100 rounded-md shadow-sm hover:shadow-lg transition-shadow text-sm"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-gray-700 mb-2 font-semibold lg:text-lg text-md"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="px-4 py-3 focus:outline-none bg-gray-100 rounded-md shadow-sm hover:shadow-lg transition-shadow text-sm"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-gray-700 mb-2 font-semibold lg:text-lg text-md"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Tell us the Query"
                  className="px-4 py-3 min-h-[120px] focus:outline-none bg-gray-100 rounded-md shadow-sm hover:shadow-lg transition-shadow text-sm"
                  required
                ></textarea>
              </div>

              <input
                type="submit"
                value={isSubmitting ? "Sending..." : "Send Message"}
                className="text-white w-full rounded-xl py-3 font-semibold transition-transform transform lg:text-lg text-md"
                style={{
                  backgroundColor: brandColor,
                  transform: isSubmitting ? "scale(1.05)" : "scale(1)",
                }}
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>

        {/* Thank You Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
            <div
              className="bg-white rounded-xl p-8 text-center transition-transform transform scale-100"
              style={{ animation: "pop-up 0.5s ease-out forwards" }}
            >
              <h2 className="text-2xl font-semibold" style={{ color: blackki }}>
                Thank you!
              </h2>
              <p className="text-lg text-gray-700">We will contact you soon.</p>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes pop-up {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </main>
    </div>
  );
};

export default Page;
