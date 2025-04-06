import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PROJECT_PATH } from "./constants";

export type Category =
  | "featured" // pink
  | "illustration" // light blue
  | "work" // blue
  | "comics" // yellow
  | "politics" // purple
  | "kids"; //green

interface ProjectData {
  title: string;
  date?: string;
  description?: string;
  category: Category[];
  featuredImage?: string;
}

export interface Project {
  data: ProjectData;
  content: string;
  slug: string;
}

export const getProjects = (): Project[] => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), ...PROJECT_PATH), {
    withFileTypes: true,
  });

  const projectFiles = dirFiles.filter((file) => file.name.endsWith(".mdx"));

  const projects: Project[] = projectFiles.map((file) => {
    const fileContent = fs.readFileSync(
      path.join(...PROJECT_PATH, file.name),
      "utf-8",
    );

    const { data, content } = matter(fileContent);

    const projectData: ProjectData = {
      title: data.title as string,
      category: data.category as Category[],
      date: data.date as string | undefined,
      description: data.description as string | undefined,
      featuredImage: data.featuredImage as string | undefined,
    };

    const slug = file.name.replace(/.mdx$/, "");

    return { data: projectData, content, slug };
  });

  return projects;
};
