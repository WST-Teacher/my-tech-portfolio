import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Mail, Github } from "lucide-react";

import bouquet from "@/assets/flowers-bouquet.png";
import sprig from "@/assets/flower-sprig.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · AI Researcher & Founder of While She is True" },
      {
        name: "description",
        content: "Get in touch about research collaborations, speaking or While She is True partnerships.",
      },
      { property: "og:title", content: "Contact · While She is True Founder" },
      {
        property: "og:description",
        content: "Reach out for research collaborations, talks and partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com" },
  { icon: Github, label: "GitHub", value: "See my code", href: "https://github.com" },
];

function Contact() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      <section className="bento bento-lavender animate-rise md:col-span-4 md:row-span-2 flex min-h-80 flex-col justify-between gap-8 p-8 sm:p-10">
        <span className="eyebrow text-violet">Contact</span>
        <div>
          <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight text-plum sm:text-5xl">
            Let's build something <span className="text-violet">true</span> together.
          </h1>
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Open to research collaborations, speaking invitations and partnerships with While She is
            True.
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

      <a
        href="mailto:hello@whilesheistrue.com"
        className="bento bento-violet bento-hover animate-rise group md:col-span-2 flex min-h-40 flex-col justify-between"
        style={{ animationDelay: "80ms" }}
      >
        <div className="flex items-center justify-between">
          <Mail className="size-6" strokeWidth={1.5} />
          <ArrowUpRight className="size-5 opacity-80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <div>
          <span className="eyebrow opacity-80">Email</span>
          <p className="mt-1 break-all text-lg font-medium">hello@whilesheistrue.com</p>
        </div>
      </a>

      <div
        className="bento bento-lavender animate-rise md:col-span-2 flex min-h-40 items-end justify-center p-0"
        style={{ animationDelay: "140ms" }}
      >
        <img
          src={bouquet}
          alt="Watercolor lavender bouquet"
          width={480}
          height={972}
          loading="lazy"
          className="animate-sway h-40 w-auto translate-y-3"
        />
      </div>

      {channels.map(({ icon: Icon, label, value, href }, i) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bento bento-hover animate-rise group md:col-span-3 flex items-center justify-between"
          style={{ animationDelay: `${200 + i * 60}ms` }}
        >
          <span className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-2xl bg-lavender text-violet">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <span>
              <span className="eyebrow block text-violet">{label}</span>
              <span className="mt-1 block font-medium text-plum">{value}</span>
            </span>
          </span>
          <ArrowUpRight className="size-5 text-violet transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}
