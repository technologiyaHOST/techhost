import Image from "next/image";
import { FadeInUp, HoverCard } from "@/components/AnimatedWrapper";

const features = [
  {
    title: "Custom Software Development",
    description: "Build scalable applications designed around your business goals.",
    image: "/images/hero/Softwaredevelopment.webp",
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deploy and scale securely using modern cloud technologies.",
    image: "/images/hero/Cloud infrastructure.gif",
  },
  {
    title: "AI Integration",
    description: "Leverage AI to automate workflows and improve decision-making.",
    image: "/images/hero/AI.webp",
  }
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark">
      <div className="container space-y-24">
        {features.map((feature, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`-mx-4 flex flex-wrap items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-full px-4 lg:w-1/2">
                <FadeInUp delay={0.1}>
                  <HoverCard className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <Image
                      src={feature.image}
                      alt="feature image"
                      fill
                      className="drop-shadow-three object-contain p-4"
                    />
                  </HoverCard>
                </FadeInUp>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <FadeInUp delay={0.2} className="max-w-[470px] mx-auto lg:mx-0">
                  <div className="mb-9">
                    <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-body-color dark:text-gray-400 sm:leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeInUp>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSectionTwo;
