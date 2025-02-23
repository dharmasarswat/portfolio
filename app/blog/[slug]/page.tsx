import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = await getPostBySlug(slug);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link type="button" className="text-black dark:text-white" href="/blog">
        <svg
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 mb-4"
        >
          <title />
          <polyline
            points="244 400 100 256 244 112"
            style={{
              fill: 'none',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '48px',
            }}
          />
          <line
            style={{
              fill: 'none',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '48px',
            }}
            x1="120"
            x2="412"
            y1="256"
            y2="256"
          />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-sm text-gray-500">{metadata.date}</p>
      <div
        className="prose prose-lg dark:prose-invert mt-6 "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
