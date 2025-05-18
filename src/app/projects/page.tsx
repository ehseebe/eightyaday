import ImageCard from "@/components/ui/imageCard";
import { getProjects } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="flex min-h-[90vh] max-w-(--max-layout) flex-col items-center justify-center gap-[32px] py-6">
      <section className="flex flex-wrap gap-8" aria-label="List of projects">
        <ul className="grid grid-cols-2 gap-[4px] px-5 sm:grid-cols-4 md:grid-cols-6">
          {projects.map((project) => (
            <li
              key={project.slug}
              aria-label={`Learn more about ${project.data.title}`}
              className="rounded-base overflow-hidden transition duration-250 ease-in-out hover:scale-95"
            >
              <Link href={paths.projectDetail(project.slug)}>
                <Image
                  src={project.data.featuredImage || ""}
                  alt={`Featured image for ${project.data.title}`}
                  height={300}
                  width={300}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
