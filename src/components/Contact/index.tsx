import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark">
      <div className="container">
        <FadeInUp>
          <div className="text-center mb-6">
             <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
               Get in Touch
             </span>
          </div>
          <div className="mx-auto max-w-[800px] text-center mb-16">
            <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Let's Build Something Great Together
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-gray-400 sm:text-lg">
              Have a project in mind? Our experts are ready to help you transform your ideas into reality.
            </p>
          </div>
        </FadeInUp>

        <div className="-mx-4 flex flex-wrap">
          {/* Contact Information (Left) */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12 mb-12 lg:mb-0">
            <FadeInUp delay={0.1} className="h-full">
              <HoverCard className="h-full rounded-3xl bg-primary/5 px-8 py-11 dark:bg-[#1C2136] sm:p-[55px] lg:px-8 xl:p-[55px] border border-primary/10 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Contact Information
                </h3>
                <div className="mb-8 flex items-start space-x-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Phone</h4>
                    <p className="text-body-color dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="mb-8 flex items-start space-x-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Email Address</h4>
                    <p className="text-body-color dark:text-gray-400">info@techhost.site</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Office Location</h4>
                    <p className="text-body-color dark:text-gray-400">123 Tech Avenue, Suite 400<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
              </HoverCard>
            </FadeInUp>
          </div>

          {/* Contact Form (Right) */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <FadeInUp delay={0.2} className="h-full">
              <HoverCard className="h-full rounded-3xl bg-white px-8 py-11 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 dark:bg-[#1C2136] sm:p-[55px] lg:px-8 xl:p-[55px]">
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Send us a Message
                </h3>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-full border bg-gray-50 px-6 py-4 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-gray-300"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-full border bg-gray-50 px-6 py-4 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-gray-300"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="border-stroke w-full resize-none rounded-3xl border bg-gray-50 px-6 py-4 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all shadow-sm"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-full bg-primary px-9 py-4 text-base font-bold text-white shadow-submit duration-300 hover:bg-primary/90 hover:scale-[1.02] transition-transform w-full md:w-auto">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </HoverCard>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
