import type { Category } from "./getProjects";

export const PROJECT_PATH = ["src", "app", "projects"];

export const FILTER_CATEGORIES: Category[] = [
  "illustration",
  "mural",
  "print",
  "tactile",
  "work",
];

export const FILTER_COLOUR: { [key in Category]: string } = {
  featured: "",
  illustration: "bg-(--light-blue)",
  work: "bg-(--blue)",
  mural: "bg-(--purple)",
  tactile: "bg-(--yellow)",
  print: "bg-(--green)",
};
