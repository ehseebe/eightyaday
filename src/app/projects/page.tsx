import ImageCard from "@/components/ui/imageCard";
import { getProjects } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Link from "next/link";

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
      {projects.map((project) => (
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
    </main>
  );
}
