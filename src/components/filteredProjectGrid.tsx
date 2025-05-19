"use client";
import { paths } from "@/lib/utils";
import Link from "next/link";
import type { Category, Project } from "@/lib/getProjects";
import { useState } from "react";
import { Button } from "./ui/button";
import { FILTER_CATEGORIES, FILTER_COLOUR } from "@/lib/constants";
import { ImageWithPlaceholder } from "./imageWithPlaceholder";

export function FilteredProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | null>(null);

  return (
    <section
      className="flex h-full w-full flex-col gap-[24px]"
      aria-label="List of projects"
    >
      <div className="flex gap-3 overflow-x-scroll p-4 px-5 py-[24px] md:justify-center [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
        <Button
          variant="noShadow"
          size="sm"
          onClick={() => setFilter(null)}
          className={!filter ? "" : "bg-(--bg"}
        >
          all
        </Button>
        {FILTER_CATEGORIES.map((category) => (
          <Button
            key={category}
            variant="noShadow"
            size="sm"
            onClick={() => {
              setFilter(category);
            }}
            className={
              filter === category ? FILTER_COLOUR[category] : "bg-(--bg)"
            }
          >
            {category}
          </Button>
        ))}
      </div>
      <ul
        className="grid grid-cols-2 gap-[4px] px-5 sm:grid-cols-3 md:grid-cols-4"
        aria-label={filter ? `Projects filtered by: ${filter}` : undefined}
      >
        {projects
          .filter((project) =>
            filter ? project.data.category.includes(filter) : true,
          )
          .map((project) => (
            <li
              key={project.slug}
              aria-label={`Learn more about ${project.data.title}`}
              className="rounded-base overflow-hidden transition duration-250 ease-in-out hover:scale-95 focus-visible:overflow-visible focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <Link
                href={paths.projectDetail(project.slug)}
                className="focus-visible:overflow-visible focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <ImageWithPlaceholder
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
  );
}
