import { Category } from "@/lib/getProjects";
import { Badge } from "./ui/badge";

export function CategoryBadges({ categories }: { categories: Category[] }) {
  return (
    <div className="flex gap-1">
      {categories.map((category) => (
        <Badge variant={category.trim() as Category} key={category}>
          {category}
        </Badge>
      ))}
    </div>
  );
}
