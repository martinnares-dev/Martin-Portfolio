import CodeBackground from "../components/CodeBackground";

const skills = [
  {
    name: "HTML",
    description:
      "The foundation of the web. I use it to build the structure and content of webpages.",
  },
  {
    name: "CSS",
    description:
      "For the website's style and layout, it includes responsive design to look good on any screen.",
  },
  {
    name: "JavaScript",
    description:
      "Provides interaction and logic to websites, such as buttons, menus, and dynamic content.",
  },
  {
    name: "TypeScript",
    description:
      "JavaScript with types. This helps catch errors before the code runs.",
  },
  {
    name: "React.js",
    description:
      "Library for creating user interfaces using reusable components.",
  },
  {
    name: "React.ts",
    description:
      "React combined with TypeScript for safer and cleaner component development.",
  },
  {
    name: "Node.js",
    description:
      "Runtime to run JavaScript outside the browser, used in backend and tools.",
  },
  {
    name: "Next.js",
    description:
      "React-based framework for fast, SEO-friendly, and full-stack web apps.",
  },
  {
    name: "SQL",
    description:
      "Language for storing, retrieving, and managing data in databases.",
  },
];

const progress = [
  { name: "HTML", level: 70 },
  { name: "CSS", level: 60 },
  { name: "JavaScript", level: 40 },
  { name: "TypeScript", level: 30 },
  { name: "React.js", level: 35 },
  { name: "Node.js", level: 20 },
  { name: "Next.js", level: 15 },
  { name: "SQL", level: 20 },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <CodeBackground />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16">
        {/* Hero */}
        <section className="mb-16">
          <p className="text-lg text-white">Hi, I'm</p>
          <h1 className="animate-color-cycle text-4xl font-bold md:text-6xl">
            Martin Lino Llantos Nares
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-white">
            Aspiring to be a Software Engineer.
          </p>
          <p className="mt-2 max-w-2xl text-white">
            Loves learning programming and software development. Started
            learning web development using HTML, CSS, JavaScript, TypeScript,
            React.js, React.ts, Node.js, and Next.js. I'm also trying my hand at
            C, C++, C#, Java, and Python.
          </p>
        </section>

        {/* Featured skills */}
        <section>
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Featured Skills
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-darkblue-700 bg-gray-950 p-6 transition hover:-translate-y-1 hover:border-violet-800"
                >
                <h3 className="mb-2 text-blue-800 font-semibold">{skill.name}</h3>
                <p className="text-blue-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skill progress */}
        <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Skill Progress</h2>

        <div className="space-y-6">
            {progress.map((item) => (
            <div key={item.name}>
                <div className="mb-2 flex justify-between text-white">
                <span className="font-semibold">{item.name}</span>
                <span>{item.level}%</span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div
                    className="progress-fill h-full rounded-full bg-green-500"
                    style={{ "--progress": `${item.level}%` } as React.CSSProperties}
                />
                </div>
            </div>
            ))}
        </div>
        </section>
      </main>
    </div>
  );
}