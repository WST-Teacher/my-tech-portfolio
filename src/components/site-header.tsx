import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
      <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-plum">
        <span className="grid size-9 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          WST
        </span>
        <span className="hidden sm:inline">While She is True</span>
      </Link>
      <nav className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-plum"
            activeProps={{ className: "bg-lavender text-plum font-medium" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-4 text-center text-xs text-muted-foreground sm:px-8">
      © {new Date().getFullYear()} · AI Researcher & Founder of While She is True
    </footer>
  );
}
