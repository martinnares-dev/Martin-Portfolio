import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <img src="/uploads/logo.png" alt="Logo" className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"  />

        {/* Desktop menu */}
        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.name}>
                <Link to={link.path} className="hover:text-purple-400">
                    {link.name}
                </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 bg-gray-800 px-4 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.name}>
                <Link to={link.path} className="hover:text-purple-400" onClick={() => setOpen(false)}>
                    {link.name}
                </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}