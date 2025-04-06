import ImageCard from "@/components/ui/imageCard";
import { getProjects } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="row-start-2 flex max-w-(--max-layout) flex-col items-center justify-center gap-[32px] sm:items-start">
      <section className="flex flex-wrap gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
          {projects.map((project) => (
            <Link
              href={paths.projectDetail(project.slug)}
              key={project.slug}
              aria-label={`Learn more about ${project.data.title}`}
            >
              <Image
                src={project.data.featuredImage || ""}
                alt={`Featured image for ${project.data.title}`}
                height={300}
                width={300}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
