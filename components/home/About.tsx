import React from 'react';
interface AboutContentProps {
  text: string;
  highlight?: boolean;
}

const AboutContent = ({ text, highlight }: AboutContentProps) => {
  return highlight ? (
    <span className="dark:text-white text-black">{text} </span>
  ) : (
    <>{text} </>
  );
};

const aboutContent = [
  {
    text: "I'm passionate about creating dynamic and scalable web applications",
    highlight: true,
  },
  {
    text: 'that solve real-world problems. With',
    highlight: false,
  },
  {
    text: 'over 4 years of experience and expertise in the MERN stack,',
    highlight: true,
  },
  {
    text: 'I focus on delivering clean, efficient code and seamless user experiences.',
    highlight: false,
  },
  {
    text: 'Currently focused on solving complex problems through innovative tech while pushing the boundaries of my knowledge.',
    highlight: true,
  },
  {
    text: "I'm committed to mastering new skills and delivering solutions that not only meet needs but spark transformation and drive meaningful change.",
    highlight: false,
  },
];

export default function About() {
  return (
    <section id="about" className="pt-12">
      <h2 className="text-xl font-bold mb-4">About</h2>
      <div className="prose max-w-full text-balance font-sans text-muted-foreground dark:prose-invert">
        <p>
          {aboutContent.map((content, index) => (
            <AboutContent
              key={index}
              text={content.text}
              highlight={content.highlight}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
