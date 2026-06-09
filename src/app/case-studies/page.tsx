import { Metadata } from "next";
import CaseStudiesClient from "@/components/CaseStudies/CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | TechHost",
  description:
    "Explore our in-depth case studies and see how TechHost delivers scalable, secure, and future-ready technology platforms.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesClient />
    </main>
  );
}
