import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { FadeInUp } from "@/components/AnimatedWrapper";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-50 dark:bg-[#181C31] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <FadeInUp>
          <div className="text-center mb-6">
             <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
               Insights & Updates
             </span>
          </div>
          <SectionTitle
            title="Latest from Our Tech Blog"
            paragraph="Stay updated with the latest trends in software development, AI advancements, and digital transformation."
            center
          />
        </FadeInUp>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, idx) => (
            <FadeInUp key={blog.id} delay={idx * 0.1} className="w-full">
              <SingleBlog blog={blog} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
