import {
  PanelTop,
  PanelLeft,
  LogIn,
  ListChecks,
  Calculator,
  CloudSun,
  Rocket,
  Palette,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import CodeBackground from "../components/CodeBackground";

type Project = {
  name: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
  image?: string; 
};

const projects: Project[] = [
  {
    name: "Personal Portfolio",
    description:
      "This website itself. A multi-page portfolio with animated backgrounds, skill progress bars, and responsive design.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    icon: Briefcase,
    gradient: "from-purple-600 to-indigo-900",
  },
  {
    name: "Navbar Project",
    description:
      "A responsive navigation bar that changes shape depending on the screen size, with hover effects on links.",
    tags: ["HTML", "CSS"],
    icon: PanelTop,
    gradient: "from-blue-600 to-cyan-900",
  },
  {
    name: "Sidebar Project",
    description:
      "A side navigation menu with links and icons, easy to use on dashboards and admin pages.",
    tags: ["HTML", "CSS"],
    icon: PanelLeft,
    gradient: "from-teal-600 to-emerald-900",
  },
  {
    name: "Login Page",
    description:
      "A login page modeled after Facebook's design, to practice forms, layout, and element arrangement.",
    tags: ["HTML", "CSS"],
    icon: LogIn,
    gradient: "from-sky-600 to-blue-900",
  },
  {
    name: "To-Do List App",
    description:
      "An app to add, mark as done, and delete tasks, to keep track of what needs to be completed.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: ListChecks,
    gradient: "from-green-600 to-green-900",
  },
  {
    name: "Calculator",
    description:
      "A simple calculator that can do addition, subtraction, multiplication, and division using buttons.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Calculator,
    gradient: "from-slate-600 to-gray-900",
  },
  {
    name: "Weather App",
    description:
      "An app that displays the weather conditions of a location, using data from a weather API.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    icon: CloudSun,
    gradient: "from-amber-500 to-orange-800",
  },
  {
    name: "Landing Page",
    description:
      "A modern landing page with a hero section, features, and a call-to-action to introduce a product or service.",
    tags: ["HTML", "CSS"],
    icon: Rocket,
    gradient: "from-rose-600 to-red-900",
  },
  {
    name: "Graphic Design Works",
    description:
      "A collection of design creations such as posters and logos, which demonstrate my interest in graphic design.",
    tags: ["Graphic Design"],
    icon: Palette,
    gradient: "from-fuchsia-600 to-purple-900",
  },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen text-white">
      <CodeBackground />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          My Projects
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300 md:text-lg">
          My work while learning programming and web development.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.name}
                className="overflow-hidden rounded-xl border border-green-700 bg-green-950 transition hover:-translate-y-1 hover:border-green-400"
              >
                {/* image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-44 w-full object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                  >
                    <Icon className="h-16 w-16 text-white/90" strokeWidth={1.5} />
                  </div>
                )}

                {/* Details */}
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
                  <p className="mb-4 text-gray-300">{project.description}</p>

                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-green-500 bg-green-500/10 px-3 py-1 text-sm text-white"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}