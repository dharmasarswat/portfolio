import React from 'react';

export default function About() {
  return (
    <section id="about" className="pt-12">
      <h2 className="text-xl font-bold mb-4">About</h2>
      <div className="prose max-w-full text-balance font-sans text-muted-foreground dark:prose-invert">
        <p>
          <span className="dark:text-white text-black">
            I&apos;m passionate about creating dynamic and scalable web
            applications
          </span>{' '}
          that solve real-world problems. With{' '}
          <span className="dark:text-white text-black">
            over 4 years of experience and expertise in the MERN stack,
          </span>{' '}
          I focus on delivering clean, efficient code and seamless user
          experiences.{' '}
          <span className="dark:text-white text-black">
            Currently focused on solving complex problems through innovative
            tech while pushing the boundaries of my knowledge.
          </span>{' '}
          I&apos;m committed to mastering new skills and delivering solutions
          that not only meet needs but spark transformation and drive meaningful
          change. real difference.
        </p>
      </div>
    </section>
  );
}
