import {
  faBuilding,
  faShoppingCart,
  faIndustry,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";

export const INDUSTRIES = [
  {
    icon: faBuilding,
    title: "Financial Services",
    description:
      "Comprehensive solutions for banking, insurance, investment services, and fintech companies to enhance operational efficiency and customer experience.",
    href: "/industries",
    subIndustries: [
      {
        name: "Banking",
        description:
          "Digital transformation solutions for traditional and digital banks.",
      },
      {
        name: "Insurance",
        description:
          "Claims processing automation and customer engagement tools.",
      },
      {
        name: "Investment Services",
        description: "Portfolio management and analytics platforms.",
      },
      {
        name: "Fintech Solutions",
        description: "Innovative financial technology applications.",
      },
    ],
  },
  {
    icon: faShoppingCart,
    title: "Retail & Consumer",
    description:
      "Retail solutions that help businesses streamline operations, enhance customer experience, and drive growth in the competitive consumer market.",
    href: "/industries",
    subIndustries: [
      {
        name: "Retail FMCG",
        description:
          "Supply chain optimization and inventory management systems.",
      },
      {
        name: "E-commerce",
        description:
          "Online marketplace development and digital marketing solutions.",
      },
      {
        name: "Consumer Goods",
        description: "Distribution and logistics management platforms.",
      },
      {
        name: "Luxury & Fashion",
        description:
          "Brand experience enhancement and customer loyalty programs.",
      },
    ],
  },
  {
    icon: faIndustry,
    title: "Industrial & Manufacturing",
    description:
      "Industrial solutions that optimize production processes, improve quality control, and enhance overall manufacturing efficiency.",
    href: "/industries",
    subIndustries: [
      {
        name: "Manufacturing",
        description: "Production optimization and quality management systems.",
      },
      {
        name: "Automotive",
        description: "Supply chain management and dealer network solutions.",
      },
      {
        name: "Oil & Gas",
        description: "Operational safety and compliance management tools.",
      },
      {
        name: "Gem & Jewelry",
        description: "Inventory tracking and authentication systems.",
      },
    ],
  },
  {
    icon: faHandHoldingMedical,
    title: "Services & Others",
    description:
      "Specialized solutions for education, healthcare, telecom, and logistics sectors that address unique industry challenges and requirements.",
    href: "/industries",
    subIndustries: [
      {
        name: "Education",
        description:
          "Learning management systems and student engagement platforms.",
      },
      {
        name: "Healthcare",
        description: "Patient management and clinical workflow solutions.",
      },
      {
        name: "Telecom",
        description: "Network management and customer service platforms.",
      },
      {
        name: "Travel & Logistics",
        description: "Route optimization and delivery management systems.",
      },
    ],
  },
];
