import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { HoverCard } from "@/components/AnimatedWrapper";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <HoverCard className="group h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg border border-gray-100 dark:border-gray-800 dark:bg-[#1C2136] relative overflow-hidden rounded-3xl bg-white transition-all duration-300 flex flex-col">
        <Link
          href="/blog-details"
          className="relative block aspect-37/22 w-full overflow-hidden"
        >
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold text-white capitalize shadow-md">
            {tags[0]}
          </span>
          <Image src={image} alt={title || "TechHost technology blog post"} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 flex-grow flex flex-col">
          <h3>
            <Link
              href="/blog-details"
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color dark:text-gray-400 mb-6 border-b pb-6 text-base font-medium dark:border-gray-800 flex-grow">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-gray-800">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-body-color dark:text-gray-500 text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                Date
              </h4>
              <p className="text-body-color dark:text-gray-500 text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </HoverCard>
    </>
  );
};

export default SingleBlog;
