import { FeaturedGrid } from "@/components/featuredGrid";

import { getProjects } from "@/lib/getProjects";
import Image from "next/image";

export default function Home() {
  const projects = getProjects();
  const featuredProjects = projects.filter((project) =>
    project.data.category.includes("featured"),
  );

  return (
    <main className="flex min-h-[90vh] max-w-(--max-content) flex-col items-center justify-center gap-[32px] px-5 py-6">
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
