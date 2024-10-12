"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This is where you'd add form submission logic.
    // Reset the form
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full p-7 gap-x-7">
      <div className="w-full lg:w-[50%] flex flex-col gap-y-4">
        <div>
          <h1 className="text-[25px] text-[#596277] font-bold">
            Send a message
          </h1>
          <p className="text-xs mt-2 text-[16px]">
            Just fill out the form here and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
        <div>
          <h1 className="text-[25px] text-[#596277] font-bold">Theme Xtra</h1>
          <p className="text-xs mt-2 mb-4 text-[16px]">
            Have a question? Give us a call or fill out the contact form. We&apos;d
            love to hear from you
          </p>
          <p className="text-xs mt-2 flex flex-col gap-y-2 text-[16px]">
            <span>123 Sky Tower, West 21th Street, Suite 721, NY </span>{" "}
            <span> +844 123 456 789</span>
            <span>sale@yourcompany.com</span> <span> www.example.com </span>
          </p>
        </div>
        <div className="w-full lg:w-[600px] h-[450px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3306.4646305934516!2d-118.45936400148493!3d34.03195072719271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1726665415999!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="w-full lg:w-[50%] pt-10 lg:pt-0">
        <form action="">
          {/* Name */}
          <div className="flex gap-x-5">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              placeholder="Name"
            />
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              placeholder="Phone Number"
            />
          </div>
          {/* Message */}
          <div className="relative mt-7">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-[250px] px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter your message here..."
              rows={5}
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center mt-5">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
