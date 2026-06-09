import { Metadata } from "next";
import AboutClient from "@/components/About/AboutClient";

export const metadata: Metadata = {
  title: "About Us | TechHost Solutions",
  description:
    "Learn about TechHost, an enterprise technology partner specializing in cloud infrastructure, AI solutions, and custom software development.",
  keywords: "about techhost, enterprise technology partner, cloud solutions provider, custom software company",
};

export default function AboutPage() {
  return (
    <main>
      <AboutClient />
    </main>
  );
}
