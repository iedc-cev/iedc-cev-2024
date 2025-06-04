'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Template from './Template';

const semesters = ['S3', 'S5', 'S7', 'None'];
const departments = ['MCA', 'DIPLOMA', 'CSE', 'ECE', 'EEE', 'CE', 'IT'];

const EventsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    semester: '',
    mobileNo: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbz2Y1QH7-P7g7VxUXiROkTlXuh8YunZmpcIO3DkO6BgKNsLx6iE_fvCEJmP5MC6PetPow/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("Form submitted successfully!");
      setFormData({ name: "", department: "", semester: "", mobileNo: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("Submission failed. Try again.");
    }
  };

  return (
    <Template>
      <main className="min-h-screen w-full text-white">
        <div className="flex flex-row md:flex-row">
          <div className="bg-[#fefefe] min-h-screen w-full md:w-1/2 flex items-center justify-center p-6 text-gray-900">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[650px] p-8 space-y-6"
            >
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-[#2a64c8]">Register </span>for the Event
              </h1>
              <p className="text-gray-500">
                Great to see you participating! Stay excited and make the most of the event!
              </p>

              <div>
                <label htmlFor="name" className="block mb-1 text-[#2451a0]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Micheal Jackson"
                  className="w-full p-2 rounded text-black border hover:border-[#2453a0] shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="department" className="block mb-1 text-[#2451a0]">Department</label>
                <select
                  name="department"
                  id="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full p-2 rounded text-black border hover:border-[#2453a0] shadow-sm"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="semester" className="block mb-1 text-[#2451a0]">Semester</label>
                <select
                  name="semester"
                  id="semester"
                  required
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full p-2 rounded text-black border hover:border-[#2453a0] shadow-sm"
                >
                  <option value="">Select Semester</option>
                  {semesters.map((sem, idx) => (
                    <option key={idx} value={sem}>{sem}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mobileNo" className="block mb-1 text-[#2451a0]">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNo"
                  id="mobileNo"
                  required
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="1234567890"
                  className="w-full p-2 rounded text-black border hover:border-[#2453a0] shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-[#2451a0] text-[#fefefe] px-6 py-2 rounded hover:bg-[#1d8ce1] transition font-medium"
              >
                Submit
              </button>

              {status && <p className="text-sm text-[#1c2c81]">{status}</p>}

              <div className="text-gray-500">
                <p className="text-xl text-[#1c2c81]">Important Information</p>
                <p className="text-md">Please wait until link will be provided</p>
              </div>
            </form>
          </div>

          <div className="hidden md:block md:w-1/2 h-[100vh] relative">
            <Image
              src="/images/town.jpg"
              alt="Event Banner"
              fill
              className="object-cover brightness-[0.75]"
              priority
            />
          </div>
        </div>
      </main>
    </Template>
  );
};

export default EventsForm;
