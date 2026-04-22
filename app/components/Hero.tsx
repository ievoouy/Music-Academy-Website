export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Learn Music from Experts
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Guitar, Piano, Drums & Vocal Training for all age groups. 
        Start your musical journey today.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Book Free Trial
        </button>

        <button className="border px-6 py-3 rounded-md">
          Explore Courses
        </button>
      </div>
    </section>
  );
}