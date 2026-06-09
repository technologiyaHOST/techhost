import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { FadeInUp } from "@/components/AnimatedWrapper";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp>
            <div className="text-center mb-6">
               <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                 Our Services
               </span>
            </div>
            <SectionTitle
              title="Comprehensive Technology Solutions"
              paragraph="We provide end-to-end technology services designed to help businesses innovate, automate processes, and achieve sustainable growth."
              center
            />
          </FadeInUp>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, idx) => (
              <FadeInUp key={feature.id} delay={idx * 0.1} className="h-full">
                <SingleFeature feature={feature} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
