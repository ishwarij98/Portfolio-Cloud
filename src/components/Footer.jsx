import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-8 mt-24 text-white">
      <div className="max-w-7xl mx-auto text-center text-sm px-4 space-y-4">
        <p className="tracking-tight font-medium">
          &copy; {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Ishwari Jamodkar</span> • All rights reserved
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ishwarij98"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-teal-400 transition duration-300"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ishwarijamodkar08ij"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-teal-400 transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
