export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerData = {
  brand: {
    name: "GREENSWARD",
    trademark: true,
    subtitle: "Est. 1897 — Golf Society",
    copyright: "2026 © Greensward. All rights reserved",
    location: "London, UK",
  },
  columns: [
    {
      title: "Club",
      links: [
        { label: "About", href: "/about" },
        { label: "History", href: "/history" },
        { label: "Membership", href: "/membership" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Courses",
      links: [
        { label: "North Ground", href: "/courses/north" },
        { label: "South Meadow", href: "/courses/south" },
        { label: "West Links", href: "/courses/west" },
      ],
    },
    {
      title: "Visitors",
      links: [
        { label: "Green Fees", href: "/green-fees" },
        { label: "Dress Code", href: "/dress-code" },
        { label: "Book a Round", href: "/book" },
      ],
    },
    {
      title: "Follow",
      links: [
        { label: "Instagram", href: "https://instagram.com", external: true },
        { label: "Facebook", href: "https://facebook.com", external: true },
        { label: "YouTube", href: "https://youtube.com", external: true },
      ],
    },
  ] as FooterColumn[],
  legal: [
    { label: "Cookie", href: "/cookies" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};