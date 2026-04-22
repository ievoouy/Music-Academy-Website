const courses = [
  {
    title: "Guitar",
    desc: "Learn acoustic & electric guitar from basics to advanced.",
  },
  {
    title: "Piano",
    desc: "Master keyboard and piano with structured lessons.",
  },
  {
    title: "Drums",
    desc: "Rhythm training and full drum kit sessions.",
  },
  {
    title: "Vocals",
    desc: "Improve singing with professional vocal coaching.",
  },
];

export default function Courses() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Courses
      </h2>

      <p className="text-center text-gray-600 mt-3">
        Choose your instrument and start learning today
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl hover:shadow-lg transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.desc}</p>

            <button className="mt-4 text-sm font-medium underline">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}