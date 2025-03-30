import Image from 'next/image';
import React from 'react';
import WordFlipping from '../shared/WorkFllipping';
import { Button } from '../ui/button';

interface RoleWord {
  text: string;
  color: string;
  bgColor: string;
}

const ROLE_WORDS: RoleWord[] = [
  { text: 'Developer', color: 'text-red-500', bgColor: 'bg-red-50' },
  { text: 'Designer', color: 'text-green-500', bgColor: 'bg-green-50' },
  { text: 'Innovator', color: 'text-blue-500', bgColor: 'bg-blue-50' },
];

const roleWordsElements = ROLE_WORDS.map((word) => (
  <span
    key={word.text}
    className={`${word.color} ${word.bgColor} px-2 text-sm rounded-sm`}
  >
    {word.text}
  </span>
));

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-download mx-2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ResumeButton = () => (
  <a
    href="https://docs.google.com/document/d/1m7P_msYyhb4DNTXygyiE7IqIzUKZ9-7U/export?format=pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm">
      Resume
      <DownloadIcon />
    </Button>
  </a>
);

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full space-y-8">
        <div className="gap-6 flex justify-between items-center flex-col-reverse md:flex-row">
          <div className="flex-col flex flex-1 space-y-1.5 text-center md:text-left">
            <WordFlipping words={roleWordsElements} />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
              Hi, I&apos;m Dharmendra Sarswat
            </h1>
            <p className="max-w-[600px] md:text-xl py-4 pb-8">
              Building seamless user interfaces and robust back-end
              architectures. Happy reading!
            </p>
            <div>
              <ResumeButton />
            </div>
          </div>
          <span className="relative flex shrink-0 overflow-hidden size-56">
            <Image
              className="aspect-square h-full w-full"
              alt="Dharmendra Sarswat"
              src="/hi.webp"
              width={192}
              height={192}
              priority
            />
          </span>
        </div>
      </div>
    </section>
  );
}
