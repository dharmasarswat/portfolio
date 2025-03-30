export interface Experience {
  company: string;
  duration: string;
  position: string;
}

export interface Education {
  which: string;
  organization: string;
  location: string;
  score: string;
  stream: string;
  duration: string;
}

export const experiences: Experience[] = [
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

export const educations: Education[] = [
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
