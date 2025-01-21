import Image from 'next/image';
import React from 'react';
import WordFlipping from '../shared/WorkFllipping';
import { Button } from '../ui/button';

const words = [
  <span
    className="text-red-500 bg-red-50 px-2 text-sm rounded-sm"
    key="Developer"
  >
    Developer
  </span>,
  <span
    className="text-green-500 bg-green-50 px-2 text-sm rounded-sm"
    key="Designer"
  >
    Designer
  </span>,
  <span
    className="text-blue-500 bg-blue-50 px-2 text-sm rounded-sm"
    key="Innovator"
  >
    Innovator
  </span>,
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full space-y-8">
        <div className="gap-6 flex justify-between items-center flex-col-reverse md:flex-row">
          <div className="flex-col flex flex-1 space-y-1.5 text-center md:text-left">
            <WordFlipping words={words} />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
              Hi, I&apos;m Dharmendra Sarswat
            </h1>
            <p className="max-w-[600px] md:text-xl py-4 pb-8">
              Building seamless user interfaces and robust back-end
              architectures. Happy reading!
            </p>
            <div>
              <a
                href="https://docs.google.com/document/d/1m7P_msYyhb4DNTXygyiE7IqIzUKZ9-7U/export?format=pdf"
                target="_blank"
              >
                <Button variant="outline" size="sm">
                  Resume
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
                </Button>
              </a>
            </div>
          </div>
          <span className="relative flex shrink-0 overflow-hidden size-56">
            <Image
              className="aspect-square h-full w-full"
              alt="Dharmendra Sarswat"
              src="/hi.webp"
              width={192}
              height={192}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
