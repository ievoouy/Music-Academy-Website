"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instrument: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Thanks! We'll contact you soon.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Start Your Musical Journey 🎵
          </h2>

          <p className="text-gray-600 mt-4">
            Join our academy and learn from expert instructors. Book your free trial class today.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ Free trial session</li>
            <li>✔ Flexible timings</li>
            <li>✔ All age groups</li>
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-4 border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            Book a Free Trial
          </h3>

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
            required
          />

          <select
            name="instrument"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
            required
          >
            <option value="">Select Instrument</option>
            <option>Guitar</option>
            <option>Piano</option>
            <option>Drums</option>
            <option>Vocals</option>
          </select>

          <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white p-3 rounded-md 
                   transition-all duration-300 ease-in-out 
                   hover:shadow-lg hover:shadow-black/50 
                   hover:from-gray-800 hover:to-black 
                   active:scale-95">
                  Book Trial
          </button>
        </form>
      </div>
      </section>
    </section>
  );
}