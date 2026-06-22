export type SubItem =
  | string
  | {
      name: string;
      href: string;
      description: string;
      category?: string;
    };

export type MenuItem = {
  title: string;
  width?: string;
  href?: string;
  items?: Array<{
    title?: string;
    name?: string;
    href: string;
    subItems: SubItem[] | { [category: string]: SubItem[] };
  }>;
};

export type MenuItems = {
  [key: string]: MenuItem;
};

export const MENU_ITEMS: MenuItems = {
  home: {
    title: "Home",
    href: "/",
  },
  products: {
    title: "Products & Services",
    width: "lg:w-[800px]",
    items: [
      {
        title: "Enterprise Transformation",
        href: "/services/enterprise-transformation",
        subItems: [
          {
            name: "Customer Loyalty & Rewards Management",
            href: "/services/enterprise-transformation/customer-loyalty-rewards-management",
            description:
              "Connect businesses with customers through seamless loyalty and rewards solutions",
          },
          {
            name: "AI-Driven Credit Lifecycle Automation",
            href: "/services/enterprise-transformation/credit-lifecycle-automation",
            description:
              "Transform credit risk evaluation with AI-powered modeling and decisioning",
          },
          {
            name: "AI-Based Credit Scoring & Modeling",
            href: "/services/enterprise-transformation/credit-scoring-modeling",
            description:
              "Make precise lending decisions with AI-powered credit assessment",
          },
          {
            name: "E-commerce & Marketplace",
            href: "/services/enterprise-transformation/ecommerce-marketplace",
            description:
              "Create exceptional digital commerce experiences with AI-powered solutions",
          },
          {
            name: "Counseling Management System",
            href: "/services/enterprise-transformation/counseling-management",
            description:
              "Transform educational counseling with intelligent session management",
          },
          {
            name: "Branding & Marketing",
            href: "/services/enterprise-transformation/branding-marketing",
            description:
              "Transform your brand with data-driven marketing solutions",
          },
        ],
      },
      {
        title: "Strategy & Consulting",
        href: "/services/strategy-consulting",
        subItems: [
          {
            name: "Strategy Formulation & Implementation",
            href: "/services/strategy-consulting/strategy-formulation",
            description:
              "Create and execute clear, actionable strategies aligned with your vision",
          },
          {
            name: "Process Re-Engineering & Automation",
            href: "/services/strategy-consulting/process-reengineering",
            description:
              "Optimize workflows and automate processes for maximum efficiency",
          },
          {
            name: "Business Performance & Growth",
            href: "/services/strategy-consulting/performance-growth",
            description:
              "Drive measurable improvements and accelerate business growth",
          },
          {
            name: "Data Analytics",
            href: "/services/strategy-consulting/data-analytics",
            description:
              "Transform data into actionable insights for better decision-making",
          },
          {
            name: "Business Advisory",
            href: "/services/strategy-consulting/business-advisory",
            description:
              "Expert guidance for navigating complex business challenges",
          },
        ],
      },
      {
        title: "Learning & Development",
        href: "/services/learning-development",
        subItems: {
          "For Corporates": [
            {
              name: "Sales, Customer Service & Experience",
              href: "/services/learning-development/corporates/sales-customer-service",
              description:
                "Enhance your team's capabilities in sales techniques, customer service delivery, and experience management",
              category: "For Corporates",
            },
            {
              name: "HR & Communication",
              href: "/services/learning-development/corporates/hr-communication",
              description:
                "Develop effective HR practices and communication strategies for organizational success",
              category: "For Corporates",
            },
            {
              name: "Team Building",
              href: "/services/learning-development/corporates/team-building",
              description:
                "Foster collaboration and strengthen team dynamics through specialized team building programs",
              category: "For Corporates",
            },
            {
              name: "Strategy Formulation",
              href: "/services/learning-development/corporates/strategy-formulation",
              description:
                "Learn to develop and implement effective business strategies for sustainable growth",
              category: "For Corporates",
            },
          ],
          "For Institutions": [
            {
              name: "Lean, Six Sigma Training & Certification",
              href: "/services/learning-development/institutions/lean-six-sigma-training-certification",
              description:
                "Master process improvement methodologies with professional Lean Six Sigma certification programs",
            },
            {
              name: "Faculty Development Programs",
              href: "/services/learning-development/institutions/faculty-development-programs",
              description:
                "Enhance teaching effectiveness and academic leadership skills for educational professionals",
            },
            {
              name: "Employability Skills",
              href: "/services/learning-development/institutions/employability-skills",
              description:
                "Develop essential workplace skills to improve career prospects and professional growth",
            },
          ],
        },
      },
    ],
  },
  industries: {
    title: "Industries",
    href: "/industries",
  },
  insights: {
    title: "Insights",
    href: "/insights",
  },
  management: {
    title: "Management Team",
    href: "/management-team",
  },
  contact: {
    title: "Contact us",
    href: "/contact",
  },
};

export const getItemUrl = (baseHref: string, item: SubItem): string => {
  if (typeof item === "string") {
    return `${baseHref}/${item.toLowerCase().replace(/\s+/g, "-")}`;
  }
  return item.href;
};

export const getItemLabel = (item: SubItem): string => {
  if (typeof item === "string") {
    return item;
  }
  return item.name;
};
