import { Project } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function FeaturedGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <Link
          href={paths.projectDetail(project.slug)}
          key={project.slug}
          aria-label={`Learn more about ${project.data.title}`}
        >
          <Image
            src={project.data.featuredImage || ""}
            alt={`Featured image for ${project.data.title}`}
            height={400}
            width={400}
          />
        </Link>
      ))}
    </div>
  );
}
