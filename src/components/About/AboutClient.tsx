"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import SectionTitle from "@/components/Common/SectionTitle";

const metrics = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Expert Engineers" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99%", label: "Client Retention" }
];

const coreValues = [
  {
    title: "Security First",
    desc: "We implement zero-trust architectures and rigorous compliance standards into every project from day one.",
    icon: (
      <svg className="w-10 h-10 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    )
  },
  {
    title: "Built for Scale",
    desc: "Our cloud-native approach ensures that your infrastructure can seamlessly handle hyper-growth without performance degradation.",
    icon: (
      <svg className="w-10 h-10 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
    )
  },
  {
    title: "Strategic Partnership",
    desc: "We don't just write code. We align our technical execution directly with your core business objectives.",
    icon: (
      <svg className="w-10 h-10 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    )
  }
];

const team = [
  {
    name: "Elena Rodriguez",
    role: "Chief Executive Officer",
    image: "/images/blog/author-01.png"
  },
  {
    name: "James Chen",
    role: "Chief Technology Officer",
    image: "/images/blog/author-02.png"
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    image: "/images/blog/author-03.png"
  },
  {
    name: "Michael Torres",
    role: "Head of Cloud Infrastructure",
    image: "/images/blog/author-01.png"
  }
];

export default function AboutClient() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative z-10 overflow-hidden bg-[#FAF9FF] dark:bg-gray-dark pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <FadeInUp className="mx-auto max-w-[900px] text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 uppercase">
              OUR MISSION
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight tracking-tight">
              We Build the Technology That <span className="text-primary">Builds the Future</span>
            </h1>
            <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl max-w-3xl mx-auto">
              TechHost is a premium enterprise technology partner. We empower forward-thinking companies to navigate digital transformation through scalable cloud infrastructure, AI integrations, and custom software development.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 bg-white dark:bg-[#181C31]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <FadeInUp>
                <div className="mb-12 lg:mb-0 max-w-[600px]">
                  <h2 className="mb-6 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    Engineering Excellence for the Enterprise
                  </h2>
                  <p className="mb-8 text-lg font-medium leading-relaxed text-body-color dark:text-gray-400">
                    Founded on the principle that robust technology is the backbone of modern business success, TechHost has spent the last decade building high-performance solutions for some of the world's most demanding industries.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-lg font-bold text-dark dark:text-white">
                      <span className="flex items-center justify-center w-8 h-8 mr-4 bg-primary/10 text-primary rounded-full">✓</span>
                      Global Reach, Local Expertise
                    </li>
                    <li className="flex items-center text-lg font-bold text-dark dark:text-white">
                      <span className="flex items-center justify-center w-8 h-8 mr-4 bg-primary/10 text-primary rounded-full">✓</span>
                      Enterprise-Grade Security Standards
                    </li>
                    <li className="flex items-center text-lg font-bold text-dark dark:text-white">
                      <span className="flex items-center justify-center w-8 h-8 mr-4 bg-primary/10 text-primary rounded-full">✓</span>
                      Agile Methodology & Rapid Delivery
                    </li>
                  </ul>
                </div>
              </FadeInUp>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <FadeInUp delay={0.2}>
                <HoverCard className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/about/about-image.svg"
                      alt="TechHost Team"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </HoverCard>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. By The Numbers */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              TechHost By The Numbers
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="p-6">
                  <h3 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary mb-4 drop-shadow-md">
                    {metric.value}
                  </h3>
                  <p className="text-sm lg:text-base font-bold text-gray-300 uppercase tracking-widest">
                    {metric.label}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-[#FAF9FF] dark:bg-gray-dark border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Our Core Values"
              paragraph="The principles that guide our engineering and client partnerships."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                <HoverCard className="bg-white dark:bg-[#1C2136] rounded-2xl p-10 border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                  {value.icon}
                  <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">{value.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium leading-relaxed">{value.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Leadership Team"
              paragraph="Meet the experts driving innovation at TechHost."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="group relative overflow-hidden rounded-2xl bg-[#FAF9FF] dark:bg-[#1C2136] border border-gray-100 dark:border-gray-800 p-6 text-center hover:-translate-y-2 transition-transform h-full flex flex-col items-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-dark shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-sm font-medium text-body-color dark:text-gray-400">{member.role}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="relative z-10 py-28 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
        <div className="container relative z-20">
          <FadeInUp className="text-center max-w-[800px] mx-auto">
            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
              Ready to Accelerate Your Transformation?
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-300 font-medium">
              Let's discuss how TechHost can help you build scalable, secure, and future-ready technology platforms.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(38,77,217,0.4)] transition duration-300 ease-in-out hover:bg-primary/90 hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </HoverCard>
              <HoverCard>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-white/5 hover:-translate-y-1"
                >
                  Explore Our Work
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
