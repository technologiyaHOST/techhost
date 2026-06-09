"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import SectionTitle from "@/components/Common/SectionTitle";
import Testimonials from "@/components/Testimonials";

const portfolioItems = [
  {
    id: 1,
    category: "Cloud & DevOps",
    title: "FinTech Cloud Migration",
    description: "Automated infrastructure scaling and zero-downtime migration for a Tier-1 financial institution handling 10k+ transactions per second.",
    results: [
      "99.99% uptime",
      "40% infrastructure cost reduction",
      "3x deployment speed"
    ],
    image: "/images/service/fintech.webp"
  },
  {
    id: 2,
    category: "AI & Automation",
    title: "AI-Powered CRM",
    description: "Intelligent customer engagement platform using predictive analytics and machine learning to improve retention and sales performance.",
    results: [
      "32% increase in customer retention",
      "25% increase in sales conversions",
      "Automated customer segmentation"
    ],
    image: "/images/service/CRM.webp"
  },
  {
    id: 3,
    category: "Web Development",
    title: "Global E-commerce Platform",
    description: "High-performance headless commerce solution supporting multiple currencies, languages, and international markets.",
    results: [
      "45% increase in conversions",
      "120+ countries served",
      "2 million monthly users"
    ],
    image: "/images/service/Ecom.webp"
  },
  {
    id: 4,
    category: "Custom Software",
    title: "HealthTech Mobile Platform",
    description: "HIPAA-compliant patient management system with telehealth capabilities and real-time health monitoring.",
    results: [
      "500,000+ active patients",
      "99.9% uptime",
      "Secure healthcare compliance"
    ],
    image: "/images/service/healthcare.webp"
  },
  {
    id: 5,
    category: "Custom Software",
    title: "Supply Chain Intelligence Platform",
    description: "Advanced logistics platform optimizing route planning, inventory forecasting, and operational efficiency.",
    results: [
      "28% reduction in logistics costs",
      "Real-time fleet tracking",
      "Automated inventory management"
    ],
    image: "/images/service/supplychain.webp"
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    title: "SaaS Scalability Suite",
    description: "Cloud-native architecture built on Kubernetes supporting rapid growth and enterprise-grade reliability.",
    results: [
      "Supports 5M+ requests daily",
      "60% faster deployments",
      "Reduced hosting costs by 40%"
    ],
    image: "/images/service/saas.webp"
  }
];

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Python", "Django"],
  Cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  AI: ["OpenAI", "LangChain", "TensorFlow", "Pinecone"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
};

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Custom Software", "Cloud & DevOps", "AI & Automation", "Web Development"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 dark:bg-gray-dark md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <FadeInUp className="mx-auto max-w-[800px] text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              OUR PORTFOLIO
            </span>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight tracking-tight">
              Our Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Innovation</span>
            </h1>
            <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl max-w-3xl mx-auto">
              Explore how we've helped businesses transform through custom software, cloud infrastructure, and AI-powered solutions.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#181C31]">
        <div className="container">
          {/* Filters */}
          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                    activeFilter === filter
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-white text-dark hover:text-primary dark:bg-[#1C2136] dark:text-white dark:hover:text-primary border border-gray-100 dark:border-gray-800"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((project, idx) => (
              <FadeInUp key={project.id} delay={0.1 * idx} className="h-full">
                <HoverCard className="group h-full flex flex-col bg-white dark:bg-[#1C2136] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <span className="absolute top-4 left-4 z-20 inline-flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body-color dark:text-gray-400 mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-dark dark:text-white mb-3 uppercase tracking-wider">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, rIdx) => (
                          <li key={rIdx} className="flex items-start text-sm text-body-color dark:text-gray-400">
                            <span className="text-primary mr-2 mt-0.5">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors">
                      View Case Study
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats Section */}
      <section className="py-20 bg-blue-50 dark:bg-primary/5">
        <div className="container">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Delivering Impact Through Technology
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-extrabold text-primary mb-2">100+</h3>
                <p className="text-sm font-semibold text-dark dark:text-white uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-primary mb-2">50+</h3>
                <p className="text-sm font-semibold text-dark dark:text-white uppercase tracking-wider">Enterprise Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-primary mb-2">15+</h3>
                <p className="text-sm font-semibold text-dark dark:text-white uppercase tracking-wider">Industries Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-primary mb-2">98%</h3>
                <p className="text-sm font-semibold text-dark dark:text-white uppercase tracking-wider">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-primary mb-2">10+</h3>
                <p className="text-sm font-semibold text-dark dark:text-white uppercase tracking-wider">Countries Reached</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials />

      {/* Technologies Used Section */}
      <section className="py-20 bg-white dark:bg-gray-dark border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Technologies Behind Our Success"
              paragraph="We use the most modern and reliable technologies to ensure your digital products are scalable, secure, and lightning fast."
              center
            />
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
            {Object.entries(technologies).map(([category, techList], idx) => (
              <FadeInUp key={category} delay={0.1 * idx}>
                <div className="bg-gray-50 dark:bg-[#181C31] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 h-full">
                  <h4 className="text-lg font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {techList.map((tech) => (
                      <li key={tech} className="flex items-center text-sm font-medium text-body-color dark:text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-primary/40 mr-3"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-24 bg-[#0B1120] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="container relative z-20">
          <FadeInUp className="text-center max-w-[800px] mx-auto">
            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Let's build something extraordinary together. Our team of experts is ready to transform your vision into reality.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-primary/90 hover:scale-105"
                >
                  Contact Us
                </Link>
              </HoverCard>
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-white/5"
                >
                  Request a Quote
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
