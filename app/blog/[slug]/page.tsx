import { getPostBySlug, getAllPosts } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { metadata, content: rawContent } = getPostBySlug(params.slug);
  const processedContent = await remark().use(html).process(rawContent);
  const content = processedContent.toString();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-sm text-gray-500">{metadata.date}</p>
      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
