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
      { id: 203, linkedServiceId: 0, name: "Custom quote", info: "" },
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
];
