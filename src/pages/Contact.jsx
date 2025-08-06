import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/ishwarij98/",
      label: "github.com/ishwarij98",
      icon: <Github className="w-5 h-5 mr-2 text-[#1E3A8A] dark:text-teal-300" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ishwarijamodkar08ij",
      label: "linkedin.com/in/ishwarijamodkar08ij",
      icon: <Linkedin className="w-5 h-5 mr-2 text-[#1E3A8A] dark:text-teal-300" />,
    },
    {
      name: "Email",
      url: "mailto:ishwarijamodkar08@gmail.com",
      label: "ishwarijamodkar08@gmail.com",
      icon: <Mail className="w-5 h-5 mr-2 text-[#1E3A8A] dark:text-teal-300" />,
    },
  ];

  return (
    <section className="min-h-screen pt-20 pb-16 px-4 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold tracking-tight font-['Inter']">Contact Me</h2>
        <p className="text-md md:text-lg text-white/80 font-['Roboto']">
          Feel free to connect with me through any of the platforms below.
        </p>

        <div className="grid gap-6 md:grid-cols-1 animate-soft-slide-in">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : "_self"}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#111827] rounded-xl shadow-md border border-teal-200 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 group"
            >
              <span className="flex items-center text-base font-medium text-[#1E3A8A] dark:text-teal-200">
                {link.icon}
                {link.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:underline">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
