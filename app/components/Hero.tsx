export default function Hero() {
  return (
    <section id = "#home" className="scroll-mt-24">
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Subtle Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
        Master the Art of{" "}
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Music
        </span>
      </h1>

      <p className="mt-6 text-gray-300 max-w-xl text-lg">
        Learn Guitar, Piano, Drums & Vocals from expert instructors. 
        Start your musical journey with us today.
      </p>

      <div className="mt-8 flex gap-4">
        <a
    href="#contact"
    className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition"
  >
    Book Free Trial
  </a>

        <a
    href="#courses"
    className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition"
  >
    Explore Courses
  </a>
      </div>
    </section>
    </section>
  );
}