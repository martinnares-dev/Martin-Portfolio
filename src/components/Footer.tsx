import { Link } from "react-router-dom";
import { socials } from "../data/socials";



export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/uploads/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-purple-500 object-cover"
          />
        </Link>

        {/* Copyright */}
        <p className="text-center text-sm text-white">
          © 2026 Martin Lino Llantos Nares All rights reserved.
        </p>

        {/* Social links */}
        <ul className="flex gap-5">
          {socials.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-2xl text-white transition hover:text-purple-400"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}