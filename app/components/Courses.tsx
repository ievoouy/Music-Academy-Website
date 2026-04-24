const courses = [
  {
    title: "Guitar",
    desc: "Learn acoustic & electric guitar from basics to advanced.",
    icon: "🎸",
  },
  {
    title: "Piano",
    desc: "Master keyboard and piano with structured lessons.",
    icon: "🎹",
  },
  {
    title: "Drums",
    desc: "Rhythm training and full drum kit sessions.",
    icon: "🥁",
  },
  {
    title: "Vocals",
    desc: "Improve singing with professional vocal coaching.",
    icon: "🎤",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-24">
    <section className="py-24 px-6 bg-white">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
        Our Courses
      </h2>

      <p className="text-center text-gray-600 mt-3">
        Choose your instrument and begin your journey
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-2xl mb-5">
              {course.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {course.desc}
            </p>

            {/* CTA */}
            <button className="mt-4 text-sm font-medium text-black group-hover:underline">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}