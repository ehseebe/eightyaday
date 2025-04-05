import { FeaturedGrid } from "@/components/featuredGrid";

import { getProjects } from "@/lib/getProjects";

export default function Home() {
  const projects = getProjects();

  return (
    <main className="row-start-2 flex max-w-(--max-layout) flex-col items-center gap-[32px] sm:items-start">
      <section>
        <FeaturedGrid projects={projects} />
      </section>
    </main>
  );
}
