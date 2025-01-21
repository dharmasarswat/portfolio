import React from 'react';

const experiences = [
  {
    company: 'Logic Loop Pvt. Ltd., Mumbai',
    duration: 'March 2023 - Current',
    position: 'Team Lead/ MERN Stack Developer',
  },
  {
    company: 'Cyber Infrastructure, Indore',
    duration: 'Feb 2021 - Feb 2023',
    position: 'MERN Stack Developer',
  },
  {
    company: 'Go Gaga, Bangalore',
    duration: 'Aug 2020 - Jan 2021',
    position: 'Trainee MERN Stack developer',
  },
  {
    company: 'Kanishka IT, Gwalior',
    duration: 'Oct 2019 - Jul 2020',
    position: 'Trainee MERN Stack developer',
  },
];

const educations = [
  {
    which: 'Graduation',
    organization: 'ITM Group of Instutions',
    location: 'Gwalior, M.P, India',
    score: '6.87 CGPA',
    stream: 'Computer Science Engineering',
    duration: '2017 - 2021',
  },
  {
    which: 'Intermediate',
    organization: 'S.S.B.B Sarswati Vidya Mandir',
    location: 'Firozabad, U.P, India',
    score: '87%',
    stream: 'Science, Maths',
    duration: '2015 - 2016',
  },
  {
    which: 'High School',
    organization: 'S.S.B.B Sarswati Vidya Mandir',
    location: 'Firozabad, U.P, India',
    score: '9.4 CGPA',
    stream: 'NA',
    duration: '2013 - 2014',
  },
];

export default function Experience() {
  return (
    <section id="work" className="pt-12">
      <div className="flex min-h-0 flex-col gap-y-3">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Experience &amp; Education
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Experience &amp; Education
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here&apos;s a summary of my professional journey and educational
              background in software development.
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4">Experience</h2>
        {experiences.map((experience) => (
          <div key={experience.company} className="block cursor-pointer">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    {experience.company.at(0)}
                  </span>
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      {experience.company}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {experience.duration}
                    </div>
                  </div>
                  <div className="font-sans text-xs">{experience.position}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h2 className="text-xl font-bold mt-4">Education</h2>
        {educations.map((education) => (
          <div key={education.which} className="block cursor-pointer">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    {education.which.at(0)}
                  </span>
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      {education.which}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {education.duration}
                    </div>
                  </div>
                  <div className="font-sans text-xs">
                    {education.organization} - {education.location}
                  </div>
                  <div className="font-sans text-xs">
                    {education.stream} | Score: {education.score}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
