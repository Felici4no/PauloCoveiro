import { credits, person } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-16 text-paper md:pb-0">
      <div className="grid-frame meta gap-y-3 py-6">
        <p className="col-span-2 font-medium md:col-span-4">{person.name}</p>
        <p className="col-span-2 text-right md:col-span-2 md:col-start-6 md:text-left">
          © {new Date().getFullYear()}
        </p>
        <p className="col-span-4 text-paper/55 md:col-span-4 md:col-start-9 md:text-right">
          Designed &amp; coded by {credits.studio}
        </p>
      </div>
    </footer>
  );
}
