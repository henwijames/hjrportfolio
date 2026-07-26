import pos1 from "../assets/pos1.png";
import pos2 from "../assets/pos2.png";
import pos3 from "../assets/pos3.png";
import pos4 from "../assets/pos4.png";

import drivers1 from "../assets/drivers1.png";
import drivers2 from "../assets/drivers2.png";
import drivers3 from "../assets/drivers3.png";
import drivers4 from "../assets/drivers4.png";

import icook1 from "../assets/icook1.png";
import icook2 from "../assets/icook2.png";
import icook3 from "../assets/icook3.png";

export const PROJECTS_DATA = [
  {
    id: "salon-pos",
    title: "Salon POS & CRM System",
    subtitle: "Enterprise Point-of-Sale with WhatsApp Integration",
    category: "Full Stack / Enterprise",
    period: "2025",
    company: "Erick Trading Co. L.L.C",
    location: "Sharjah, UAE",
    summary:
      "A multi-branch Point of Sale system serving over 40 salons with real-time inventory management, client loyalty CRM, and WhatsApp Integration.",
    coverImage: pos1,
    images: [pos1, pos2, pos3, pos4],
    tags: [
      "Next.js",
      "Express.js",
      "Prisma",
      "Typescript",
      "MySQL",
      "WhatsApp API",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    highlights: [
      "Integrated automated WhatsApp API for appointment reminders and receipt dispatch.",
      "Synchronized real-time sales tracking across 40 distinct salon branches.",
      "Architected role-based authentication and cashier shift management modules.",
      "Implemented Progressive Web App with Browser Push Notification",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "driver-logistics",
    title: "Driver Scheduling Logistics System",
    subtitle: "Automated Fleet & Dispatch Management",
    category: "Logistics / Systems",
    period: "2025",
    company: "Erick Trading Co. L.L.C",
    location: "Sharjah, UAE",
    summary:
      "A driver dispatch platform designed to handle route optimization, shift assignments, and real-time package delivery tracking across regional supply chains.",
    coverImage: drivers1,
    images: [drivers1, drivers2, drivers3, drivers4],
    tags: [
      "React",
      "Laravel",
      "MySQL",
      "Inertia.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    highlights: [
      "Solely built automated route planning algorithms reducing delivery turnaround times.",
      "Implemented live driver GPS tracking with interactive status alerts.",
      "Designed exportable shift reporting tools for head office management.",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS Terminal",
    subtitle: "High-Speed Order & Kitchen Dispatch System",
    category: "Full Stack / POS",
    period: "July 2026 - Present",
    company: "Erick Trading Co. L.L.C",
    location: "Sharjah, UAE",
    summary:
      "Fast-paced food service terminal supporting split payments, kitchen order ticket screen (KT) routing, and inventory tracking.",
    coverImage: icook1,
    images: [icook1, icook2, icook3],
    tags: [
      "Next.js",
      "Nest.js",
      "Tanstack Query",
      "MySQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    highlights: [
      "Low-latency order dispatch to kitchen displays using Tanstack Query Refetch.",
      "Custom table management UI with drag-and-drop seating visualizer.",
      "Modern Design POS System",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];
