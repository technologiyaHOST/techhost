"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";

export default function Video() {

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark">
        <div className="container">
          <FadeInUp>
            <div className="text-center mb-6">
               <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                 Why Choose TechHost
               </span>
            </div>
            <SectionTitle
              title="We Build Solutions That Drive Business Growth"
              paragraph="Our dedicated team combines technical expertise with business understanding to deliver impactful digital products."
              center
              mb="80px"
            />
          </FadeInUp>
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <FadeInUp delay={0.2} className="mx-auto max-w-[1200px]">
                <HoverCard className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/images/techhost-team.jpg"
                      alt="TechHost Team"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/50 transition duration-300 hover:bg-black/60 flex items-center justify-center p-8">
                      <div className="text-center text-white max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
                          Building Technology That Drives Growth
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-gray-200">
                          Helping businesses scale with custom software, AI integrations, and resilient cloud solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </FadeInUp>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
          </div>
        </div>
      </section>

    </>
  );
};
