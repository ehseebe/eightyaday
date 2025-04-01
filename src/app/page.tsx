import ImageCard from "@/components/ui/imageCard";
import { getProjects } from "@/lib/getProjects";
import { paths } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const projects = getProjects();
  const featuredProjects = projects.filter((project) =>
    project.data.category.includes("featured"),
  );

  return (
    <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
      <p className="text-text">hello this is the homepage</p>
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
    </main>
  );
}
