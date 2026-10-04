import CodeBackground from "../components/CodeBackground";

const interests = [
  "Networking",
  "Electronics",
  "Graphic Design",
  "Web Development",
  "Software Development",
];

const tools = ["VS Code", "Git", "GitHub", "Vercel"];

const cardClass =
  "rounded-xl border border-green-700 bg-green-950 p-6 text-left transition hover:-translate-y-1 hover:border-green-400";

export default function About() {
  return (
    <div className="relative min-h-screen text-white">
      <CodeBackground />

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-28 pb-16 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold md:text-6xl">Know Who I Am</h1>
        <p className="mt-4 text-base text-gray-300 md:text-lg">
          I am a computer programming and software technology student and am
          passionate about software development.
        </p>

        {/* Profile picture */}
        <div className="my-10 flex justify-center">
          <img
            src="/uploads/profile.jpg"
            alt="Martin Lino Llantos Nares"
            className="h-auto w-full max-w-xs rounded-xl border-4 border-purple-500 md:max-w-sm"
          />
        </div>

        {/* Intro */}
        <p className="text-lg text-white">
          I am Martin Lino Llantos Nares, a student at Southern Luzon
          Technological College Foundation, Inc.
        </p>
        <p className="mt-4 text-lg text-white">
          My journey in programming is about solving problems, creating digital
          solutions, and innovating applications. I focus on web development and
          software development.
        </p>

        {/* Education, Goals, Learning */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className={cardClass}>
            <h2 className="mb-2 text-xl font-semibold">Education</h2>
            <p className="text-gray-300">
              Southern Luzon Technological College Foundation, Inc.
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="mb-2 text-xl font-semibold">My Goals</h2>
            <p className="text-gray-300">
              I want to be a Software Engineer and develop and be the founder of
              my own Applications.
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="mb-2 text-xl font-semibold">
              What I'm Learning Now
            </h2>
            <p className="text-gray-300">I am studying Web Development.</p>
          </div>
        </section>

        {/* Interests & Hobbies */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            Interests &amp; Hobbies
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-full border border-purple-500 bg-purple-500/10 px-4 py-2 text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Tools I Use</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-green-500 bg-green-500/10 px-4 py-2 text-white"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {/* Fun facts */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Fun Facts</h2>
          <div className={`${cardClass} mx-auto max-w-2xl`}>
            <p className="text-gray-300">
              I'm an introvert but I'm willing to learn different things like
              communication skills.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}