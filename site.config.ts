import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Ruleboy Cutz",
  tagline: "Professional barber in Brampton. Fresh fades, tapers, and cuts that boost confidence.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Brampton, ON",
  siteUrl: "https://ruleboycutz.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c9a45c" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton barber",
    headline: "Stay fresh. Book a cut.",
    subhead:
      "Fades, tapers, and clean lineups from a professional barber in Brampton. Tap the link to book, or send a DM to grab a spot.",
    images: [
      { src: "/images/post-8.jpg", alt: "Fresh braids and fade by Ruleboy Cutz", width: 720, height: 960 },
      { src: "/images/post-6.jpg", alt: "Fade in progress at the chair", width: 640, height: 1136 },
      { src: "/images/post-7.jpg", alt: "Mid fade lineup finished cut", width: 640, height: 1136 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Professional barber in Brampton",
    "Fades, tapers, and lineups",
    "Book via the link in bio",
    "Helping boost confidence",
  ],

  about: {
    title: "Cuts that boost confidence",
    body: [
      "Ruleboy Cutz is a professional barber based in Brampton, Ontario. From sharp fades and tapers to clean lineups, every cut is focused on helping you look and feel your best.",
      "Ready for a fresh cut? Use the booking link or send a DM and we will get you in the chair.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Client getting a fade at Ruleboy Cutz", width: 640, height: 1136 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Classic barber work. Ask in your DM or when you book for current pricing.",
    variant: "list",
    showPrices: false,
    priceNote: "Message or book to confirm pricing for your cut.",
    groups: [
      {
        title: "Cuts",
        items: [
          { name: "Haircuts" },
          { name: "Fades" },
          { name: "Tapers" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      { src: "/images/post-8.jpg", width: 720, height: 960, alt: "Braids with sharp fade and beard lineup", caption: "Low or high taper?", href: "https://www.instagram.com/p/DP4wuXlEbJt/" },
      { src: "/images/post-6.jpg", width: 640, height: 1136, alt: "Fade cut in progress", caption: "Ruleboy Cutz effect", href: "https://www.instagram.com/p/DSXcpTAkZXq/" },
      { src: "/images/post-7.jpg", width: 640, height: 1136, alt: "Fresh mid fade", caption: "Fresh fade", href: "https://www.instagram.com/p/DQCWH4TDNdu/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "Barbershop chair ready for walk ins", caption: "Spots open", href: "https://www.instagram.com/p/DeP8_psRjgi/" },
      { src: "/images/post-5.jpg", width: 720, height: 1280, alt: "Client consult in the shop", caption: "In the chair", href: "https://www.instagram.com/p/DeM2QmCt4RG/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Stay fresh lifestyle", caption: "Stay fresh", href: "https://www.instagram.com/p/DeVAfMsj3AH/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "ruleboycutz",
    embeds: [
      "https://www.instagram.com/p/DeVAfMsj3AH/",
      "https://www.instagram.com/p/DP4wuXlEbJt/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your cut",
    intro: "Use the booking link, or send a DM on Instagram. Tap the button to copy a starter message.",
    dmMessage:
      "Hi Ruleboy Cutz! I would like to book a cut.\nPreferred date:\nPreferred time:\nStyle (fade, taper, lineup, other):\nNotes:",
    links: [
      { label: "Book via Linktree", href: "https://linktr.ee/ruleboyy" },
    ],
    note: "A few spots fill fast on weekends. Book early when you can.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the Linktree booking link, or send a DM on Instagram with your preferred date and style." },
    { q: "Where are you based?", a: "Ruleboy Cutz is a professional barber in Brampton, Ontario." },
    { q: "What styles do you do?", a: "Haircuts, fades, and tapers. Tell us what you want when you book." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    email: "ruleboycutz@gmail.com",
    socials: [{ label: "Linktree", href: "https://linktr.ee/ruleboyy" }],
  },

  seo: {
    title: "Ruleboy Cutz | Barber in Brampton",
    description:
      "Professional barber in Brampton, ON. Fades, tapers, and clean cuts. Book via Linktree or Instagram DM.",
    keywords: [
      "Brampton barber",
      "GTA barber",
      "fades Brampton",
      "Ruleboy Cutz",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
