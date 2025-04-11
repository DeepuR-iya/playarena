import { Example } from "./Form";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Phone, User, Users } from "lucide-react";

const FormEvents = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    members: "",
    date: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="sm:h-[70vh] h-[150vh]  overflow-hidden w-full bg-[#1a1a1d] sm:pt-0 pt-5 flex sm:flex-row flex-col  jsm:ustify-around items-center">
      <div className="sm:w-4/7 w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold font-raj mb-6 text-center text-white">
          Slot Booking 🎟️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 w-3/4">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
            <User className="text-black mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
            <Phone className="text-black mr-3" />
            <input
              type="tel"
              name="number"
              placeholder="Mobile Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
            <Users className="text-black mr-3" />
            <input
              type="number"
              name="members"
              placeholder="Number of Members"
              min="1"
              value={formData.members}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>

          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
              <CalendarDays className="text-black mr-3" />
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                placeholderText="Select Date"
                dateFormat="MMMM d, yyyy"
                className="w-full bg-transparent outline-none text-gray-800"
                calendarClassName="absolute z-50 mt-2"
                popperPlacement="bottom-start"
                showPopperArrow={false}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      <div className="sm:w-1/2 relative sm:-top-25 right-18 top-5">
        <Example />
      </div>
    </div>
  );
};

export default FormEvents;
