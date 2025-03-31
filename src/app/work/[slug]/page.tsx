import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import ClientMDX from "@/components/clientMdx";

const workFilePath = ["src", "app", "work"];

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), ...workFilePath));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

async function getPost(slug: string) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), ...workFilePath, slug + ".mdx"),
    "utf-8",
  );

  const { code, frontmatter } = await bundleMDX({
    source: markdownFile,
  });

  return {
    frontMatter: frontmatter,
    slug,
    code,
  };
}

interface Page {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Page) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div>
      <h1>{post.frontMatter.title}</h1>
      <ClientMDX code={post.code} />
    </div>
  );
}
