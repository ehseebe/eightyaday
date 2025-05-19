import { Project } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Link from "next/link";
import { ImageWithPlaceholder } from "./imageWithPlaceholder";

export function FeaturedGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-[4px] sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <Link
          href={paths.projectDetail(project.slug)}
          key={project.slug}
          aria-label={`Learn more about ${project.data.title}`}
          className="rounded-base overflow-hidden transition duration-250 ease-in-out hover:scale-95 focus-visible:overflow-visible focus-visible:ring-3 focus-visible:ring-black focus-visible:ring-offset-3"
        >
          <ImageWithPlaceholder
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
