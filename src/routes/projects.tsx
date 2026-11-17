import { createFileRoute } from "@tanstack/react-router";
import sprig from "@/assets/flower-sprig.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects · AI Researcher & Founder of While She is True" },
      {
        name: "description",
        content: "Selected AI research, community programs and products from the founder of While She is True.",
      },
      { property: "og:title", content: "Projects · While She is True Founder" },
      {
        property: "og:description",
        content: "AI research, community programs and products — a selection of recent work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    tag: "Founder",
    title: "While She is True",
    text: "A community and learning platform helping women step into AI research and leadership.",
    span: "md:col-span-4",
    tone: "bento-violet",
  },
  {
    tag: "Research",
    title: "Fairness in language models",
    text: "Measuring and reducing bias in how models describe people.",
    span: "md:col-span-2",
    tone: "bento-lilac",
  },
  {
    tag: "Research",
    title: "Explainable ML",
    text: "Tools that make model decisions readable for non-experts.",
    span: "md:col-span-2",
    tone: "",
  },
  {
    tag: "Mentorship",
    title: "AI mentoring circles",
    text: "Small cohorts pairing early-career women with researchers.",
    span: "md:col-span-2",
    tone: "bento-lavender",
  },
  {
    tag: "Talks",
    title: "Speaking & workshops",
    text: "Keynotes and hands-on sessions on trustworthy AI.",
    span: "md:col-span-2",
    tone: "",
  },
];

function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      <header className="bento bento-lavender animate-rise md:col-span-6 flex min-h-48 flex-col justify-end p-8 sm:p-10">
        <span className="eyebrow text-violet">Selected work</span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Projects</h1>
        <img
          src={sprig}
          alt=""
          width={984}
          height={291}
          className="pointer-events-none absolute -right-8 top-6 w-56 opacity-80 sm:w-80"
        />
      </header>

      {projects.map((p, i) => (
        <article
          key={p.title}
          className={`bento animate-rise flex min-h-52 flex-col justify-between ${p.tone} ${p.span}`}
          style={{ animationDelay: `${80 + i * 60}ms` }}
        >
          <div>
            <span
              className={`eyebrow ${p.tone === "bento-violet" ? "opacity-80" : "text-violet"}`}
            >
              {p.tag}
            </span>
          </div>
          <div>
            <h2
              className={`text-xl font-semibold ${p.tone === "bento-violet" ? "" : "text-plum"}`}
            >
              {p.title}
            </h2>
            <p
              className={`mt-2 max-w-md text-sm font-light leading-relaxed ${
                p.tone === "bento-violet" ? "opacity-85" : "text-muted-foreground"
              }`}
            >
              {p.text}
            </p>
          </div>
        </article>
      ))}

    </div>
  );
}
