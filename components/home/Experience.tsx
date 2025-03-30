import React from 'react';
import { Badge } from '../ui/Badge';
import { TimelineItem } from '../ui/TimelineItem';
import { educations, experiences } from '@/data/experience';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xl font-bold mt-4">{title}</h2>
);

const Header = () => (
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <Badge>Experience &amp; Education</Badge>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Experience &amp; Education
      </h2>
      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Here&apos;s a summary of my professional journey and educational
        background in software development.
      </p>
    </div>
  </div>
);

const ExperienceList = ({ items }: { items: typeof experiences }) => (
  <>
    <SectionTitle title="Experience" />
    {items.map((item) => (
      <TimelineItem
        key={item.company}
        title={item.company}
        subtitle={item.position}
        date={item.duration}
        avatar={item.company.at(0) || ''}
      />
    ))}
  </>
);

const EducationList = ({ items }: { items: typeof educations }) => (
  <>
    <SectionTitle title="Education" />
    {items.map((item) => (
      <TimelineItem
        key={item.which}
        title={item.which}
        subtitle={`${item.organization} - ${item.location}`}
        description={`${item.stream} | Score: ${item.score}`}
        date={item.duration}
        avatar={item.which.at(0) || ''}
      />
    ))}
  </>
);

export default function Experience() {
  return (
    <section id="work" className="pt-12">
      <div className="flex min-h-0 flex-col gap-y-3">
        <Header />
        <ExperienceList items={experiences} />
        <EducationList items={educations} />
      </div>
    </section>
  );
}
