import { FilteredProjectGrid } from "@/components/filteredProjectGrid";
import { getProjects } from "@/lib/getProjects";

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="flex min-h-[90vh] max-w-(--max-layout) gap-[32px] py-6">
      <FilteredProjectGrid projects={projects} />
    </main>
  );
}
