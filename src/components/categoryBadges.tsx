import { Category } from "@/lib/getProjects";
import { Badge } from "./ui/badge";

export function CategoryBadges({ categories }: { categories: Category[] }) {
  return (
    <div className="flex gap-1">
      {categories.map((category) => (
        <Badge
          variant={category.trim() as Category}
          className="font-semibold"
          key={category}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
