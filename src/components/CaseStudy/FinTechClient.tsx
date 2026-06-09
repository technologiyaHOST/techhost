"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import SectionTitle from "@/components/Common/SectionTitle";

// Extracted data for cleaner code
const challenges = [
  {
    title: "Scalability Issues",
    desc: "Monolithic architecture prevented horizontal scaling and created performance bottlenecks during peak transaction periods."
  },
  {
    title: "High Operational Costs",
    desc: "Legacy infrastructure required excessive manual maintenance and over-provisioned resources."
  },
  {
    title: "Limited Resilience",
    desc: "Single points of failure caused service interruptions and increased business risk."
  },
  {
    title: "Compliance Requirements",
    desc: "Financial regulations required strict security controls and audit capabilities."
  }
];

const solutions = [
  {
    title: "Microservices Transformation",
    desc: "Decomposed monolithic applications into independently deployable services running on Kubernetes."
  },
  {
    title: "Security-First Design",
    desc: "Implemented zero-trust architecture, encryption, secrets management, and compliance automation."
  },
  {
    title: "Infrastructure as Code",
    desc: "Built fully automated infrastructure provisioning using Terraform and GitOps principles."
  },
  {
    title: "Automated CI/CD",
    desc: "Created deployment pipelines enabling multiple production releases daily with zero downtime."
  }
];

const techStack = [
  { name: "AWS Cloud", desc: "Global cloud infrastructure." },
  { name: "Kubernetes", desc: "Container orchestration platform." },
  { name: "Docker", desc: "Application containerization." },
  { name: "Terraform", desc: "Infrastructure automation." },
  { name: "Redis", desc: "In-memory data structure store." },
  { name: "PostgreSQL", desc: "Advanced relational database." },
  { name: "GitHub Actions", desc: "CI/CD pipeline automation." },
  { name: "Prometheus", desc: "Monitoring and alerting." }
];

const metrics = [
  { value: "40%", label: "Cost Reduction in Operations" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "2x", label: "Faster Feature Deployments" },
  { value: "10x", label: "Transaction Capacity" },
  { value: "60%", label: "Faster Incident Resolution" },
  { value: "70%", label: "Infrastructure Automation" }
];

const timeline = [
  { month: "Month 1", title: "Discovery & Assessment" },
  { month: "Month 2", title: "Architecture Design" },
  { month: "Month 3-4", title: "Migration & Modernization" },
  { month: "Month 5", title: "Security Hardening" },
  { month: "Month 6", title: "Launch & Optimization" }
];

const relatedCases = [
  {
    title: "Healthcare Platform Modernization",
    industry: "HealthTech",
    desc: "HIPAA-compliant system handling 500k+ patients.",
    image: "/images/blog/blog-01.jpg"
  },
  {
    title: "AI-Powered Customer Analytics",
    industry: "Retail SaaS",
    desc: "Predictive analytics improving retention by 32%.",
    image: "/images/blog/blog-02.jpg"
  },
  {
    title: "Enterprise SaaS Transformation",
    industry: "Logistics",
    desc: "Optimized route planning reducing costs by 28%.",
    image: "/images/blog/blog-03.jpg"
  }
];

export default function FinTechClient() {
  return (
    <>
      {/* 1. Case Study Hero */}
      <section className="relative z-10 overflow-hidden bg-[#FAF9FF] dark:bg-gray-dark pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-7/12">
              <FadeInUp>
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 uppercase">
                  CASE STUDY · FINTECH
                </span>
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-[3.5rem] md:leading-tight tracking-tight">
                  Scaling a Global Payments Engine with <span className="text-primary">Cloud-Native Architecture</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl">
                  TechHost Core helped a leading European FinTech scale their infrastructure to handle 10x volume while reducing operational costs by 40% through a complete AWS modernization strategy.
                </p>
                <div className="flex flex-wrap gap-8 py-6 border-y border-gray-200 dark:border-gray-800">
                  <div>
                    <h4 className="text-sm font-bold text-dark dark:text-white uppercase tracking-wider mb-1">Industry</h4>
                    <p className="text-body-color dark:text-gray-400 font-medium">FinTech</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark dark:text-white uppercase tracking-wider mb-1">Service</h4>
                    <p className="text-body-color dark:text-gray-400 font-medium">Cloud Migration</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark dark:text-white uppercase tracking-wider mb-1">Duration</h4>
                    <p className="text-body-color dark:text-gray-400 font-medium">6 Months</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
            <div className="w-full px-4 lg:w-5/12 mt-12 lg:mt-0">
              <FadeInUp delay={0.2}>
                <HoverCard className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-[#1C2136] border-4 border-white dark:border-gray-800">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/blog/blog-01.jpg"
                      alt="Project Overview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-200 font-medium">
                          <span className="text-primary mr-3 text-lg">✓</span> PCI-DSS Compliant
                        </li>
                        <li className="flex items-center text-gray-200 font-medium">
                          <span className="text-primary mr-3 text-lg">✓</span> 200ms API Latency
                        </li>
                        <li className="flex items-center text-gray-200 font-medium">
                          <span className="text-primary mr-3 text-lg">✓</span> Global Multi-Region Deployment
                        </li>
                      </ul>
                    </div>
                  </div>
                </HoverCard>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section className="py-20 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="The Challenge"
              paragraph="The client's existing infrastructure struggled to keep pace with rapid growth and increasing transaction volumes."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {challenges.map((chal, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-[#FAF9FF] dark:bg-[#1C2136] rounded-2xl p-8 border-l-4 border-red-500 shadow-sm h-full flex flex-col">
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-4">{chal.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium flex-grow">{chal.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution */}
      <section className="py-20 bg-[#FAF9FF] dark:bg-gray-dark border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="The Solution"
              paragraph="TechHost designed and executed a cloud-native modernization strategy centered around scalability, resilience, security, and automation."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {solutions.map((sol, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-white dark:bg-[#1C2136] rounded-2xl p-8 border-l-4 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-4">{sol.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium flex-grow">{sol.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Stack */}
      <section className="py-20 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="The Technology Stack"
              paragraph="A robust, modern cloud-native foundation."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {techStack.map((tech, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-[#FAF9FF] dark:bg-[#1C2136] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform">
                  <h4 className="text-lg font-bold text-primary mb-2">{tech.name}</h4>
                  <p className="text-sm font-medium text-body-color dark:text-gray-400">{tech.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Results */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeInUp className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Driving Measurable Growth
            </h2>
            <p className="text-lg font-medium text-gray-300">
              The migration transformed both infrastructure performance and business outcomes.
            </p>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="p-6">
                  <h3 className="text-5xl lg:text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
                    {metric.value}
                  </h3>
                  <p className="text-sm lg:text-base font-bold text-gray-400 uppercase tracking-widest">
                    {metric.label}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Project Timeline */}
      <section className="py-20 bg-[#FAF9FF] dark:bg-gray-dark">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Project Timeline"
              paragraph="A structured 6-month journey from assessment to launch."
              center
            />
          </FadeInUp>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary/20 ml-4 md:ml-1/2 md:border-l-0">
              {timeline.map((item, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className={`mb-10 flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-8 w-full relative`}>
                      {/* Timeline dot */}
                      <div className={`absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-dark shadow-md left-[-15px] md:left-auto ${idx % 2 === 0 ? "md:right-[-14px]" : "md:left-[-10px]"}`}></div>
                      <HoverCard className="bg-white dark:bg-[#1C2136] p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 inline-block w-full">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{item.month}</span>
                        <h4 className="text-xl font-bold text-dark dark:text-white">{item.title}</h4>
                      </HoverCard>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonial */}
      <section className="py-20 bg-white dark:bg-[#181C31] border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <FadeInUp className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center text-primary opacity-30">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h3 className="mb-10 text-2xl font-bold leading-relaxed text-black dark:text-white sm:text-3xl lg:text-4xl">
              "TechHost didn't just provide technical expertise; they became a strategic partner. Their cloud-native approach allowed us to focus on innovation rather than infrastructure."
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20">
                <Image src="/images/blog/author-01.png" alt="Marcus Thorne" fill className="object-cover" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-dark dark:text-white">Marcus Thorne</h4>
                <p className="text-sm font-medium text-body-color dark:text-gray-400">CTO, GlobalPay Systems</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 8. Related Case Studies */}
      <section className="py-20 bg-[#FAF9FF] dark:bg-gray-dark border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="More Success Stories"
              paragraph="Explore how we've helped other organizations achieve their technical goals."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {relatedCases.map((rc, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                <HoverCard className="group h-full flex flex-col bg-white dark:bg-[#1C2136] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300">
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <span className="absolute top-4 left-4 z-20 inline-flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                      {rc.industry}
                    </span>
                    <Image 
                      src={rc.image} 
                      alt={rc.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {rc.title}
                    </h3>
                    <p className="text-body-color dark:text-gray-400 mb-6 flex-grow text-sm">
                      {rc.desc}
                    </p>
                    <Link href="/portfolio" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors text-sm">
                      Read Case Study
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
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
              <HoverCard>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-white/5"
                >
                  View More Case Studies
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
