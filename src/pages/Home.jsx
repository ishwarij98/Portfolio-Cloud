import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white animate-fade-in">
      <h1 className="text-4xl font-bold mb-2 tracking-tight font-['Inter']">Ishwari Jamodkar</h1>
      <p className="text-lg mb-4 text-teal-900 font-['Roboto']">Full-Stack Developer | MERN</p>
      <p className="text-base max-w-md mx-auto mb-6 leading-relaxed font-['Roboto']">
        Crafting seamless web experiences with React, Node.js, and MongoDB. Passionate about building scalable, user-focused solutions.
      </p>
      <Link to="/about" className="bg-[#14B8A6] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0D9488] transition transform hover:scale-105 font-['Roboto']">
        Explore My Work
      </Link>
    </section>
  );
}