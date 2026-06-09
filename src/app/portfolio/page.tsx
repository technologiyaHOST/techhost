import { Metadata } from "next";
import PortfolioClient from "@/components/Portfolio/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | TechHost",
  description:
    "Explore TechHost's portfolio of successful software development, AI, cloud, and digital transformation projects helping businesses scale and innovate.",
  keywords: "software development portfolio, AI solutions, cloud migration, SaaS development, digital transformation, TechHost case studies",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioClient />
    </main>
  );
}
