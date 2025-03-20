import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "PodScout",
    description:
      "My planned personal project to dive deeper into Next.js development. I'm designing it as a podcast discovery application to help users find new podcasts based on their interests and preferences. In future, I plan to extend it into a complete podcast player with streaming capabilities. This project allows me to build a more complex application as my Next.js skills advance.",
    techStack: ["Next.js", "Typescript", "Mantine"],
    completed: false,
  },
  {
    images: ["https://placehold.co/100", "https://placehold.co/100"],
    title: "My Portfolio",
    description:
      "This website that I created to showcase my skills, experience, and projects to potential employers.",
    techStack: ["Next.js", "Typescript", "Mantine", "Tailwind"],
    completed: false,
  },
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "Filio",
    description:
      "Filio is a file tracking system built using VB.NET, GUNA UI, and MySQL for our software engineering project. The application was deployed at the Provincial Planning and Development Office (PPDO) of the Provincial Government of Davao del Norte.",
    techStack: ["VB.NET", "Winforms", "Guna Framework", "MySQL"],
    link: "https://github.com/leonardloja/FilioSystem",
    completed: true,
  },
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "Animeo",
    description:
      "Animeo is an anime watching app I built using Flutter for my college project. This was my first mobile app, which I taught myself how to create by learning Flutter on my own.",
    techStack: ["Flutter", "Dart", "SQLite"],
    link: "https://github.com/leonardloja/animeo",
    completed: true,
  },
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "EasyTask",
    description:
      "EasyTask is a task management application I worked on during my OJT using Angular. This was my first experience with a frontend framework.",
    techStack: ["Angular", "PrimeNG"],
    link: "",
    completed: true,
  },
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "Barangay Management System",
    description:
      "This was my first VB.NET application, built for our course project in college to help local government units manage their community information and services.",
    techStack: ["VB.NET", "Winforms", "Guna Framework", "MySQL"],
    link: "https://github.com/leonardloja/brgy_mgt_system",
    completed: true,
  },
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "Dwello",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor silorem ipsum dolor sit amet lorem ipsum dolor sit amet t amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    techStack: ["Next.js", "Typescript", "Clerk Auth", "Supabase"],
    link: "https://github.com/leonardloja/dwello-web",
    completed: true,
  },
  {
    images: [
      "https://placehold.co/100",
      "https://placehold.co/100",
      "https://placehold.co/100",
    ],
    title: "Technical Foundation Skills",
    description:
      "While not a standalone project, these skills represent my technical environment knowledge that supports all my development work.",
    techStack: ["Linux", "Command Line", "Zsh", "WSL", "Neovim"],
    completed: true,
  },
];
