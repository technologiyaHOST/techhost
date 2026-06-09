"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import SectionTitle from "@/components/Common/SectionTitle";

const challenges = [
  {
    title: "Scalability Bottlenecks",
    desc: "Monolithic architecture prevented independent scaling of transaction processing, resulting in performance degradation during peak periods.",
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    )
  },
  {
    title: "High Operational Costs",
    desc: "Fixed hardware costs and manual infrastructure maintenance created significant overhead.",
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    title: "Limited Resilience",
    desc: "Single points of failure across the stack made disaster recovery difficult and increased downtime risks.",
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    )
  }
];

const solutions = [
  {
    title: "Microservices Transition",
    desc: "Decomposed the monolithic platform into independent services with isolated scaling and deployment."
  },
  {
    title: "Security-First Design",
    desc: "Implemented IAM controls, encryption, secrets management, and compliance automation."
  },
  {
    title: "Infrastructure as Code",
    desc: "Provisioned all environments using Terraform and GitOps workflows."
  },
  {
    title: "Automated CI/CD",
    desc: "Created deployment pipelines reducing release cycles from weeks to minutes."
  }
];

const technologies = [
  "AWS", "Kubernetes", "Docker", "Terraform", "PostgreSQL"
];

const metrics = [
  {
    value: "40%",
    title: "Cost Reduction",
    desc: "Shift from CapEx to OpEx through serverless architecture and auto-scaling."
  },
  {
    value: "99.99%",
    title: "Uptime Achieved",
    desc: "Multi-AZ deployment and automated failover mechanisms."
  },
  {
    value: "2x",
    title: "Faster Deployment",
    desc: "CI/CD pipelines reduced release cycles from weeks to days."
  }
];

export default function CoreBankingClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden bg-[#FAF9FF] dark:bg-gray-dark pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <FadeInUp>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-md border border-primary/20">
                    FINTECH
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-md border border-primary/20">
                    CLOUD MIGRATION
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-md border border-primary/20">
                    12 MONTHS
                  </span>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-[3.5rem] md:leading-tight tracking-tight">
                  Modernizing Core Banking for the <span className="text-primary">Cloud-First Era</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl max-w-lg">
                  How TechHost partnered with a leading European FinTech to migrate a legacy monolithic core banking platform to a highly resilient AWS microservices architecture.
                </p>
                <div className="flex items-center space-x-2 text-primary font-bold animate-bounce cursor-pointer">
                  <span>Scroll to Explore the Journey</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
              </FadeInUp>
            </div>
            <div className="w-full px-4 lg:w-1/2 mt-12 lg:mt-0">
              <FadeInUp delay={0.2}>
                <HoverCard className="relative overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-[#1C2136] border border-gray-100 dark:border-gray-800">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/blog/blog-02.jpg"
                      alt="Modern enterprise server room with cloud infrastructure visualization"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </HoverCard>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <div className="max-w-[800px] mb-16">
              <h2 className="mb-4 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">The Challenge</h2>
              <p className="text-lg font-medium text-body-color dark:text-gray-400">
                The client faced critical limitations with their legacy on-premise infrastructure that hindered global expansion plans.
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((chal, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                <HoverCard className="bg-white dark:bg-[#1C2136] rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm h-full hover:shadow-md transition-shadow">
                  {chal.icon}
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-4">{chal.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium">{chal.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-[#EEF2FF] dark:bg-gray-dark border-t border-gray-200 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <div className="max-w-[800px] mb-16">
              <h2 className="mb-4 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">The Solution: Lift & Modernize</h2>
              <p className="text-lg font-medium text-body-color dark:text-gray-400">
                A strategic migration to AWS, rebuilding core components as cloud-native microservices while maintaining business continuity.
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-white dark:bg-[#1C2136] rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-primary dark:text-primary mb-3">{sol.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium leading-relaxed">{sol.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Leveraged */}
      <section className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">Technologies Leveraged</h2>
            </div>
          </FadeInUp>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-[#FAF9FF] dark:bg-[#1C2136] border border-gray-100 dark:border-gray-800 rounded-xl px-8 py-6 flex items-center justify-center hover:-translate-y-1 transition-transform min-w-[180px]">
                  <span className="text-lg font-bold text-dark dark:text-white">{tech}</span>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Metrics */}
      <section className="py-24 bg-[#FAF9FF] dark:bg-gray-dark border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {metrics.map((metric, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-gradient-to-br from-primary to-[#1A36A8] p-10 rounded-2xl shadow-xl border border-primary/20 flex flex-col items-center h-full hover:shadow-2xl transition-shadow text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-md">
                    {metric.value}
                  </h3>
                  <h4 className="text-xl font-bold mb-4">
                    {metric.title}
                  </h4>
                  <p className="text-blue-100 text-sm font-medium leading-relaxed">
                    {metric.desc}
                  </p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center text-primary opacity-30">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h3 className="mb-10 text-2xl font-bold leading-relaxed text-black dark:text-white sm:text-3xl lg:text-4xl tracking-tight">
              "TechHost didn't just move our servers; they transformed how we build and ship software. Our migration to AWS has been the single most impactful strategic decision for our engineering team this decade."
            </h3>
            <div className="flex items-center justify-center space-x-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 shadow-md">
                <Image src="/images/blog/author-01.png" alt="Marcus Thorne" fill className="object-cover" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-dark dark:text-white">Marcus Thorne</h4>
                <p className="text-sm font-medium text-primary">CTO, NovaEdge FinTech</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-28 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
        <div className="container relative z-20">
          <FadeInUp className="text-center max-w-[800px] mx-auto">
            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-300 font-medium">
              Let's discuss how our cloud modernization strategies can accelerate your business growth while reducing operational complexity.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(38,77,217,0.4)] transition duration-300 ease-in-out hover:bg-primary/90 hover:-translate-y-1"
                >
                  Schedule a Consultation
                </Link>
              </HoverCard>
              <HoverCard>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-white/5 hover:-translate-y-1"
                >
                  View All Case Studies
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
