import React from 'react';
import {
  HomeIcon,
  BlogIcon,
  GithubIcon,
  LinkedinIcon,
  ThemeIcon,
} from '@/components/icons';

export const navItems = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    link: '/',
  },
  {
    icon: <BlogIcon />,
    label: 'Blog',
    link: '/blog',
  },
  {
    icon: <GithubIcon />,
    label: 'Github',
    link: 'https://github.com/dharmasarswat',
  },
  {
    icon: <LinkedinIcon />,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/dharmendrasarswat',
  },
  {
    icon: <ThemeIcon />,
    label: 'Theme',
  },
] as const;

export type NavItem = (typeof navItems)[number];
