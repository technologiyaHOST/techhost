import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import { CheckCircle2, MapPin } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const rawLocation = resolvedParams.location;
  // e.g., web-development-company-in-noida -> Web Development Company in Noida
  const formattedLocation = rawLocation
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedLocation} | TechHost`,
    description: `Looking for a ${formattedLocation}? TechHost provides top-notch technology solutions, web development, and AI automation tailored for businesses in your area.`,
  };
}

export function generateStaticParams() {
  return [
    { location: 'web-development-company-in-noida' },
    { location: 'software-development-company-in-greater-noida' },
    { location: 'ai-development-company-in-delhi-ncr' },
  ];
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const rawLocation = resolvedParams.location;
  
  const formattedLocation = rawLocation
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const titlePrefix = formattedLocation.includes("Company") 
    ? formattedLocation.split(" Company ")[0] 
    : "Technology";

  const areaName = formattedLocation.includes("in ") 
    ? formattedLocation.split("in ")[1] 
    : "Your Area";

  return (
    <div className="bg-white dark:bg-gray-dark min-h-screen">
      <section className="relative z-10 overflow-hidden pt-36 pb-20 lg:pt-[180px] lg:pb-[120px] bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-gray-dark">
        <div className="container">
          <FadeInUp className="mx-auto max-w-[900px] text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              <span className="flex items-center justify-center gap-2">
                <MapPin size={16} /> SERVING {areaName.toUpperCase()}
              </span>
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl tracking-tight">
              {formattedLocation}
            </h1>
            <p className="text-lg leading-relaxed text-body-color sm:text-xl dark:text-gray-400 max-w-3xl mx-auto">
              We are the premier {titlePrefix} company serving businesses in {areaName}. We deliver high-quality, scalable, and innovative digital solutions to help you dominate your local and global market.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-primary/90 hover:scale-105"
              >
                Work With Us in {areaName}
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeInUp delay={0.1}>
              <h2 className="mb-6 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                Why Choose TechHost in {areaName}?
              </h2>
              <p className="text-body-color dark:text-gray-400 text-lg mb-8">
                Operating locally but thinking globally, we understand the unique business landscape of {areaName}. Our expert team is ready to collaborate with you to build software that drives real results.
              </p>
              <ul className="space-y-4">
                {[
                  "Deep understanding of local market trends.",
                  "Dedicated support and rapid response times.",
                  "Proven track record of successful project deliveries.",
                  "Cutting-edge technology stack and experienced developers.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-black dark:text-white font-medium">
                    <CheckCircle2 size={24} className="text-primary mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <HoverCard className="bg-gradient-to-br from-primary to-blue-700 p-10 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Start Your Project Today</h3>
                <p className="text-white/80 leading-relaxed text-lg mb-8">
                  Get a free consultation for your project in {areaName}. Our experts will evaluate your requirements and propose the best technical roadmap.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-primary rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors"
                >
                  Contact Us Now
                </Link>
              </HoverCard>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
