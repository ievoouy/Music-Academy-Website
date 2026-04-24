export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold">Music Academy</h2>
          <p className="text-gray-400 mt-3">
            Learn music from expert instructors. Guitar, Piano, Drums & Vocals.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📞 +91 XXXXX XXXXX</li>
            <li>📧 musicacademy@email.com</li>
          </ul>
        </div>

        {/* LOCATION */}
        <div>
          <h3 className="font-semibold mb-3">Our Branches</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Andheri West, Mumbai</li>
            <li>📍 Thane West</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © 2026 Music Academy. All rights reserved.
      </div>
    </footer>
  );
}