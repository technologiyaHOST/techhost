"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";
import SectionTitle from "@/components/Common/SectionTitle";

const features = [
  {
    title: "Expert Team",
    desc: "Senior engineers, architects, and AI specialists."
  },
  {
    title: "Fast Response",
    desc: "Dedicated consultation within 24 hours."
  },
  {
    title: "Global Experience",
    desc: "Projects delivered across multiple industries."
  },
  {
    title: "Scalable Solutions",
    desc: "Technology designed for long-term growth."
  }
];

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer: "Most inquiries receive a response within one business day."
  },
  {
    question: "Do you offer custom SLA packages?",
    answer: "Yes. We provide customized service-level agreements for enterprise clients."
  },
  {
    question: "Can we arrange an on-site consultation?",
    answer: "Absolutely. Depending on location and project scope, our team can arrange in-person workshops and consultations."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We work with startups, SMBs, and enterprise organizations."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We regularly sign NDAs before discussing confidential projects."
  }
];

const locations = ["New York", "London", "Dubai", "Singapore", "Bangalore"];

export default function ContactClient() {
  // Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Thank you! Your inquiry has been sent.");
    setFormData({ name: "", email: "", company: "", phone: "", service: "", budget: "", timeline: "", message: "" });
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative z-10 overflow-hidden bg-[#FAF9FF] dark:bg-gray-dark pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container">
          <FadeInUp className="mx-auto max-w-[800px] text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 uppercase">
              GET IN TOUCH
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight tracking-tight">
              Let's Build Something <span className="text-primary">Great Together</span>
            </h1>
            <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl max-w-2xl mx-auto">
              Have a project in mind? Our experts are ready to help you transform your ideas into reality. Reach out today for a consultation and discover how TechHost can accelerate your business growth.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 2. Contact Section (2-Columns) */}
      <section className="py-12 bg-white dark:bg-[#181C31]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            
            {/* Left Column: Info */}
            <div className="w-full px-4 lg:w-5/12 mb-12 lg:mb-0">
              <FadeInUp>
                <div className="bg-[#FAF9FF] dark:bg-[#1C2136] rounded-2xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
                  <h3 className="text-2xl font-bold text-dark dark:text-white mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-6 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                        <a href="mailto:info@techhost.site" className="text-lg font-bold text-dark dark:text-white hover:text-primary transition-colors">info@techhost.site</a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-6 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
                        <p className="text-lg font-bold text-dark dark:text-white">+91 7827092513</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-6 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Office Address</h4>
                        <p className="text-lg font-bold text-dark dark:text-white leading-relaxed">Vasant Kunj, New Delhi - 110070</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-6 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Business Hours</h4>
                        <p className="text-lg font-bold text-dark dark:text-white leading-relaxed">Monday - Friday<br/>9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-primary mt-2 font-medium">Response Time: Typically within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Illustration Card */}
                <HoverCard className="bg-[#FAF9FF] dark:bg-[#1C2136] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm relative group">
                  <div className="relative h-64 w-full">
                    <Image src="/images/blog/blog-02.jpg" alt="TechHost Office" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="text-xl font-bold text-white tracking-widest uppercase">Global Technology Headquarters</h4>
                    </div>
                  </div>
                </HoverCard>
              </FadeInUp>
            </div>

            {/* Right Column: Form */}
            <div className="w-full px-4 lg:w-7/12">
              <FadeInUp delay={0.2}>
                <div className="bg-white dark:bg-[#1C2136] rounded-2xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800 shadow-xl shadow-black/5">
                  <h3 className="text-2xl font-bold text-dark dark:text-white mb-8">Project Inquiry Form</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-dark dark:text-white mb-2">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-dark dark:text-white mb-2">Work Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-dark dark:text-white mb-2">Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleFormChange} className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Acme Corp" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-dark dark:text-white mb-2">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark dark:text-white mb-2">Service of Interest</label>
                      <select name="service" value={formData.service} onChange={handleFormChange} required className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                        <option value="" disabled>Select a service</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Technology Consulting">Technology Consulting</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-dark dark:text-white mb-2">Budget Range</label>
                        <select name="budget" value={formData.budget} onChange={handleFormChange} required className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                          <option value="" disabled>Select budget</option>
                          <option value="Under $5k">Under $5k</option>
                          <option value="$5k - $25k">$5k - $25k</option>
                          <option value="$25k - $100k">$25k - $100k</option>
                          <option value="$100k+">$100k+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-dark dark:text-white mb-2">Project Timeline</label>
                        <select name="timeline" value={formData.timeline} onChange={handleFormChange} required className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                          <option value="" disabled>Select timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1 Month">1 Month</option>
                          <option value="3 Months">3 Months</option>
                          <option value="6+ Months">6+ Months</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark dark:text-white mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleFormChange} required rows={5} className="w-full px-5 py-4 rounded-xl bg-[#FAF9FF] dark:bg-gray-dark border border-gray-200 dark:border-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your project goals, requirements, and vision."></textarea>
                    </div>

                    <div>
                      <button type="submit" className="w-full rounded-xl bg-[#0F172A] px-8 py-5 text-lg font-bold text-white shadow-xl hover:bg-[#1E293B] hover:-translate-y-1 transition-all duration-300">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Contact TechHost */}
      <section className="py-24 bg-[#EEF2FF] dark:bg-[#1C2136] border-y border-gray-200 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">Why Businesses Choose TechHost</h2>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="h-full">
                <HoverCard className="bg-white dark:bg-gray-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-3">{feat.title}</h3>
                  <p className="text-body-color dark:text-gray-400 font-medium">{feat.desc}</p>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      <section className="py-24 bg-white dark:bg-[#181C31]">
        <div className="container max-w-[800px] mx-auto">
          <FadeInUp>
            <SectionTitle
              title="Frequently Asked Questions"
              paragraph="Quick answers to help you get started with TechHost."
              center
            />
          </FadeInUp>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div 
                  className={`border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'bg-[#FAF9FF] dark:bg-[#1C2136] shadow-md' : 'bg-white dark:bg-gray-dark hover:bg-gray-50 dark:hover:bg-[#1C2136]'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
                  >
                    <span className="text-lg font-bold text-dark dark:text-white">{faq.question}</span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </button>
                  <div className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-body-color dark:text-gray-400 font-medium">{faq.answer}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Presence */}
      <section className="py-24 bg-[#FAF9FF] dark:bg-[#1C2136] border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <FadeInUp>
            <SectionTitle
              title="Global Presence"
              paragraph="Supporting clients worldwide through our distributed team and regional offices."
              center
            />
          </FadeInUp>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {locations.map((loc, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <HoverCard className="bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:-translate-y-2 hover:border-primary/50 transition-all shadow-sm">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-lg font-bold text-dark dark:text-white">{loc}</span>
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
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-300 font-medium">
              Whether you're building a new product, modernizing existing systems, or exploring AI opportunities, TechHost is ready to help.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(38,77,217,0.4)] transition duration-300 ease-in-out hover:bg-primary/90 hover:-translate-y-1"
                >
                  Schedule a Consultation
                </Link>
              </HoverCard>
              <HoverCard>
                <Link
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-white/5 hover:-translate-y-1"
                >
                  Request a Proposal
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
