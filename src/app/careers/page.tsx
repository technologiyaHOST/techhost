import { Metadata } from "next";
import CareersClient from "@/components/Careers/CareersClient";

export const metadata: Metadata = {
  title: "Careers at TechHost | Shape the Future of Technology",
  description:
    "Join our mission to build the backbone of tomorrow's digital infrastructure. We're hiring elite engineers, designers, product thinkers, and cloud architects.",
  keywords: "techhost careers, software engineering jobs, cloud architect roles, tech jobs, remote tech jobs, AI research jobs",
};

export default function CareersPage() {
  return (
    <main>
      <CareersClient />
    </main>
  );
}
