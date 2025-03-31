import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ProjectData {
  title: string;
  date?: string;
  description?: string;
  category: string[]; // define category type
  featuredImage?: string;
}

interface Project {
  data: ProjectData;
  content: string;
  slug: string;
}

export const getWorkProjects = (): Project[] => {
  const filePath = ["src", "app", "work"];

  const dirFiles = fs.readdirSync(path.join(process.cwd(), ...filePath), {
    withFileTypes: true,
  });

  const projectFiles = dirFiles.filter((file) => file.name.endsWith(".mdx"));

  const projects: Project[] = projectFiles.map((file) => {
    const fileContent = fs.readFileSync(
      path.join(...filePath, file.name),
      "utf-8",
    );

    const { data, content } = matter(fileContent);

    const projectData: ProjectData = {
      title: data.title as string,
      category: data.category as string[],
      date: data.date as string | undefined,
      description: data.description as string | undefined,
      featuredImage: data.featuredImage as string | undefined,
    };

    const slug = file.name.replace(/.mdx$/, "");

    return { data: projectData, content, slug };
  });

  return projects;
};
