import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp, FadeIn, HoverCard } from "@/components/AnimatedWrapper";
import { CheckCircle2, ChevronRight, Database, Layout, Server, Sparkles, Box, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Service | TechHost",
  description: "TechHost service details",
};

const servicesData = [
  {
    slug: 'custom-software',
    badge: 'CUSTOM SOFTWARE DEVELOPMENT',
    heroTitle: 'Software Built Around Your Business',
    heroDescription: 'Every business is unique. We develop custom software solutions designed specifically to solve your challenges, optimize workflows, and support long-term growth.',
    offeringsTitle: 'What We Offer',
    offerings: [
      'CRM Development',
      'ERP Systems',
      'Inventory Management',
      'SaaS Platforms',
      'Enterprise Applications',
      'Internal Business Tools',
      'API Development',
      'Software Modernization'
    ],
    centerHighlightTitle: 'Efficiency First',
    centerHighlightDesc: 'Increased operational efficiency and automated workflows to save time.',
    centerHighlightTag: 'Operational ROI',
    rightHighlightTitle: 'Scalable Tech',
    rightHighlightDesc: 'Future-proof architecture that grows alongside your user base and business goals.',
    rightHighlightTag: 'Better decision-making',
    industryTags: ['Manufacturing', 'Healthcare', 'Education', 'Logistics', 'Retail', 'Finance']
  },
  {
    slug: 'web-development',
    badge: 'WEB DEVELOPMENT SERVICES',
    heroTitle: 'Building Modern, Scalable & High-Performance Web Applications',
    heroDescription: 'TechHost delivers custom web solutions that help businesses establish a strong online presence, streamline operations, and accelerate growth. Whether you need a corporate website, e-commerce platform, SaaS application, or enterprise portal, our team develops secure, responsive, and high-performing web applications tailored to your unique business requirements.',
    offeringsTitle: 'What We Offer',
    offerings: [
      'Corporate Website Development',
      'E-Commerce Solutions',
      'SaaS Product Development',
      'Enterprise Web Applications',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'CMS Development',
      'Website Optimization & Maintenance'
    ],
    centerHighlightTitle: 'Lightning Fast',
    centerHighlightDesc: 'Optimized performance for faster load times and better user retention.',
    centerHighlightTag: 'Better UX',
    rightHighlightTitle: 'Secure by Design',
    rightHighlightDesc: 'Built with modern security standards to protect your data and users.',
    rightHighlightTag: 'High Security',
    industryTags: ['Startups', 'Small Businesses', 'Enterprises', 'E-Commerce Brands', 'Educational Institutions']
  },
  {
    slug: 'mobile-app-development',
    badge: 'MOBILE APP DEVELOPMENT',
    heroTitle: 'Creating Mobile Experiences That Drive Engagement',
    heroDescription: 'We design and develop intuitive mobile applications that help businesses connect with customers anytime, anywhere. Our team builds Android, iOS, and cross-platform applications with exceptional performance, security, and user experience.',
    offeringsTitle: 'What We Offer',
    offerings: [
      'Android App Development',
      'iOS App Development',
      'Hybrid App Development',
      'React Native Apps',
      'Flutter Apps',
      'App UI/UX Design',
      'Backend Integration',
      'App Testing & Deployment'
    ],
    centerHighlightTitle: 'Native Performance',
    centerHighlightDesc: 'Smooth, responsive applications that feel right at home on any device.',
    centerHighlightTag: 'High Performance',
    rightHighlightTitle: 'Engaging UI/UX',
    rightHighlightDesc: 'Interfaces designed to delight users and keep them coming back.',
    rightHighlightTag: 'Max Engagement',
    industryTags: ['Healthcare', 'E-Commerce', 'Education', 'Finance', 'Logistics', 'Real Estate']
  },
  {
    slug: 'ai-automation',
    badge: 'AI & AUTOMATION SOLUTIONS',
    heroTitle: 'Transforming Businesses with Artificial Intelligence',
    heroDescription: 'Harness the power of AI to automate repetitive tasks, improve decision-making, and unlock new growth opportunities. We create intelligent systems that enhance productivity and deliver measurable business value.',
    offeringsTitle: 'What We Offer',
    offerings: [
      'AI Chatbots',
      'Customer Support Automation',
      'Workflow Automation',
      'Predictive Analytics',
      'Machine Learning Models',
      'AI-Powered Web Applications',
      'Generative AI Solutions',
      'Data Intelligence Systems'
    ],
    centerHighlightTitle: 'Smart Automation',
    centerHighlightDesc: 'Automate manual tasks and let your team focus on high-value work.',
    centerHighlightTag: 'Cost Reduction',
    rightHighlightTitle: 'Data-Driven Insights',
    rightHighlightDesc: 'Make better decisions with powerful predictive models and analytics.',
    rightHighlightTag: 'Predictive Analytics',
    industryTags: ['Customer Support', 'Lead Qualification', 'Data Analysis', 'Smart Recommendations', 'Document Processing']
  },
  {
    slug: 'ui-ux-design',
    badge: 'UI/UX DESIGN SERVICES',
    heroTitle: 'Designing Digital Products Users Love',
    heroDescription: 'Great design goes beyond aesthetics. We create user-centric digital experiences that are intuitive, accessible, and conversion-focused.',
    offeringsTitle: 'What We Offer',
    offerings: [
      'User Research',
      'UX Strategy',
      'Wireframing',
      'Interactive Prototyping',
      'Mobile App Design',
      'Website Design',
      'Dashboard Design',
      'Design Systems'
    ],
    centerHighlightTitle: 'User-Centric Approach',
    centerHighlightDesc: 'Every design decision is backed by research and user testing.',
    centerHighlightTag: 'High Retention',
    rightHighlightTitle: 'Conversion Focused',
    rightHighlightDesc: 'Layouts and flows optimized to turn visitors into loyal customers.',
    rightHighlightTag: 'Increased ROI',
    industryTags: ['Startups', 'Enterprise', 'E-Commerce', 'SaaS', 'Mobile Apps', 'Web Platforms']
  },
  {
    slug: 'cloud-devops',
    badge: 'CLOUD & DEVOPS SERVICES',
    heroTitle: 'Accelerating Innovation Through Cloud & DevOps',
    heroDescription: 'Modern businesses require reliable, scalable, and secure infrastructure. Our Cloud and DevOps services help organizations deploy applications faster, improve reliability, and reduce operational overhead.',
    offeringsTitle: 'What We Offer',
    offerings: [
      'Cloud Migration',
      'AWS Solutions',
      'Azure Solutions',
      'Google Cloud Solutions',
      'CI/CD Implementation',
      'Docker & Kubernetes',
      'Infrastructure Automation',
      'Monitoring & Security'
    ],
    centerHighlightTitle: 'High Availability',
    centerHighlightDesc: 'Architectures designed for zero downtime and maximum reliability.',
    centerHighlightTag: '99.99% Uptime',
    rightHighlightTitle: 'Rapid Deployment',
    rightHighlightDesc: 'Automated pipelines to ship features faster and safer.',
    rightHighlightTag: 'Faster Time to Market',
    industryTags: ['AWS', 'Azure', 'Google Cloud Platform', 'Vercel', 'DigitalOcean']
  }
];

const technologies = [
  { category: 'Frontend', icon: Layout, list: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', icon: Server, list: ['Node.js', 'Express.js', 'Python', 'Django'] },
  { category: 'Database', icon: Database, list: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'Cloud', icon: Box, list: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
  { category: 'AI / ML', icon: Sparkles, list: ['OpenAI', 'LangChain', 'TensorFlow', 'Pinecone'] },
];

const processSteps = [
  { title: 'Discovery & Requirements', desc: 'Understanding your goals' },
  { title: 'Planning & Strategy', desc: 'Mapping the technical approach' },
  { title: 'UI/UX Design', desc: 'Creating intuitive interfaces' },
  { title: 'Development', desc: 'Building robust architecture' },
  { title: 'Ongoing Support', desc: 'Maintenance and scaling' }
];

const benefits = [
  { title: 'Dedicated Support', desc: 'Personal account managers for every project.', icon: Users },
  { title: 'On-Time Delivery', desc: 'We respect deadlines and follow strict timelines.', icon: Clock }
];

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return <div className="container py-20 text-center text-2xl font-bold">Service Not Found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden pt-36 pb-20 lg:pt-[180px] lg:pb-[120px] bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-gray-dark">
        <div className="container">
          <FadeInUp className="mx-auto max-w-[900px] text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              {service.badge}
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl tracking-tight">
              {service.heroTitle}
            </h1>
            <p className="text-lg leading-relaxed text-body-color sm:text-xl dark:text-gray-400 max-w-3xl mx-auto">
              {service.heroDescription}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Card: What We Offer */}
            <FadeInUp delay={0.1} className="lg:col-span-1">
              <HoverCard className="h-full bg-white dark:bg-dark p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <CheckCircle2 size={18} />
                  </span>
                  {service.offeringsTitle}
                </h3>
                <ul className="space-y-4">
                  {service.offerings.map((offering, idx) => (
                    <li key={idx} className="flex items-start text-body-color dark:text-gray-400 font-medium">
                      <ChevronRight size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </FadeInUp>

            {/* Center & Right Highlight Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInUp delay={0.2} className="h-full">
                <HoverCard className="h-full bg-gradient-to-br from-primary to-blue-700 p-8 rounded-2xl shadow-xl shadow-primary/20 text-white relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.centerHighlightTitle}</h3>
                    <p className="text-white/80 leading-relaxed text-lg">{service.centerHighlightDesc}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {service.centerHighlightTag}
                    </span>
                  </div>
                </HoverCard>
              </FadeInUp>
              
              <FadeInUp delay={0.3} className="h-full">
                <HoverCard className="h-full bg-gray-50 dark:bg-[#1C2136] p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{service.rightHighlightTitle}</h3>
                    <p className="text-body-color dark:text-gray-400 leading-relaxed text-lg">{service.rightHighlightDesc}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-block px-4 py-1.5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-semibold">
                      {service.rightHighlightTag}
                    </span>
                  </div>
                </HoverCard>
              </FadeInUp>

              {/* Industries Section */}
              <FadeInUp delay={0.4} className="md:col-span-2 mt-4">
                <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
                  <h4 className="text-xl font-bold text-black dark:text-white mb-6">Industries We Serve</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.industryTags.map((tag, idx) => (
                      <span key={idx} className="px-5 py-2.5 bg-gray-50 dark:bg-[#1C2136] border border-gray-200 dark:border-gray-700 text-body-color dark:text-gray-300 rounded-full font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#181C31]">
        <div className="container">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-body-color dark:text-gray-400 leading-relaxed">
              We follow a transparent, agile methodology to ensure your project stays on track, within budget, and exceeds expectations.
            </p>
          </FadeInUp>

          <div className="flex flex-wrap -mx-4 items-center">
            {/* Left: Benefits */}
            <div className="w-full lg:w-5/12 px-4 mb-16 lg:mb-0">
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <FadeInUp key={idx} delay={0.1 * idx}>
                    <HoverCard className="flex items-start bg-white dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-5">
                        <benefit.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-black dark:text-white mb-2">{benefit.title}</h4>
                        <p className="text-body-color dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </HoverCard>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="w-full lg:w-7/12 px-4 lg:pl-20">
              <div className="relative border-l-2 border-primary/20 dark:border-primary/10 pl-8 space-y-10 py-4">
                {processSteps.map((step, idx) => (
                  <FadeInUp key={idx} delay={0.1 * idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-[#181C31] shadow-sm"></div>
                    <div className="bg-white dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors">
                      <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">Step 0{idx + 1}</span>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-2">{step.title}</h4>
                      <p className="text-body-color dark:text-gray-400">{step.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl mb-6">
              Technologies We Use
            </h2>
            <p className="text-lg text-body-color dark:text-gray-400 leading-relaxed">
              We leverage the latest and most stable technologies to build your vision.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {technologies.map((tech, idx) => (
              <FadeInUp key={idx} delay={0.1 * idx}>
                <HoverCard className="bg-white dark:bg-[#1C2136] p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 h-full">
                  <div className="w-12 h-12 bg-gray-50 dark:bg-dark rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm border border-gray-100 dark:border-gray-800">
                    <tech.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">{tech.category}</h4>
                  <ul className="space-y-3">
                    {tech.list.map((item, i) => (
                      <li key={i} className="flex items-center text-body-color dark:text-gray-400 font-medium">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </HoverCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-indigo-900 z-[-1]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 blur-[120px] rounded-full transform translate-x-1/2 z-[-1]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white opacity-10 blur-[100px] rounded-full transform -translate-x-1/2 translate-y-1/2 z-[-1]"></div>
        
        <div className="container relative z-10">
          <FadeInUp className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-[54px] tracking-tight">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-blue-100 sm:text-xl max-w-3xl mx-auto">
              Whether you're launching a startup, scaling an enterprise, or modernizing existing systems, TechHost has the expertise to turn your vision into reality.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition duration-300 ease-in-out hover:bg-gray-50 hover:scale-105"
                >
                  Get Free Consultation
                </Link>
              </HoverCard>
              <HoverCard>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:border-white"
                >
                  Request a Quote
                </Link>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
