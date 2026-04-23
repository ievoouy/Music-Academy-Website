const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Guitar Student",
    text: "Amazing experience! The guitar classes helped me improve so quickly.",
  },
  {
    name: "Priya Mehta",
    role: "Vocal Student",
    text: "Very friendly instructors and flexible timings. Highly recommended!",
  },
  {
    name: "Aarav Patel",
    role: "Piano Student",
    text: "Loved the piano sessions. Great teaching style and environment.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        What Our Students Say 🎵
      </h2>

      <p className="text-center text-gray-400 mt-3">
        Real experiences from our learners
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:scale-105 transition"
          >
            {/* Quote */}
            <p className="text-gray-200 leading-relaxed">
              “{t.text}”
            </p>

            {/* Divider */}
            <div className="h-px bg-white/10 my-4"></div>

            {/* Name */}
            <h4 className="font-semibold text-white">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}