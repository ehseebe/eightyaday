"use client";

import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CategoryBadges } from "./categoryBadges";

const components: MDXComponents = {
  blockquote: ({ children }) => {
    const title = children[1];
    const categories = children[3];
    const categoryLabels = categories?.props.children.split(",");
    const content = children[5];

    return (
      <section>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              <CategoryBadges categories={categoryLabels} />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>{content}</CardDescription>
          </CardContent>
        </Card>
      </section>
    );
  },
  img: (props) => {
    return (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        width={400}
        height={400}
        {...(props as ImageProps)}
        alt=""
      />
    );
  },
};

export default function ClientMDX({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
}
