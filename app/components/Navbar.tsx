"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
            <h1 className="text-xl font-bold">Music Academy</h1>

            <div className="flex gap-6">
                <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                <a href="#courses" className="text-gray-300 hover:text-white">Courses</a>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>

            <a
                href="#contact"
                className="bg-black text-white px-4 py-2 rounded-md"
            >
                Book Trial
            </a>
        </nav>
    );
}