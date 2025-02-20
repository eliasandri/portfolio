import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBook, FaDumbbell, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import books from '@/public/books.png'
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Sc. in Business Administration with Computer Science Minor",
    location: "University of Reykjavík, Reykjavík, Iceland",
    description:
      "Graduated with distinction, recognized as a top student in the Business and Economics Department with an average grade of 9.25 (Fall 2017) and 9.3 (Spring 2018).",
    icon: React.createElement(LuGraduationCap),
    date: "August 2016 – June 2019",
  },
  {
    title: "Specialist in Financial Department",
    location: "Íslandsbanki, Kópavogur, Iceland",
    description:
      "Worked on automating various accounting tasks and supporting the development of FINREP reports while improving data quality within the bank's financial operations.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 – August 2021",
  },
  {
    title: "M.Sc. in Finance",
    location: "ESADE, Barcelona, Spain",
    description:
      "Completed a Master’s degree in Finance at one of Europe’s top business schools, gaining expertise in financial management, corporate finance, and investments.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 – July 2022",
  },
  {
    title: "Corporate Finance Specialist",
    location: "Mar Advisors, Reykjavík, Iceland",
    description:
      "Specialized in financial analysis and valuations, delivering in-depth financial presentations and contributing to strategic decision-making for corporate clients.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 – August 2023",
  },
  {
    title: "Associate in Financial Consulting",
    location: "Deloitte Iceland, Kópavogur, Iceland",
    description:
      "Conducted financial analysis, valuations, and investor presentations for a broad client base, enhancing financial strategies and advising clients on various financial matters.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 – April 2024",
  },
  {
    title: "Financial Management Specialization",
    location: "University of Illinois Urbana-Champaign (Coursera), Reykjavík, Iceland",
    description:
      "Completed a 7-course specialization covering key areas of financial accounting, corporate finance, and investment management",
    icon: React.createElement(FaBook),
    date: "July 2024 – October 2024",
  },
  {
    title: "Frontend Programming Courses",
    location: "Code with Mosh, Reykjavík, Iceland",
    description:
      "Completed a series of 6 courses covering JavaScript, TypeScript, React, and Next.js, currently working on a personal website project",
    icon: React.createElement(FaReact),
    date: "November 2024 – January 2025",
  },
  {
    title: "Fitness Coach",
    location: "Mjölnir & Grandi 101, Reykjavík, Iceland",
    description:
      "I coach a variety of fitness classes, including high-intensity functional training, strength-focused sessions, Olympic weightlifting, and beginner-friendly functional fitness classes that emphasize fundamental movements without complex lifts or gymnastics. In addition to these group classes, I offer personalized training sessions tailored to each discipline, ensuring individualized attention and support to help clients achieve their specific fitness goals.",
    icon: React.createElement(FaDumbbell),
    date: "January 2023 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Reading Journey",
    description:
      "This page features books I've read, along with my personal reflections and insights. It's where I share my literary journey and the lessons I've learned.",
    tags: ["React", "TailWind", "Typescript", "Chakra UI"],
    imageUrl: books,
    url: "https://personal-site-phi-livid.vercel.app/",
  },
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
   "SQL",
  "Python",
    "Framer Motion",
  "Financial Analysis",
  "Valuations",
  "Financial Reporting",
  "Corporate Finance",
  "Financial Modeling",
  "Investment Management",
  "Accounting",
  "Financial Consulting",
  "Financial Automation",
  "Data Analysis",
  "Financial Strategy",
] as const;
