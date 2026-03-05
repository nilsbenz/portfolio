import { Loader2Icon, PlayIcon } from "lucide-react";

const targetDate = new Date("2026-03-13" + "T00:00:00+01:00");

export default function Secret() {
  const daysUntilTargetDate = Math.max(
    0,
    Math.ceil((targetDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
  );

  if (daysUntilTargetDate > 0) {
    return (
      <div className="text-muted-foreground flex grow flex-col items-center justify-center gap-3">
        <Loader2Icon
          className="size-5 animate-spin opacity-50"
          strokeWidth={2.5}
        />
        <p className="font-medium">
          No {daysUntilTargetDate} {daysUntilTargetDate > 1 ? "Täg" : "Tag"}{" "}
          warta...
        </p>
      </div>
    );
  }

  return (
    <div className="-mx-2 flex grow flex-col justify-center">
      <div className="relative isolate overflow-clip rounded-xl">
        <div className="bg-muted absolute inset-0 -z-10 grid animate-pulse place-items-center">
          <PlayIcon className="text-muted-foreground size-8" strokeWidth={3} />
        </div>
        <iframe
          src="https://www.youtube.com/embed/qcQbXdfDvu0"
          title="Sommer '23"
          allow="encrypted-media; gyroscope"
          frameBorder={0}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
