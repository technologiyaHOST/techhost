const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  isFeatured?: boolean;
}) => {
  const { price, duration, packageName, subtitle, children, isFeatured } = props;

  return (
    <div className={`w-full relative z-10 rounded-3xl bg-white px-8 py-10 transition-all duration-300 ${
      isFeatured 
        ? "shadow-2xl border-2 border-primary dark:bg-[#1C2136] scale-105 z-20" 
        : "shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg dark:bg-[#181C31] dark:border-gray-800"
    }`}>
      {isFeatured && (
        <span className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-md">
          Most Popular
        </span>
      )}
      <div className="flex items-center justify-between">
        <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
          ₹<span className="amount">{price}</span>
          <span className="time text-body-color dark:text-gray-400 text-lg font-medium">
            /{duration}
          </span>
        </h3>
        <h4 className="text-dark mb-2 text-xl font-bold dark:text-white">
          {packageName}
        </h4>
      </div>
      <p className="text-body-color dark:text-gray-400 mb-7 text-base">{subtitle}</p>
      <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-gray-800">
        <button className={`flex w-full items-center justify-center rounded-full p-3 text-base font-bold transition duration-300 ease-in-out ${
          isFeatured
            ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
            : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
        }`}>
          Start Free Trial
        </button>
      </div>
      <div>{children}</div>
      <div className="absolute right-0 bottom-0 z-[-1] opacity-50">
        <svg
          width="179"
          height="158"
          viewBox="0 0 179 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
            fill="url(#paint0_linear_70:153)"
          />
          <path
            opacity="0.3"
            d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
            fill="url(#paint1_linear_70:153)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_70:153"
              x1="69.6694"
              y1="29.9033"
              x2="196.108"
              y2="83.2919"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_70:153"
              x1="165.348"
              y1="-75.4466"
              x2="-3.75136"
              y2="103.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default PricingBox;
