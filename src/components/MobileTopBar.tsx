import { AlertIcon, PhoneIcon } from "@/components/icons";
import { PHONE_HREF } from "@/lib/content";

export function MobileTopBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] grid grid-cols-3 bg-navy text-white text-[11px] font-semibold tracking-wide uppercase">
      <a
        href={PHONE_HREF}
        className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-cyan text-white hover:brightness-95 transition"
      >
        <PhoneIcon className="w-4 h-4" />
        <span className="leading-tight text-center">Call Now</span>
      </a>
      <a
        href="#hero-form"
        className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-navy hover:bg-navy-light transition border-x border-white/10"
      >
        <span className="leading-tight text-center">Book Online</span>
      </a>
      <a
        href={PHONE_HREF}
        className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#b91c1c] hover:bg-[#9b1414] transition"
      >
        <AlertIcon className="w-4 h-4" />
        <span className="leading-tight text-center">24/7 Emergency</span>
      </a>
    </div>
  );
}
