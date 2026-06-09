import { Code2, Sparkles, Smartphone, Cloud, Settings, Layout } from "lucide-react";
import { ReactNode } from "react";

export type Feature = {
  id: number;
  icon: ReactNode;
  title: string;
  paragraph: string;
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Code2 size={40} />,
    title: "Custom Software Development",
    paragraph:
      "Build scalable custom applications tailored to business needs.",
  },
  {
    id: 2,
    icon: <Sparkles size={40} />,
    title: "AI Development",
    paragraph:
      "Implement AI-powered solutions and intelligent automation.",
  },
  {
    id: 3,
    icon: <Smartphone size={40} />,
    title: "Mobile App Development",
    paragraph:
      "Native and cross-platform mobile applications.",
  },
  {
    id: 4,
    icon: <Cloud size={40} />,
    title: "Cloud Infrastructure",
    paragraph:
      "Secure and scalable cloud environments.",
  },
  {
    id: 5,
    icon: <Settings size={40} />,
    title: "DevOps & Automation",
    paragraph:
      "Streamline development and deployment processes.",
  },
  {
    id: 6,
    icon: <Layout size={40} />,
    title: "UI/UX Design",
    paragraph:
      "Create engaging digital experiences and interfaces.",
  },
];
export default featuresData;
