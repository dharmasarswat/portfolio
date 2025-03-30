import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground">
    <div className="aspect-video relative">
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-4">
      <div className="flex justify-between flex-col">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <span className="text-sm text-muted-foreground">
          {project.duration}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project →
        </Link>
      )}
    </div>
  </div>
);

export default function Work() {
  return (
    <section id="work" className="pt-12">
      <div className="flex min-h-0 flex-col gap-y-3">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
