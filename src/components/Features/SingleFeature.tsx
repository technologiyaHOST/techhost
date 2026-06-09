import { Feature } from "@/types/feature";
import { HoverCard } from "@/components/AnimatedWrapper";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <HoverCard className="w-full h-full bg-white dark:bg-[#1C2136] p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
      <div>
        <div className="bg-primary/10 text-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-xl shadow-sm border border-primary/20">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-gray-400 text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </HoverCard>
  );
};

export default SingleFeature;
