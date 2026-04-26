"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instrument: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    setError("");

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Thanks! We'll contact you soon.");
      setFormData({ name: "", phone: "", instrument: "" });
    }
  };

  return (
    <section id="contact" className={styles.sectionWrapper}>
      <section className={styles.outerSection}>
        <div className={styles.container}>

          {/* LEFT */}
          <div>
            <h2 className={styles.heading}>
              Start Your Musical Journey 🎵
            </h2>

            <p className={styles.subtext}>
              Join our academy and learn from expert instructors. Book your free trial class today.
            </p>

            <ul className={styles.list}>
              <li>✔ Free trial session</li>
              <li>✔ Flexible timings</li>
              <li>✔ All age groups</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className="text-xl font-semibold text-gray-900">Book a Free Trial</h3>

            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <select
              name="instrument"
              value={formData.instrument}
              onChange={handleChange}
              className={styles.input}
              required
            >
              <option value="">Select Instrument</option>
              <option>Guitar</option>
              <option>Piano</option>
              <option>Drums</option>
              <option>Vocals</option>
            </select>

            <button className={styles.button}>
              Book Trial
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}