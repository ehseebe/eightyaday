import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import ClientMDX from "@/components/clientMdx";
import { PROJECT_PATH } from "@/lib/constants";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), ...PROJECT_PATH));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

async function getProject(slug: string) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), ...PROJECT_PATH, slug + ".mdx"),
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
  const post = await getProject(slug);

  return (
    <main className="row-start-2 flex flex-col items-center justify-center sm:items-start">
      <div className="flex max-w-(--max-content) flex-col gap-[24px]">
        <ClientMDX code={post.code} />
      </div>
    </main>
  );
}
