const features = [
  {
    title: "Experienced Instructors",
    desc: "Learn from professionals with years of teaching and performance experience.",
  },
  {
    title: "Flexible Timings",
    desc: "Classes available on weekdays and weekends to fit your schedule.",
  },
  {
    title: "All Age Groups",
    desc: "Courses designed for kids, beginners, and advanced learners.",
  },
  {
    title: "Performance Opportunities",
    desc: "Showcase your skills in live events and recitals.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
        Why Choose Us
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Discover the difference that expert guidance and flexible learning make.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}   
