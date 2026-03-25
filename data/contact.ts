export const contactData = {
  hero: {
    tag: "Contact",
    title: "Get in touch",
    subtitle: "We'd love to hear from you. Whether you have a question about membership, courses, or anything else — our team is ready to help.",
  },
  info: {
    address: {
      label: "Address",
      lines: ["Greenward Golf Society", "123 Fairway Lane", "London, SW1A 1AA", "United Kingdom"],
    },
    phone: {
      label: "Phone",
      value: "+44 20 7946 0958",
      href: "tel:+442079460958",
    },
    email: {
      label: "Email",
      value: "hello@greensward.co.uk",
      href: "mailto:hello@greensward.co.uk",
    },
    hours: {
      label: "Opening hours",
      lines: ["Monday — Friday: 7:00 — 19:00", "Saturday — Sunday: 6:00 — 20:00"],
    },
  },
  form: {
    fields: [
      { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
      { name: "subject", label: "Subject", type: "text", placeholder: "What is this regarding?" },
      { name: "message", label: "Message", type: "textarea", placeholder: "Your message..." },
    ],
    button: "Send message",
  },
};