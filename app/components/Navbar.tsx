"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
      <h1 className="text-xl font-bold">Music Academy</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-md">
        Book Trial
      </button>
    </nav>
  );
}