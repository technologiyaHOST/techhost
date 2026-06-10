"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white dark:bg-[#181C31] pt-12 md:pt-16 border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12">
              <div className="mb-8 max-w-[360px]">
                <Link href="/" className="mb-6 inline-block flex items-center space-x-2">
                  <Image
                    src="/images/logo/techhost-logo-dark.svg"
                    alt="TechHost logo"
                    width={40}
                    height={40}
                  />
                  <h2 className="text-2xl font-extrabold text-black dark:text-white tracking-tight">
                    TechHost
                  </h2>
                </Link>
                <p className="mb-6 text-sm font-medium leading-relaxed text-body-color dark:text-gray-400">
                  Delivering high-quality software solutions that help businesses innovate, scale, and succeed.
                </p>
                <div className="flex items-center space-x-4">
                  {/* LinkedIn */}
                  <a href="#" aria-label="LinkedIn" className="text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@techhost.site" aria-label="Email" className="text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-4/12">
              <div className="mb-8">
                <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                  Quick Links
                </h2>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <li>
                    <Link href="/" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/web-development-company-in-noida" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Noida Web Dev
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/software-development-company-in-greater-noida" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Gr. Noida Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/ai-development-company-in-delhi-ncr" className="inline-block text-sm font-medium text-body-color hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                      Delhi NCR AI
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-4/12">
              <div className="mb-8">
                <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                  Contact Details
                </h2>
                <ul className="space-y-3">
                  <li className="flex text-sm font-medium text-body-color dark:text-gray-400">
                    <span className="w-6 flex-shrink-0 text-primary">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </span>
                    <a href="mailto:info@techhost.site" className="hover:text-primary transition-colors">info@techhost.site</a>
                  </li>
                  <li className="flex text-sm font-medium text-body-color dark:text-gray-400">
                    <span className="w-6 flex-shrink-0 text-primary">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </span>
                    <span>+91 7827092513</span>
                  </li>
                  <li className="flex text-sm font-medium text-body-color dark:text-gray-400">
                    <span className="w-6 flex-shrink-0 text-primary">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </span>
                    <span>Vasant Kunj, New Delhi - 110070</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-gray-100 dark:border-gray-800 mt-2">
            <p className="text-center text-sm font-medium text-body-color dark:text-gray-400">
              © 2026 TechHost Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
