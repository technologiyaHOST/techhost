import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 22,
        title: "Mobile App Development",
        path: "/services/mobile-app-development",
        newTab: false,
      },
      {
        id: 23,
        title: "AI & Automation",
        path: "/services/ai-automation",
        newTab: false,
      },
      {
        id: 24,
        title: "UI/UX Design",
        path: "/services/ui-ux-design",
        newTab: false,
      },
      {
        id: 25,
        title: "Cloud & DevOps",
        path: "/services/cloud-devops",
        newTab: false,
      },
      {
        id: 26,
        title: "Custom Software",
        path: "/services/custom-software",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 4,
    title: "Case Studies",
    path: "/case-studies",
    newTab: false,
  },
  {
    id: 5,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 6,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
