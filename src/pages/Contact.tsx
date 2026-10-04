import { useState, type ChangeEvent, type FormEvent } from "react";
import { MdEmail } from "react-icons/md";
import CodeBackground from "../components/CodeBackground";
import { email, socials } from "../data/socials";

const inputClass =
  "w-full rounded-lg border border-green-700 bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-green-400";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="relative min-h-screen text-white">
      <CodeBackground />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          Get In Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300 md:text-lg">
          Have a question, a project, or just want to get to know each other? Send a message and I'll get back to you as soon as possible.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact info */}
          <section className="rounded-xl border border-green-700 bg-green-950 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Contact Info</h2>

            <a
              href={`mailto:${email}`}
              className="mb-8 flex items-center gap-3 text-gray-300 transition hover:text-purple-400"
            >
              <MdEmail className="text-2xl" />
              <span>{email}</span>
            </a>

            <h3 className="mb-4 text-lg font-semibold">Find me on</h3>
            <ul className="space-y-4">
              {socials
                .filter((s) => s.name !== "Email")
                .map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 transition hover:text-purple-400"
                    >
                      <Icon className="text-2xl" />
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </section>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-green-700 bg-green-950 p-6"
          >
            <h2 className="text-2xl font-semibold">Send a Message</h2>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}