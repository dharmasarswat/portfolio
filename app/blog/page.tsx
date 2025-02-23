import React from 'react';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function blog() {
  const posts = getAllPosts();

  return (
    <section>
      <div>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </div>
      <div>
        {posts.map(({ slug, metadata }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="flex flex-col space-y-1 mb-4 bg-accent p-2"
          >
            <div className="w-full flex flex-col gap-4">
              <h3 className="tracking-tight font-semibold text-xl">
                {metadata.title}
              </h3>
              <p className="tracking-tight text-md">{metadata.excerpt}</p>
              <p className="h-6 text-xs text-muted-foreground">
                {metadata.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
