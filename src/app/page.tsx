import Link from "next/link";

import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import { getWorkProjects } from "@/lib/getWorkProjects";
import ImageCard from "@/components/ui/imageCard";

export default function Home() {
  const projects = getWorkProjects();
  const featuredWork = projects.filter((project) =>
    project.data.category.includes("featured"),
  );

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Button variant="default">hello</Button>

        <ModeToggle />

        {featuredWork.map((blog) => (
          <Link href={"/work/" + blog.slug} passHref key={blog.slug}>
            <ImageCard
              imageUrl={blog.data.featuredImage || ""}
              caption={blog.data.title}
            />
            {/* <div className="flex justify-between gap-2 py-2 align-middle">
              <div>
                <h3 className="text-lg font-bold">{blog?.data?.title}</h3>
                <p className="text-gray-400">{blog?.data?.description}</p>
              </div>
              <div className="my-auto text-gray-400">
                <p>{blog.data?.date}</p>
              </div>
            </div> */}
          </Link>
        ))}

        {/* <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        /> */}
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
