import { Metadata } from "next";
import FinTechClient from "@/components/CaseStudy/FinTechClient";

export const metadata: Metadata = {
  title: "Scaling a Global Payments Engine | TechHost Case Study",
  description:
    "Discover how TechHost helped a leading FinTech company achieve 99.99% uptime, reduce infrastructure costs by 40%, and scale globally through cloud-native architecture.",
  keywords: "cloud migration case study, fintech infrastructure, AWS modernization, Kubernetes deployment, DevOps consulting, cloud-native transformation",
};

export default function CaseStudyPage() {
  return (
    <main>
      <FinTechClient />
    </main>
  );
}
