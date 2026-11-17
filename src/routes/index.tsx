import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BrainCircuit, Sparkles, HeartHandshake } from "lucide-react";

import { HeadshotPlaceholder } from "@/components/headshot-placeholder";
import bouquet from "@/assets/flowers-bouquet.png";
import sprig from "@/assets/flower-sprig.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "About · AI Researcher & Founder of While She is True" },
      {
        name: "description",
        content:
          "Meet the AI researcher and founder behind While She is True — research, leadership and a mission for women in tech.",
      },
      { property: "og:title", content: "About · AI Researcher & Founder of While She is True" },
      {
        property: "og:description",
        content: "AI researcher and founder of While She is True. Research, community and building with care.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const focus = [
  { icon: BrainCircuit, label: "Responsible AI" },
  { icon: Sparkles, label: "Human-centred ML" },
  { icon: HeartHandshake, label: "Women in tech" },
];

function Index() {
  return (
    <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 md:grid-cols-6">
      {/* Intro */}
      <section className="bento bento-lavender animate-rise md:col-span-4 md:row-span-2 flex flex-col justify-between gap-10 p-8 sm:p-10">
        <span className="eyebrow text-violet">AI Researcher · Founder</span>
        <div>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-plum sm:text-5xl">
            Building AI that is <span className="text-violet">kind</span>, curious and true.
          </h1>
          <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            I research how intelligent systems can be fair and trustworthy, and I founded{" "}
            <span className="font-medium text-plum">While She is True</span> to help more women shape
            the future of technology.
          </p>
        </div>
        <img
          src={sprig}
          alt=""
          width={984}
          height={291}
          className="pointer-events-none absolute -right-8 top-8 w-48 opacity-80 sm:w-72"
        />
      </section>

      {/* Headshot */}
      <section
        className="bento animate-rise md:col-span-2 md:row-span-2 p-3"
        style={{ animationDelay: "80ms" }}
      >
        <HeadshotPlaceholder className="min-h-80" />
      </section>

      {/* About */}
      <section
        className="bento animate-rise md:col-span-3"
        style={{ animationDelay: "140ms" }}
      >
        <span className="eyebrow text-violet">About me</span>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          My work sits where machine learning meets people. I study how models learn, where they fall
          short, and how to design them so they serve everyone. Outside the lab, I mentor, speak and
          build community.
        </p>
      </section>

      {/* Focus */}
      <section
        className="bento bento-lilac animate-rise md:col-span-3"
        style={{ animationDelay: "200ms" }}
      >
        <span className="eyebrow">Focus areas</span>
        <ul className="mt-4 flex flex-wrap gap-2">
          {focus.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-plum"
            >
              <Icon className="size-4 text-violet" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Founder */}
      <section
        className="bento bento-violet animate-rise md:col-span-2 flex min-h-56 flex-col justify-between"
        style={{ animationDelay: "260ms" }}
      >
        <span className="eyebrow opacity-80">Founder</span>
        <div>
          <p className="text-2xl font-semibold leading-snug">While She is True</p>
          <p className="mt-2 text-sm font-light opacity-85">
            A community empowering women to learn, lead and build in AI.
          </p>
        </div>
      </section>

      {/* Flowers */}
      <section
        className="bento bento-lavender animate-rise md:col-span-2 flex min-h-56 items-end justify-center p-0"
        style={{ animationDelay: "320ms" }}
      >
        <img
          src={bouquet}
          alt="Watercolor lavender and violet bouquet"
          width={480}
          height={972}
          loading="lazy"
          className="animate-sway h-52 w-auto translate-y-4"
        />
      </section>

      {/* Links */}
      <div
        className="animate-rise grid gap-4 md:col-span-2"
        style={{ animationDelay: "380ms" }}
      >
        <Link to="/projects" className="bento bento-hover group flex items-center justify-between">
          <span>
            <span className="eyebrow block text-violet">Explore</span>
            <span className="mt-1 block text-lg font-semibold text-plum">Projects</span>
          </span>
          <ArrowUpRight className="size-5 text-violet transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        <Link to="/contact" className="bento bento-hover group flex items-center justify-between">
          <span>
            <span className="eyebrow block text-violet">Say hello</span>
            <span className="mt-1 block text-lg font-semibold text-plum">Contact</span>
          </span>
          <ArrowUpRight className="size-5 text-violet transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
