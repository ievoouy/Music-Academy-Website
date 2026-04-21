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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="instrument" placeholder="Instrument" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}