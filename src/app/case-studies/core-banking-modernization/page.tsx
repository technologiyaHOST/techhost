import { Metadata } from "next";
import CoreBankingClient from "@/components/CaseStudy/CoreBankingClient";

export const metadata: Metadata = {
  title: "Modernizing Core Banking for the Cloud-First Era | TechHost Case Study",
  description:
    "Learn how TechHost helped a leading FinTech company modernize its banking infrastructure using AWS, Kubernetes, Terraform, and cloud-native architecture.",
  keywords: "cloud migration case study, fintech modernization, AWS consulting, kubernetes migration, enterprise cloud transformation, TechHost case study",
};

export default function CoreBankingCaseStudyPage() {
  return (
    <main>
      <CoreBankingClient />
    </main>
  );
}
