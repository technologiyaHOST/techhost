"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import SectionTitle from "@/components/Common/SectionTitle";

// Data arrays
const cultureValues = [
  {
    title: "Unified Purpose",
    subtitle: "Every team member is an owner.",
    desc: "We align individual goals with a shared vision of global technological impact.",
    highlight: false
  },
  {
    title: "Rapid Innovation",
    subtitle: "We don't wait for the future. We build it.",
    desc: "Our R&D culture encourages experimentation and continuous improvement.",
    highlight: true
  },
  {
    title: "Inclusion First",
    subtitle: "Diversity is a strategic advantage.",
    desc: "Every voice matters regardless of background, role, or experience.",
    highlight: false
  }
];

const benefits = [
  {
    title: "Health & Wellness",
    desc: "Premium healthcare plans, wellness programs, and mental health support.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    )
  },
  {
    title: "Remote Flexibility",
    desc: "Work remotely, hybrid, or from one of our global offices.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
    )
  },
  {
    title: "Career Growth",
    desc: "Annual learning budgets, conferences, certifications, and mentorship.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    )
  },
  {
    title: "Competitive Compensation",
    desc: "Market-leading salaries, performance bonuses, equity options, and rewards.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  }
];

const openRoles = [
  { id: 1, dept: "Engineering", loc: "Remote / New York", role: "Senior Cloud Architect", type: "Full Time", comp: "Competitive Salary + Equity" },
  { id: 2, dept: "Engineering", loc: "Remote", role: "Full Stack Developer", type: "Full Time", comp: "Competitive Salary + Equity" },
  { id: 3, dept: "AI Research", loc: "New York / Remote", role: "AI Research Engineer", type: "Full Time", comp: "Competitive Salary + Equity" },
  { id: 4, dept: "Product", loc: "London / Remote", role: "Principal Product Manager", type: "Full Time", comp: "Competitive Salary + Equity" },
  { id: 5, dept: "Design", loc: "Remote", role: "Senior UI/UX Designer", type: "Full Time", comp: "Competitive Salary + Equity" },
  { id: 6, dept: "Cloud Infrastructure", loc: "Remote", role: "DevOps Engineer", type: "Full Time", comp: "Competitive Salary + Equity" },
  { id: 7, dept: "Security", loc: "New York", role: "Information Security Analyst", type: "Full Time", comp: "Competitive Salary + Equity" }
];

const metrics = [
  { value: "95%", label: "Employee Satisfaction" },
  { value: "4.9/5", label: "Glassdoor Rating" },
  { value: "30+", label: "Countries Represented" },
  { value: "100%", label: "Remote Friendly" },
  { value: "500+", label: "Learning Courses Completed" }
];

const testimonials = [
  {
    quote: "TechHost gives me the autonomy to solve meaningful problems while constantly learning from brilliant teammates.",
    role: "Senior Engineer",
    image: "/images/blog/author-01.png"
  },
  {
    quote: "The culture is collaborative, ambitious, and incredibly supportive.",
    role: "Product Manager",
    image: "/images/blog/author-02.png"
  },
  {
    quote: "I've grown more here in two years than anywhere else in my career.",
    role: "Cloud Architect",
    image: "/images/blog/author-03.png"
  }
];

const hiringProcess = [
  "Application Review",
  "Introductory Call",
  "Technical Assessment",
  "Team Interviews",
  "Offer & Onboarding"
];

export default function CareersClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredRoles = openRoles.filter((role) => {
    const matchesSearch = role.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || role.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  const departments = ["All", ...Array.from(new Set(openRoles.map(r => r.dept)))];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative z-10 overflow-hidden bg-[#FAF9FF] dark:bg-gray-dark pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <FadeInUp>
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 uppercase">
                  JOIN OUR MISSION
                </span>
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-[3.5rem] tracking-tight">
                  Shape the Future of Technology <span className="text-primary">with Us</span>
                </h1>
                <p className="mb-10 text-lg font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl max-w-lg">
                  At TechHost Core, we're building the backbone of tomorrow's digital infrastructure. We're looking for visionaries who want to redefine what's possible in cloud computing, AI, software engineering, and enterprise technology.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="#open-roles" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition duration-300 hover:bg-primary/90 hover:-translate-y-1">
                    View Open Roles
                  </Link>
                  <Link href="#culture" className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 bg-transparent px-8 py-4 text-base font-bold text-primary transition duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 dark:text-white dark:border-white/20 dark:hover:border-white dark:hover:bg-white/5">
                    Our Culture
                  </Link>
                </div>
              </FadeInUp>
            </div>
            <div className="w-full px-4 lg:w-1/2 mt-12 lg:mt-0">
              <FadeInUp delay={0.2}>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <Image
                    src="/images/blog/blog-01.jpg"
                    alt="Engineering team collaboration"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Innovation Through Collaboration (Culture Values) */}
      <section id="culture" className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Innovation Through Collaboration"
              paragraph="We believe the best solutions emerge from diverse perspectives, radical transparency, and relentless curiosity."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {cultureValues.map((val, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                <HoverCard className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  val.highlight 
                    ? "bg-primary text-white shadow-xl scale-105 z-10 border border-primary/20" 
                    : "bg-[#FAF9FF] dark:bg-[#1C2136] text-black dark:text-white border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md"
                }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${val.highlight ? "text-white" : "text-black dark:text-white"}`}>
                    {val.title}
                  </h3>
                  <h4 className={`text-lg font-bold mb-4 ${val.highlight ? "text-white/90" : "text-primary"}`}>
                    {val.subtitle}
                  </h4>
                  <p className={`font-medium flex-grow leading-relaxed ${val.highlight ? "text-white/80" : "text-body-color dark:text-gray-400"}`}>
                    {val.desc}
                  </p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Empowering Our People (Benefits) */}
      <section className="py-24 bg-[#EEF2FF] dark:bg-gray-dark border-y border-gray-200 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <div className="max-w-[800px] mb-16">
              <h2 className="mb-4 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                Empowering Our People
              </h2>
              <p className="text-lg font-medium text-body-color dark:text-gray-400">
                We provide the tools, resources, and support needed to do your best work and grow your career.
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((ben, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-white dark:bg-[#1C2136] rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 h-full hover:shadow-lg transition-shadow">
                  {ben.icon}
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-3">{ben.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium leading-relaxed">{ben.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Explore Opportunities (Open Roles) */}
      <section id="open-roles" className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container max-w-[1000px] mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">Explore Opportunities</h2>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 bg-[#FAF9FF] dark:bg-[#1C2136] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex-grow">
                <input 
                  type="text" 
                  placeholder="Search roles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
              <div className="w-full md:w-64">
                <select 
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none cursor-pointer"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </FadeInUp>

          {/* Job List */}
          <div className="space-y-4">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role, idx) => (
                <FadeInUp key={role.id} delay={0.05 * idx}>
                  <Link href="#apply">
                    <HoverCard className="group block bg-white dark:bg-[#1C2136] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-bold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">{role.role}</h3>
                          <div className="flex flex-wrap items-center text-sm font-medium text-body-color dark:text-gray-400 gap-4">
                            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary/50 mr-2"></span>{role.dept}</span>
                            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500/50 mr-2"></span>{role.loc}</span>
                            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500/50 mr-2"></span>{role.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end md:w-1/3">
                          <span className="text-sm font-semibold text-dark dark:text-gray-300 bg-gray-50 dark:bg-gray-dark px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700">
                            {role.comp}
                          </span>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                      </div>
                    </HoverCard>
                  </Link>
                </FadeInUp>
              ))
            ) : (
              <FadeInUp>
                <div className="text-center py-12 bg-[#FAF9FF] dark:bg-[#1C2136] rounded-2xl border border-gray-100 dark:border-gray-800">
                  <p className="text-lg font-medium text-body-color dark:text-gray-400">No roles found matching your criteria.</p>
                </div>
              </FadeInUp>
            )}

            {/* General Application Card */}
            <FadeInUp delay={0.2}>
              <div className="mt-8 bg-[#EEF2FF] dark:bg-primary/10 rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between shadow-sm">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Don't see a role that fits?</h3>
                  <p className="text-body-color dark:text-gray-300 font-medium">We're always looking for exceptional talent. Introduce yourself and tell us how you'd like to contribute.</p>
                </div>
                <HoverCard>
                  <Link href="#apply" className="whitespace-nowrap inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-primary/90 hover:-translate-y-1">
                    Send General Application
                  </Link>
                </HoverCard>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 5. Metrics */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/video/shape.svg)] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why People Love Working Here
            </h2>
          </FadeInUp>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {metrics.map((metric, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 w-48 hover:-translate-y-2 transition-transform">
                  <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary mb-3">
                    {metric.value}
                  </h3>
                  <p className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life at TechHost (Testimonials) */}
      <section className="py-24 bg-[#FAF9FF] dark:bg-gray-dark">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Life at TechHost"
              paragraph="Hear from the people building the future."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((test, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                <HoverCard className="bg-white dark:bg-[#1C2136] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <svg className="w-8 h-8 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg font-bold text-dark dark:text-white leading-relaxed mb-8">
                      "{test.quote}"
                    </p>
                  </div>
                  <div className="flex items-center border-t border-gray-100 dark:border-gray-800 pt-6">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                      <Image src={test.image} alt={test.role} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{test.role}</p>
                    </div>
                  </div>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Hiring Process */}
      <section className="py-24 bg-white dark:bg-[#181C31] border-t border-gray-100 dark:border-gray-800">
        <div className="container overflow-hidden">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">Our Hiring Process</h2>
            </div>
          </FadeInUp>
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {hiringProcess.map((step, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-dark border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl font-bold text-gray-400 dark:text-gray-500 mb-6 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-colors shadow-sm relative z-10">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-dark dark:text-white max-w-[120px] leading-tight">
                      {step}
                    </h4>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="relative z-10 py-28 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
        <div className="container relative z-20">
          <FadeInUp className="text-center max-w-[800px] mx-auto">
            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
              Ready to Elevate Your Career?
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-300 font-medium">
              Join a team of elite engineers, builders, researchers, and innovators creating technology that powers the future.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="#open-roles"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(38,77,217,0.4)] transition duration-300 ease-in-out hover:bg-primary/90 hover:-translate-y-1"
                >
                  Apply Today
                </Link>
              </HoverCard>
              <HoverCard>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-white/5 hover:-translate-y-1"
                >
                  Learn More About Our Mission
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
