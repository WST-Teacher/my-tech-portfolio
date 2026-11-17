import { UserRound } from "lucide-react";

export function HeadshotPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Headshot placeholder"
      className={`headshot-frame flex h-full min-h-64 w-full flex-col items-center justify-center gap-3 rounded-3xl text-violet ${className}`}
    >
      <span className="grid size-16 place-items-center rounded-full bg-card shadow-sm">
        <UserRound className="size-8" strokeWidth={1.5} />
      </span>
      <span className="eyebrow text-plum/70">Your headshot here</span>
    </div>
  );
}
