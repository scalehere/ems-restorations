import { ChevronRightIcon } from "@/components/icons";

export function Breadcrumb() {
  return (
    <nav className="bg-white border-b border-border/60" aria-label="Breadcrumb">
      <ol className="mx-auto max-w-[1200px] px-6 py-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <a href="#" className="hover:text-cyan transition">Home</a>
        </li>
        <li className="opacity-60"><ChevronRightIcon className="w-3 h-3" /></li>
        <li>
          <a href="#" className="hover:text-cyan transition">Residential</a>
        </li>
        <li className="opacity-60"><ChevronRightIcon className="w-3 h-3" /></li>
        <li className="text-navy font-medium">Restoration Services</li>
      </ol>
    </nav>
  );
}
