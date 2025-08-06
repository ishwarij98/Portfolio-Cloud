import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-[#1E3A8A] dark:text-teal-300 tracking-tight">
         
        </Link>
        <ul className="flex space-x-6 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:text-teal-500 transition duration-300 ${
                  pathname === item.path ? "text-teal-600 dark:text-teal-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
