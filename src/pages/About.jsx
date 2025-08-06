import { useState } from 'react';
import myPhoto from '../assets/myPhoto.jpeg';

export default function About() {
  const [tab, setTab] = useState('core');
  const skills = {
    core: ["JavaScript", "React", "Node.js", "Express.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Git", "MongoDB", "VS Code", "Nginx"],
    mastering: ["TypeScript", "Firebase", "Redux", "Styled Components"],
    roadmap: ["Next.js", "GraphQL", "AWS"]
  };
  const tabTitles = { core: "Core Skills", mastering: "Currently Mastering", roadmap: "On My Roadmap" };

  return (
    <section className="min-h-screen pt-16 px-4 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white animate-soft-fade-in">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold mb-3 tracking-tight font-['Inter']">About Me</h2>
        <p className="text-base max-w-2xl mx-auto leading-relaxed font-['Roboto']">
          I am Ishwari Jamodkar, a Full-Stack Developer based in Bangalore, India. I specialize in building dynamic, scalable web applications using modern technologies such as React, Node.js, and MongoDB. 
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-soft-slide-in">
          <img
            src={myPhoto}
            alt="Ishwari Jamodkar"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-2 border-teal-200 transition transform hover:scale-105 duration-500 ease-in-out"
          />
          <div className="w-full md:w-2/3">
            <div className="flex justify-center gap-2 mb-3">
              {Object.keys(tabTitles).map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-4 py-1.5 rounded-lg font-medium text-sm transition-all duration-500 ease-in-out font-['Roboto'] border border-teal-200 ${
                    tab === key ? 'bg-[#14B8A6] text-white shadow-lg' : 'bg-transparent text-teal-200 hover:bg-[#14B8A6] hover:text-white hover:shadow-lg'
                  }`}
                >
                  {tabTitles[key]}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 animate-soft-slide-in">
              {skills[tab].map((skill, index) => (
                <span
                  key={index}
                  className="bg-teal-200 text-[#1E3A8A] px-3 py-1 rounded-lg text-sm font-medium border border-teal-300 shadow-sm transition transform hover:scale-105 hover:shadow-md duration-500 ease-in-out font-['Roboto']"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}