import { mwg } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    threejs,
    mysql,
    excel,
    nodejs,
    pricewise,
    bird,
    react,
    python,
    vscode,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    canva
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: threejs,
        name: "ThreeJS",
        type: "Frontend",
    },
    {
        imageUrl: excel,
        name: "Excel",
        type: "Data Analysis",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: canva,
        name: "Canva",
        type: "Graphic Design",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: vscode,
        name: "Visual Studio Code",
        type: "IDE",
    }
];

export const experiences = [
    {
        title: "Tech Intern",
        company_name: "Mr. White Gloves",
        icon: mwg,
        iconBg: "#000000ff",
        date: "January 2025 - April 2025",
        points: [
            "Engineered a custom Car Data API to automate vehicle data retrieval, reducing backend processes by over 80%.",
            "Collaborated with leadership and product teams to streamline integrations, cutting app latency by 30%.",
            "Conducted end-to-end testing across 6+ app modules, ensuring responsiveness and bug-free workflows.",
            "Improved user experience ratings by 25% by identifying and resolving UI/UX bottlenecks.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AmmarAtNITJSR',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ammaradil105',
    }
];

export const projects = [
    {
        iconUrl: bird,
        theme: 'btn-back-yellow',
        name: 'Flappy Birdy',
        description: 'A classic arcade game where the player guides a pixelated bird through a series of pipes by tapping or clicking. The goal is to achieve the highest possible score while avoiding obstacles.',
        link: 'https://ammaratnitjsr.github.io/flappy-birdy/flappy.html',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Smart Discount Price Allocator',
        description: 'A Python CLI tool that fairly distributes a discount budget among sales agents using customizable, data-driven rules.',
        link: 'https://github.com/AmmarAtNITJSR/Smart-Discount-Allocation',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Linkedin Post Generator',
        description: 'An intelligent tool designed to automate the creation of LinkedIn posts using LLMs.',
        link: 'https://github.com/AmmarAtNITJSR/Linkedin-Post-Generator',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Sign Language Detector',
        description: 'A real-time system for translating American Sign Language (ASL) gestures into text and speech, empowering individuals with speech impairments to communicate effectively.',
        link: 'https://github.com/AmmarAtNITJSR/sign-language-detector',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Chat Circle',
        description: 'A collaborative platform that allows users to create and join chat rooms, facilitating real-time discussions and information sharing.',
        link: 'https://github.com/AmmarAtNITJSR/Chat_Circle',
    }
];