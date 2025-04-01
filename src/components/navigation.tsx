import Link from "next/link";
import { cn, paths } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./modeToggle";

export function Navigation() {
  return (
    <nav className="border-border dark:border-darkNavBorder dark:bg-secondaryBlack fixed top-0 left-0 z-20 flex h-[88px] w-full border-b-4 bg-white px-5">
      <ul className="dark:text-darkText text-text flex w-full items-center">
        <li>
          <Link href={paths.home()}>eightyaday</Link>
        </li>

        <div className="flex w-full items-center justify-end gap-6">
          <li>
            <Button asChild>
              <Link href={paths.projects()}>projects</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href={paths.about()}>about</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href={paths.contact()}>contact</Link>
            </Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </div>
      </ul>
    </nav>
  );
}
