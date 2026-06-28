"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm a passionate developer creating beautiful and functional web
          experiences.
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Explore my projects, learn about my skills, and let's build something
          amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors border border-slate-600"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
