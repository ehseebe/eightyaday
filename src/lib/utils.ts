import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const paths = {
  about() {
    return "/about";
  },
  contact() {
    return "/contact";
  },
  home() {
    return "/";
  },
  projectDetail(slug: string, query?: string) {
    return `/projects/${slug}${query ? `?${query}` : ""}`;
  },
  projects(query?: string) {
    return `/projects${query ? `?${query}` : ""}`;
  },
  shop() {
    return "https://shop.eightyaday.com/collections/all";
  },
  instagram() {
    return "https://www.instagram.com/eightyaday/";
  },
  email() {
    return "mailto:eightyaday@gmail.com";
  },
};
