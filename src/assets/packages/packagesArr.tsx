export const packagesArr = [
  {
    id: 20,
    name: "Web Doctor Service",
    cta: "Need help diagnosing a problem or fixing your website? ",
    price: "$50/hour",
    discount: "",
    description: "I’ll analyze your issue and recommend the best solutions. If it’s something I can fix, I’ll provide a custom quote tailored to your needs.",
    includes: [
      { id: 201, linkedServiceId: 0, name: "Problem solving", info: "" },
      { id: 202, linkedServiceId: 0, name: "Custom solution", info: "" },
      { id: 202, linkedServiceId: 0, name: "Custom quote", info: "" },
    ],
  },

  {
    id: 21,
    name: "Business Landing Page",
    cta: "Launch Your Business's Online Presence!",
    price: "$900",
    discount: "Services bought separately: $1050 (Save $150)",
    description: "This package includes everything your business needs to get online quickly and effectively.",
    includes: [
      {
        id: 211,
        linkedServiceId: 1,
        name: "Design",
        info: "includes 2 reviews before development",
      },

      {
        id: 212,
        linkedServiceId: 2,
        name: "Development",
        info: "includes 2 reviews before launch",
      },

      {
        id: 213,
        linkedServiceId: 3,
        name: "Launch Setup",
        info: "",
      },
      {
        id: 214,
        linkedServiceId: 0,
        name: "1 Month Support After Launch",
        info: "",
      },
    ],
  },

  {
    id: 22,
    name: "Custom Theme for Existing CMS",
    cta: "Update Your Website with a Fresh, Custom Design",
    price: "request a quote",
    discount: "Services bought separately: $1050 (Save $150)",
    description: "Already have a website but want a modern, custom look? This package is tailored to your needs.",
    includes: [
      {
        id: 221,
        linkedServiceId: 1,
        name: "Design",
        info: "includes 2 reviews before development",
      },
      {
        id: 222,
        linkedServiceId: 2,
        name: "Development",
        info: "includes 2 reviews before relaunch",
      },
      {
        id: 224,
        linkedServiceId: 0,
        name: "1 Month Support After Relaunch",
        info: "",
      },
    ],
  },

  // {
  //   id: 13,
  //   title: "service",
  //   description: "Single page, clear call-to-actions (CTAs), optimized for conversions. Or a multi-page website with a focus on a single product or service. Perfect for small businesses.",
  //   cta: "Let’s create a website that’s easy to maintain, aligns with your goals, and stands out online.",
  //   total: "$1500",
  //   discount: "save $700",
  //   includes: [
  //     {
  //       id: 131,
  //       name: "design",
  //       includes: "Help finding your design direction, a static design wireframe, a styleguide with color palette- and font selection. Up to 3 rounds of revisions on the design",
  //       price: "$1000",
  //     },
  //     {
  //       id: 132,
  //       name: "coding",
  //       includes: "Responsive website working on all devices, up to 4 pages (Home, About, Contact and Services) or a single page including the same information, basic SEO.",
  //       price: "$1000",
  //     },
  //     {
  //       id: 133,
  //       name: "launch",
  //       includes: "Help with finding a hosting provider, setting up the domain and launching the website. Teaching you how to update basic things on you own.",
  //       price: "$100",
  //     },
  //     {
  //       id: 134,
  //       name: "support",
  //       includes: "One year of support and updates on the website. After that, you can choose to pay for a support plan or update the website yourself.",
  //       price: "$100",
  //     },
  //   ],
  //   notIncluded: [
  //     { id: 1, name: "hosting", includes: "Hosting is not included in the price of the website. I can recommend a hosting provider and help you set up the account." },
  //     { id: 2, name: "domain / url", includes: "You will need to purchase a domain name for your website. I can help you choose a domain name and set it up." },
  //     { id: 3, name: "contact form", includes: "Contact will be set up through contact information (no contact form). I can implement a functional contact form for an extra fee of $100." },
  //     { id: 4, name: "booking system", includes: "I can help you find and implement an external bookings system for an extra fee of $150." },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: "classic",
  //   description: "Single page, clear call-to-actions (CTAs), optimized for conversions. Or a multi-page website with a focus on a single product or service. Perfect for small businesses.",
  //   cta: "Let’s create a website that’s easy to maintain, aligns with your goals, and stands out online.",
  //   total: "$1500",
  //   discount: "save $700",
  //   includes: [
  //     {
  //       id: 111,
  //       name: "design",
  //       includes: "Help finding your design direction, a static design wireframe, a styleguide with color palette- and font selection. Up to 3 rounds of revisions on the design",
  //       price: "$1000",
  //     },
  //     {
  //       id: 112,
  //       name: "coding",
  //       includes: "Responsive website working on all devices, up to 4 pages (Home, About, Contact and Services) or a single page including the same information, basic SEO.",
  //       price: "$1000",
  //     },
  //     {
  //       id: 113,
  //       name: "launch",
  //       includes: "Help with finding a hosting provider, setting up the domain and launching the website. Teaching you how to update basic things on you own.",
  //       price: "$100",
  //     },
  //     {
  //       id: 114,
  //       name: "support",
  //       includes: "One year of support and updates on the website. After that, you can choose to pay for a support plan or update the website yourself.",
  //       price: "$100",
  //     },
  //   ],
  //   notIncluded: [
  //     { id: 1, name: "hosting", includes: "Hosting is not included in the price of the website. I can recommend a hosting provider and help you set up the account." },
  //     { id: 2, name: "domain / url", includes: "You will need to purchase a domain name for your website. I can help you choose a domain name and set it up." },
  //     { id: 3, name: "contact form", includes: "Contact will be set up through contact information (no contact form). I can implement a functional contact form for an extra fee of $100." },
  //     { id: 4, name: "booking system", includes: "I can help you find and implement an external bookings system for an extra fee of $150." },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: "advanced",
  //   description: "A highly customized, multi-functional website designed for medium to large businesses or growing startups. Includes advanced features like interactive components, animations, integration with external tools, and enhanced SEO. Ideal for businesses wanting a robust online presence that scales with their needs.",
  //   cta: "Let’s build a website that not only looks amazing but performs exceptionally well, engages your customers, and grows with your business.",
  //   total: "$3500",
  //   discount: "save $900",
  //   includes: [
  //     {
  //       id: 121,
  //       name: "design",
  //       includes: "Complete custom design tailored to your brand and audience.Interactive design mockups to visualize key user flows. Style guide with comprehensive branding elements, including reusable UI components. Up to 5 rounds of revisions to refine the design to perfection.",
  //       price: "$2000",
  //     },
  //     {
  //       id: 122,
  //       name: "coding",
  //       includes: "Fully responsive website with up to 8 pages (e.g., Home, About, Services, Blog, Contact, etc.).",
  //       price: "$2000",
  //     },
  //     {
  //       id: 123,
  //       name: "launch",
  //       includes: "Help with finding a hosting provider, setting up the domain and launching the website. Teaching you how to update basic things on you own.",
  //       price: "$100",
  //     },
  //     {
  //       id: 124,
  //       name: "support",
  //       includes: "Two years of support and updates, including monthly performance monitoring. Maintenance plan: Regular updates for frontend frameworks and bug fixes.",
  //       price: "$300",
  //     },
  //   ],
  //   notIncluded: [
  //     { id: 1, name: "hosting", includes: "Hosting is not included in the price of the website. I can recommend a hosting provider and help you set up the account." },
  //     { id: 2, name: "domain / url", includes: "You will need to purchase a domain name for your website. I can help you choose a domain name and set it up." },
  //     { id: 3, name: "contact form", includes: "Contact will be set up through contact information (no contact form). I can implement a functional contact form for an extra fee of $100." },
  //     { id: 4, name: "booking system", includes: "I can help you find and implement an external bookings system for an extra fee of $150." },
  //     { id: 5, name: "Advanced Integrations", includes: "Add $300+ for API integrations (e.g., payment gateways, advanced analytics)." },
  //   ],
  // },
];
