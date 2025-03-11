import Image from 'next/image';
import React from 'react';

const projects = [
  {
    image: '/kotak-securities-logo.avif',
    name: 'Kotak Securities',
    duration: 'March 2023 - Present',
    description:
      'It’s a Trading Platform. Kotak Securities is a Leading Stock Broker in India for over 25 years.',
    tags: [
      'ReactJS',
      'Redux',
      'Git',
      'NodeJS',
      'ExpressJS',
      'Azure',
      'Jest',
      'React Testing Library',
    ],
    link: 'https://www.kotaksecurities.com/',
  },
  {
    image: '/market-dojo-logo.png',
    name: 'Market Dojo',
    duration: 'Feb 2021 - Feb 2023',
    description:
      'It’s an e-sourcing Platform. Market Dojo offers an array of capabilities, to help procurement professionals get the most out of their sourcing and supplier engagement activities.',
    tags: [
      'ReactJS',
      'Redux',
      'Redux Toolkit',
      'Jest',
      'Enzyme',
      'React Testing Library',
    ],
    link: 'https://www.kotaksecurities.com/',
  },
  {
    image: '/flats-and-faltmates-logo.png',
    name: 'Flats & Flats mates',
    duration: 'Nov 2020 - Jan 2021',
    description:
      'Flats and Flatmates is a community of like-minded people looking to find affordable flats and flatmates who can share a co-living space with someone. You can find your flat & Flatmates in a single click.',
    tags: ['ReactJS', 'Bit Bucket', 'NodeJS', 'ExpressJS'],
    link: 'https://flatsandflatmates.co.in/',
  },
  {
    image: '/animal-feed-logo.webp',
    name: 'Animal Feed',
    duration: 'Aug 2020 - Oct 2020',
    description:
      'ANIMAL FEED is dedicated to farmers, although designed as a B2C and Consumer brand platform with the aim to educate and hire customers.',
    tags: ['ReactJS', 'Bit Bucket', 'NodeJS', 'ExpressJS'],
    link: 'http://dharmasarswat.github.io/animalFeed',
  },
  {
    image: '/petzz-logo.png',
    name: 'Petzz Store',
    duration: 'May 2020 - Oct 2021',
    description:
      'An online marketplace for pets and pet-related products, connecting pet owners with trusted sellers for products, services, and adoption.',
    tags: ['Next.js', 'Next Auth', 'Tailwind', 'Git', 'Javascript'],
    link: 'https://petzz.in/',
  },
  {
    image: '/covid19-logo.webp',
    name: 'Covid 19 India',
    duration: 'May 2020 - July 2021',
    description:
      'Covid 19 India is a portal where you can get informaton about total number of active, recovered and dead patients of COVID19',
    tags: ['HTML5', 'CSS3', 'Git', 'Javascript'],
    link: 'https://dharmasarswat.github.io/covid19tracker.github.io/',
  },
];

export default function Work() {
  return (
    <section id="work" className="pt-12">
      <div className="flex min-h-0 flex-col gap-y-3">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I build projects from 0 to 1, turning ideas into reality. Take a
              look at some of my favorite projects below.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            >
              <Image
                alt={project.name}
                loading="lazy"
                width="500"
                height="300"
                decoding="async"
                className="h-40 w-full overflow-hidden object-cover object-center bg-accent"
                src={project.image}
              />
              <div className="flex flex-col px-2">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight mt-1 text-base">
                    {project.name}
                  </h3>
                  <time className="font-sans text-xs">{project.duration}</time>
                  <div className="hidden font-sans text-xs underline print:visible"></div>
                  <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&amp;>*]:!leading-tight">
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&amp;>*]:!leading-tight">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <div
                      key={`${project.name}_${tag}`}
                      className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center pt-2 px-2 pb-2">
                <div className="flex flex-row flex-wrap items-start gap-1">
                  <a target="_blank" href={project.link}>
                    <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe size-3"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Website
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
