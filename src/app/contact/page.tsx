import { Metadata } from "next";
import ContactClient from "@/components/Contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact TechHost | Let's Build Something Great Together",
  description:
    "Get in touch with TechHost to discuss software development, AI solutions, cloud infrastructure, and digital transformation projects.",
  keywords: "contact software company, technology consulting, AI development company, cloud consulting, software development services, TechHost contact",
};

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  );
}
