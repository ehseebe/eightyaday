"use client";

import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      width={400}
      height={400}
      {...(props as ImageProps)}
    />
  ),
};

export default function ClientMDX({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
}
