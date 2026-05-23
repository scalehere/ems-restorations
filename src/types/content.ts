export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface TrustBadge {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Testimonial {
  name: string;
  daysAgo: string;
  rating: number;
  text: string;
  avatarUrl?: string;
  initial?: string;
  location?: string;
  project?: string;
}


export interface ProcessImage {
  src: string;
  alt: string;
}

export interface TabContent {
  id: string;
  label: string;
  heading: string;
  body: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sectionHref?: string;
  remodelSectionHref?: string;
  cardId?: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
