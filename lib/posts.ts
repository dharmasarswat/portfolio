import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

type Post = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt: string;
    image?: string;
  };
  content: string;
};

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ''); // Remove .md extension
    const filePath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents); // Parse front matter

    return { slug, metadata: data, content } as Post;
  });
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  return { metadata: data, content: processedContent.toString() } as Post;
}
