import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ChevronDownIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronRightIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function StarIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.91.36 1.81.68 2.66a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.42-1.21a2 2 0 0 1 2.11-.45c.85.32 1.75.55 2.66.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MenuIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function SearchIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function MapPinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22 6 12 13 2 6" />
    </svg>
  );
}

export function ClockIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function AlertIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.5 18.5v-7h-3v7zM7 10.3a1.78 1.78 0 1 0 0-3.56 1.78 1.78 0 0 0 0 3.56zM18.5 18.5v-3.85c0-2-1.07-2.93-2.5-2.93a2.16 2.16 0 0 0-1.94 1.07v-.92h-3v7h3v-3.78a1.4 1.4 0 0 1 1.4-1.5c.77 0 1.04.59 1.04 1.49v3.79z" />
    </svg>
  );
}

export function YoutubeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6z" />
    </svg>
  );
}

export function ArrowRightIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
