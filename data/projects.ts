export interface Project {
  image: string;
  name: string;
  duration: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    image: '/kotak-securities-logo.avif',
    name: 'Kotak Securities',
    duration: 'March 2023 - Present',
    description:
      "It's a Trading Platform. Kotak Securities is a Leading Stock Broker in India for over 25 years.",
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
      "It's an e-sourcing Platform. Market Dojo offers an array of capabilities, to help procurement professionals get the most out of their sourcing and supplier engagement activities.",
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
