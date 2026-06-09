import { FadeInUp } from "@/components/AnimatedWrapper";

const brandsData = [
  { id: 1, name: "Microsoft" },
  { id: 2, name: "Google" },
  { id: 3, name: "Amazon" },
  { id: 4, name: "IBM" },
  { id: 5, name: "Oracle" },
  { id: 6, name: "Adobe" },
];

const Brands = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="container">
        <FadeInUp>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-black dark:text-white">Trusted by Industry Leaders</h3>
          </div>
        </FadeInUp>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <FadeInUp delay={0.2} className="flex flex-wrap items-center justify-center rounded-3xl bg-gray-50 px-8 py-8 dark:bg-[#181C31] sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
              {brandsData.map((brand) => (
                <div key={brand.id} className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                  <span className="text-2xl font-black tracking-tighter text-body-color/50 dark:text-white/30 hover:text-primary dark:hover:text-primary transition-colors cursor-default uppercase">
                    {brand.name}
                  </span>
                </div>
              ))}
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
