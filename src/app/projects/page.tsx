import ImageCard from "@/components/ui/imageCard";
import { getProjects } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Link from "next/link";

export default function Projects() {
  const projects = getProjects();
  const featuredProjects = projects.filter((project) =>
    project.data.category.includes("featured"),
  );

  return (
    <main className="row-start-2 flex max-w-(--max-layout) flex-col items-center justify-center gap-[32px] sm:items-start">
      <section className="flex flex-wrap gap-8">
        {featuredProjects.map((project) => (
          <Link
            href={paths.projectDetail(project.slug)}
            passHref
            key={project.slug}
          >
            <ImageCard
              imageUrl={project.data.featuredImage || ""}
              caption={project.data.title}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
