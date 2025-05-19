"use client";
import Link from "next/link";
import { paths } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./modeToggle";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { ImageWithPlaceholder } from "./imageWithPlaceholder";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const renderNavListItems = () => {
    return (
      <>
        <li className="w-full md:w-auto">
          <Button asChild className="w-full md:w-auto">
            <Link href={paths.projects()} onClick={() => setOpen(false)}>
              projects
            </Link>
          </Button>
        </li>
        <li className="w-full md:w-auto">
          <Button asChild className="w-full md:w-auto">
            <Link
              href={paths.shop()}
              onClick={() => setOpen(false)}
              target="_blank"
            >
              <span className="hidden">Opens in new tab</span>
              shop
            </Link>
          </Button>
        </li>
        <li className="w-full md:w-auto">
          <Button asChild className="w-full md:w-auto">
            <Link href={paths.about()} onClick={() => setOpen(false)}>
              about
            </Link>
          </Button>
        </li>
        <li className="w-full md:w-auto">
          <Button asChild className="w-full md:w-auto">
            <Link href={paths.contact()} onClick={() => setOpen(false)}>
              contact
            </Link>
          </Button>
        </li>
        <li>
          <ModeToggle onClick={() => setOpen(false)} />
        </li>
      </>
    );
  };

  return (
    <nav className="border-border dark:border-darkNavBorder dark:bg-secondaryBlack fixed top-0 left-0 z-20 flex h-[88px] w-full justify-center border-b-2 bg-(--bg)">
      <ul className="dark:text-darkText text-text relative flex w-full max-w-(--max-layout) items-center justify-between px-5">
        <li>
          <Link href={paths.home()}>
            <ImageWithPlaceholder
              src="https://eightyaday.s3.ca-central-1.amazonaws.com/logo.png"
              height={125}
              width={125}
              alt="Logo for artist eightyaday, cartoon style illustration of a surly raccoon with his arms crossed"
              aria-label="Go to homepage"
              className="mt-5 -ml-3"
              placeholder="empty"
            />
          </Link>
        </li>
        <div className="hidden w-full items-center justify-end gap-5 md:flex">
          {renderNavListItems()}
        </div>
        <li className="justify-end md:hidden">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button size="icon" variant="default">
                {open ? <X size="100px" /> : <Menu size="100px" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              sideOffset={16}
              collisionPadding={16}
              className="text-mtext bg:white dark:bg-secondaryBlack md:hidden"
            >
              <ul className="flex flex-col items-end gap-5 p-1">
                {renderNavListItems()}
              </ul>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </nav>
  );
}
