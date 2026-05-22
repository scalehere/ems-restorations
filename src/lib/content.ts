import type {
  FaqItem,
  NavLink,
  ServiceCard,
  Stat,
  TabContent,
  Testimonial,
  TrustBadge,
} from "@/types/content";

export const PHONE = "(858) 737-5254";
export const PHONE_HREF = "tel:8587375254";
export const LOCATION_NAME = "San Diego, CA";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Water Damage Restoration", href: "#water-damage" },
      { label: "Mold Remediation", href: "#mold-remediation" },
      { label: "Fire & Smoke Damage Restoration", href: "#fire-smoke" },
      { label: "Home Remodeling & Construction", href: "#remodeling" },
      { label: "Biohazard Cleanup", href: "#services" },
    ],
  },
  {
    label: "About Us",
    href: "#why-ems",
    children: [
      { label: "About Us", href: "#why-ems" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  { label: "Contact", href: "#hero-form" },
];

export const heroBullets = [
  "Over 1,000 Insurance Claims Handled",
  "Free Estimates & Quotes",
  "Licensed CA #1081134",
  "Veteran-Owned | 24/7 Emergency Response",
];

export const trustBadges: TrustBadge[] = [
  { src: "/images/badges/badge-iicrc.png", alt: "IICRC Certified Firm Badge", width: 80, height: 80 },
  { src: "/images/badges/badge-satisfaction.svg", alt: "Satisfaction Guaranteed Icon", width: 80, height: 80 },
  { src: "/images/badges/badge-google.svg", alt: "Google Guaranteed Icon", width: 220, height: 80 },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria G.",
    initial: "M",
    daysAgo: "1 week ago",
    rating: 5,
    text: "EMS Restoration handled everything after our kitchen pipe burst — insurance paperwork, drying, repairs. Zero out of pocket. They were at our house within hours and kept us informed the entire time.",
  },
  {
    name: "James T.",
    initial: "J",
    daysAgo: "2 weeks ago",
    rating: 5,
    text: "My adjuster lowballed us on a fire damage claim. EMS came in, re-documented everything, and got us nearly double the original offer. Veteran-owned and it shows — disciplined, no-nonsense, excellent work.",
  },
  {
    name: "Sandra L.",
    initial: "S",
    daysAgo: "3 weeks ago",
    rating: 5,
    text: "Found mold behind our bathroom wall after a slow leak. EMS had it fully remediated and the wall rebuilt in under a week. Insurance covered it all. These guys know how to document a claim.",
  },
  {
    name: "Robert C.",
    initial: "R",
    daysAgo: "1 month ago",
    rating: 5,
    text: "Called at 11pm after a water heater failed and flooded our garage. EMS was on site by midnight. Fast, professional, and they worked directly with our insurance company so we didn't have to deal with the hassle.",
  },
];


export const tabContents: TabContent[] = [
  {
    id: "customer-first",
    label: "Customer First",
    heading: "We Put Our Customers First",
    body: "From the first call to the final walkthrough, our team handles everything — insurance paperwork, permits, materials, and construction. You won't be chasing updates or managing subcontractors.",
    bullets: [
      "Transparent pricing — no hidden fees, no surprises",
      "Clear communication from start to finish",
      "Satisfaction guaranteed on every job",
    ],
    imageSrc: "/images/sections/hero-bg-joseph.webp",
    imageAlt: "EMS Restoration Customer First",
  },
  {
    id: "insurance-experts",
    label: "Insurance Experts",
    heading: "We Negotiate What You're Owed",
    body: "Most homeowners don't know what their insurance policy actually covers — and insurance companies won't tell them. EMS Restoration has handled over 1,000 insurance claims. We know how to document damage, build the file, and advocate for every dollar you're entitled to.",
    bullets: [
      "We handle all insurance paperwork on your behalf",
      "We document every detail to maximize your approved claim",
      "Goal: zero out-of-pocket on covered damage",
    ],
    imageSrc: "/images/tabs/tab-customer-first.jpg",
    imageAlt: "EMS Restoration Insurance Experts",
  },
  {
    id: "veteran-owned",
    label: "Veteran-Owned",
    heading: "Military Precision. Civilian Care.",
    body: "EMS Restoration is owned and operated by a U.S. Army veteran. That means discipline, accountability, and a standard of work that doesn't cut corners. When we say the job will be done right, we mean it.",
    bullets: [
      "Veteran-owned and operated",
      "Held to a higher standard — on every project",
      "We treat your home like our own",
    ],
    imageSrc: "/images/tabs/tab-veteran-owned.jpg",
    imageAlt: "EMS Restoration Veteran Owned",
  },
  {
    id: "service-excellence",
    label: "Service Excellence",
    heading: "Full Scope. One Team. One Point of Contact.",
    body: "From emergency mitigation to full reconstruction, EMS handles everything in-house. No handoffs, no gaps, no 'that's not our department.' Water damage, mold, fire — and when the restoration is done, we rebuild: kitchens, bathrooms, additions, and ADUs.",
    bullets: [
      "Emergency mitigation through full reconstruction",
      "Licensed for the full scope of work — CA #1081134",
      "One team, start to finish",
    ],
    imageSrc: "/images/tabs/tab-service-excellence.jpg",
    imageAlt: "EMS Restoration Service Excellence",
  },
];

export const stats: Stat[] = [
  { number: "1,000+", label: "Insurance Claims Handled" },
  { number: "24/7", label: "Emergency Response Available" },
  { number: "$0", label: "Out-of-Pocket Goal on Covered Claims" },
  { number: "100%", label: "Satisfaction Guaranteed" },
];

export const faqs: FaqItem[] = [
  {
    question: "How do I know if my damage is covered by insurance?",
    answer:
      "Most homeowner policies cover sudden and accidental water damage — burst pipes, appliance failures, storm intrusion — as well as fire and smoke damage. Some mold resulting from a covered event is also eligible. Don't file on your own. Call us first. We review your policy and document your damage to maximize what you recover.",
  },
  {
    question: "How fast can EMS Restoration respond?",
    answer:
      "We're available 24 hours a day, 7 days a week. For emergency calls we typically respond within hours — not days. The faster the response, the less total damage and the lower your overall restoration cost.",
  },
  {
    question: "Will I have to pay anything out of pocket?",
    answer:
      "If your damage is covered by insurance, our goal is zero out-of-pocket for you. We handle the documentation, work directly with your adjuster, and advocate for the maximum approved claim. You focus on your family. We handle the paperwork.",
  },
  {
    question: "Do you handle both the emergency restoration and the rebuilding?",
    answer:
      "Yes. EMS Restoration handles everything from the moment the call comes in — emergency mitigation, full structural drying, mold prevention, and complete reconstruction. Kitchens, bathrooms, home additions, ADUs. One team, start to finish. No handoffs.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. EMS Restoration is fully licensed in California (License #1081134), insured, and IICRC-certified. We are veteran-owned and operated.",
  },
];

export const services: ServiceCard[] = [
  {
    title: "Water Damage Restoration",
    description: "Fast response to burst pipes, appliance failures, flooding, and storm intrusion. We extract, dry, and restore — and work directly with your insurance company.",
    imageSrc: "/images/services/svc-water-damage.jpg",
    imageAlt: "EMS Restoration Water Damage Restoration",
    sectionHref: "#water-damage",
  },
  {
    title: "Fire & Smoke Damage Restoration",
    description: "Structural repairs, soot and odor elimination, contents cleaning, and full reconstruction — plus direct insurance claim support.",
    imageSrc: "/images/services/svc-fire-smoke.webp",
    imageAlt: "EMS Restoration Fire and Smoke Damage Restoration",
    sectionHref: "#fire-smoke",
  },
  {
    title: "Mold Remediation",
    description: "IICRC-certified inspection, containment, removal, and prevention. We target the moisture source so mold doesn't come back.",
    imageSrc: "/images/services/svc-mold.jpg",
    imageAlt: "EMS Restoration Mold Remediation",
    sectionHref: "#mold-remediation",
  },
  {
    title: "Kitchen Remodels",
    description: "Full kitchen remodels with the same licensed team that handles emergency restoration. One contractor, no subcontractor shuffle.",
    imageSrc: "/images/services/svc-kitchen.jpg",
    imageAlt: "EMS Restoration Kitchen Remodels",
    sectionHref: "#remodeling",
  },
  {
    title: "Bathroom Remodels",
    description: "Complete bathroom remodels — tile, fixtures, waterproofing, and finishing — handled by our in-house licensed team.",
    imageSrc: "/images/services/svc-bathroom.jpg",
    imageAlt: "EMS Restoration Bathroom Remodels",
    sectionHref: "#remodeling",
  },
  {
    title: "Home Additions",
    description: "Expand your living space with a permitted, fully built home addition. Licensed for the full scope of work under CA #1081134.",
    imageSrc: "/images/services/svc-additions.jpg",
    imageAlt: "EMS Restoration Home Additions",
    sectionHref: "#remodeling",
  },
  {
    title: "ADU Builds",
    description: "Accessory dwelling units designed, permitted, and built by our in-house team. Add rental income or family space to your property.",
    imageSrc: "/images/services/svc-adu.jpg",
    imageAlt: "EMS Restoration ADU Builds",
    sectionHref: "#remodeling",
  },
  {
    title: "Biohazard Cleanup",
    description: "Safe, discreet, and thorough biohazard and trauma scene cleanup handled by trained specialists following all regulatory standards.",
    imageSrc: "/images/services/svc-odor.webp",
    imageAlt: "EMS Restoration Biohazard Cleanup",
  },
];

export const footerColumns = [
  {
    title: "Contact Us",
    items: [
      { type: "text" as const, value: "5345 Timken St STE C, La Mesa CA 91942" },
      { type: "link" as const, label: PHONE, href: PHONE_HREF },
      { type: "link" as const, label: "Request a Free Estimate", href: "#hero-form" },
    ],
  },
  {
    title: "Services",
    items: [
      { type: "link" as const, label: "Water Damage Restoration", href: "#water-damage" },
      { type: "link" as const, label: "Mold Remediation", href: "#mold-remediation" },
      { type: "link" as const, label: "Fire & Smoke Restoration", href: "#fire-smoke" },
      { type: "link" as const, label: "Home Remodeling", href: "#remodeling" },
      { type: "link" as const, label: "Biohazard Cleanup", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { type: "link" as const, label: "About Us", href: "#why-ems" },
      { type: "link" as const, label: "Gallery", href: "#gallery" },
      { type: "link" as const, label: "Reviews", href: "#reviews" },
      { type: "link" as const, label: "Contact", href: "#hero-form" },
    ],
  },
];
