import { FeaturedGrid } from "@/components/featuredGrid";

import { getProjects } from "@/lib/getProjects";
import Image from "next/image";

export default function Home() {
  const projects = getProjects();
  const featuredProjects = projects.filter((project) =>
    project.data.category.includes("featured"),
  );

  return (
    <main className="row-start-2 flex max-w-(--max-layout) flex-col items-center gap-[32px] sm:items-start">
      <h1 className="sr-only">portfolio for artist eightyaday</h1>
      <Image
        src="https://eightyaday.s3.ca-central-1.amazonaws.com/splash.png"
        height={400}
        width={1100}
        alt="Illustration of the name eightyaday in bubble letters of alternating lighter and darker pastel blues. The 'y' has a little pink and yellow rat chewing on it."
      />
      <section>
        <FeaturedGrid projects={featuredProjects} />
      </section>
    </main>
  );
}
