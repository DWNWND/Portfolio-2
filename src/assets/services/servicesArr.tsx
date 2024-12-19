// export const servicesArr = [
//   {
//     id: 1,
//     title: "websites",
//     description: "I develop responsive, accessible, and SEO-optimized websites that work across all devices. Using modern frameworks like React and Tailwind CSS, I ensure your site is fast, secure, and visually engaging.",
//     cta: "My goal is to make websites that are easy to maintain, aligns with your goals, and stands out online.",
//     products: [
//       {
//         id: 1,
//         name: "landing pages",
//         includes: "Single page (ex. Header, About, Contact), clear call-to-actions (CTAs), optimized for conversions. (Not included design)",
//         price: "starting at $300",
//       },
//       {
//         id: 2,
//         name: "basic websites",
//         includes: "Responsive design, up to 4 pages (Home, About, Contact and Services), and basic SEO. Perfect for small businesses. (Not included design)",
//         price: "starting at $500",
//       },
//       {
//         id: 3,
//         name: "custom websites",
//         includes: "Fully tailored functionality, advanced features, and integrations. (Not included design)",
//         price: "request quote",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "branding",
//     description: "Your brand is more than just a logo—it's how people perceive and connect with your business. I create cohesive branding that reflects your identity, values, and vision, making sure you stand out in a crowded market.",
//     cta: "From logo design to color palettes and typography, let’s craft a brand that tells your story.",
//     products: [
//       {
//         id: 1,
//         name: "logo design",
//         includes: "Custom logo creation with up to 3 variations and revisions",
//         price: "starting at $200",
//       },
//       {
//         id: 2,
//         name: "brand identity package",
//         includes: "Logo, color palette, typography, and brand guidelines",
//         price: "starting at $800",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "ui/ux design",
//     description: "I design intuitive and visually engaging interfaces that enhance user experience and drive engagement. My focus is on simplicity, usability, and creating user journeys that make sense.",
//     cta: "Whether it's wireframe, prototypes, or fully fleshed out designs, I aim to bridge the gap between user needs and your business goals.",
//     products: [
//       {
//         id: 1,
//         name: "basic",
//         includes: "wireframe and layouts for up to 3 pages with a focus on visual consistency",
//         price: "starting at $1,000",
//       },
//       {
//         id: 2,
//         name: "intermediate",
//         includes: "Usability testing, accessibility improvements, and a polished user experience",
//         price: "starting at $3,000",
//       },
//       {
//         id: 3,
//         name: "advanced",
//         includes: "Detailed testing and a fully customized design system to match your goals and user needs",
//         price: "starting at $8,000",
//       },
//     ],
//   },
// ];

export const servicesArr = [
  {
    id: 1,
    name: "Design Services",
    cta: "",
    totalPrice: "",
    includes: [
      { id: 11, name: "Style Guide", info: "Typography & Color Scheme optimized for Web", price: "$150" },
      { id: 12, name: "Wireframe & Static Prototype", info: "", price: "$60 per section/page*" },
    ],
    info: "Includes 2 reviews before development",
  },
  {
    id: 2,
    name: "Development Services",
    cta: "",
    totalPrice: "",
    includes: [{ id: 21, name: "Website Build", info: "Custom, responsive design that works on all devices", price: "$60 per section/page*" }],
    info: "Includes 2 reviews before development",
  },
  {
    id: 3,
    name: "Website Launch Setup",
    cta: "Everything you need to launch your site professionally:",
    totalPrice: "$200",
    includes: [
      { id: 31, name: "Domain & Business Email Setup", info: "", price: "" },
      { id: 32, name: "Content Management System (CMS) Setup", info: "Includes instructions for self-maintenance" },
      { id: 33, name: "SEO Optimization", info: "Meta tags, titles, and keywords" },
      { id: 34, name: "Accessibility Testing ", info: "WAVE & WCAG Standards" },
      { id: 35, name: "User Behavior Tracking Integration", info: "", },
    ],
    info: "",
  },
];
