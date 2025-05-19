"use client";
import { paths } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import type { Category, Project } from "@/lib/getProjects";
import { useState } from "react";
import { Button } from "./ui/button";
import { FILTER_CATEGORIES, FILTER_COLOUR } from "@/lib/constants";

export function FilteredProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | null>(null);
  return (
    <section className="flex h-full gap-[24px]" aria-label="List of projects">
      <div className="sticky top-0 flex h-auto flex-col gap-5 px-5">
        {FILTER_CATEGORIES.map((category) => (
          <Button
            key={category}
            variant="noShadow"
            size="sm"
            onClick={() => setFilter(category)}
            className={FILTER_COLOUR[category]}
          >
            {category}
          </Button>
        ))}
        <Button
          variant="noShadow"
          size="sm"
          onClick={() => setFilter(null)}
          className="bg-(--white)"
        >
          all
        </Button>
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
  );
}
