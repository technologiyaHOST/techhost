"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";

const caseStudies = [
  {
    id: 1,
    title: "Modernizing Core Banking for the Cloud-First Era",
    industry: "FinTech",
    desc: "Migrated a legacy monolithic core banking platform to a highly resilient AWS microservices architecture, reducing costs by 40%.",
    image: "/images/service/fintech.webp",
    slug: "core-banking-modernization"
  },
  {
    id: 2,
    title: "Scaling a Global Payments Engine",
    industry: "FinTech",
    desc: "TechHost Core helped a leading European FinTech scale their infrastructure to handle 10x volume while reducing operational costs by 40% through a complete AWS modernization strategy.",
    image: "/images/service/saas.webp",
    slug: "fintech-cloud-migration"
  },
  {
    id: 3,
    title: "Healthcare Platform Modernization",
    industry: "HealthTech",
    desc: "HIPAA-compliant system handling 500k+ patients with real-time health monitoring and secure telehealth capabilities.",
    image: "/images/service/healthcare.webp",
    slug: "healthcare-platform"
  },
  {
    id: 4,
    title: "AI-Powered Customer Analytics",
    industry: "Retail SaaS",
    desc: "Predictive analytics platform improving customer retention by 32% and automating intelligent segmentation.",
    image: "/images/service/CRM.webp",
    slug: "ai-analytics"
  }
];

export default function CaseStudiesClient() {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 dark:bg-gray-dark md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <FadeInUp className="mx-auto max-w-[800px] text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 uppercase">
              CASE STUDIES
            </span>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight tracking-tight">
              Our Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Stories</span>
            </h1>
            <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl max-w-3xl mx-auto">
              Discover how we've partnered with leading organizations to solve complex technical challenges and drive measurable business growth.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <FadeInUp key={study.id} delay={0.1 * idx} className="h-full">
                <HoverCard className="group h-full flex flex-col bg-[#FAF9FF] dark:bg-[#1C2136] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <span className="absolute top-4 left-4 z-20 inline-flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                      {study.industry}
                    </span>
                    <Image 
                      src={study.image} 
                      alt={study.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-body-color dark:text-gray-400 mb-6 flex-grow">
                      {study.desc}
                    </p>
                    <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors">
                      Read Full Case Study
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 bg-[#0B1120] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="container relative z-20">
          <FadeInUp className="text-center max-w-[800px] mx-auto">
            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Join hundreds of high-growth companies that trust TechHost to build scalable, secure, and future-ready technology platforms.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-primary/90 hover:scale-105"
                >
                  Book a Free Strategy Call
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
