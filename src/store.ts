import { LazyExoticComponent, ReactComponentElement } from 'react';
import { Project, SkillProps, Skill, Mode, Settings, CaseStudy } from './types';
import React, { lazy, Suspense } from 'react';
import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material';

export const projects: Project[] = [
    {
        name: 'Midwest Road Usage Charge Pilot',
        description:
            'The Kansas and Minnesota Departments of Transportation initiated a Road Usage Charge Pilot to explore the feasibility of replacing the gas tax with a road usage charge. The goal was to develop web applications that would facilitate data collection, provide program information, and help participants track their mileage and fuel consumption.',
        languages: ['typescript', 'react', 'css', 'python'],
        date: '',
        finishedLink:
            'https://summary.midwestruc.net/?id=b7ca53ef-8fbf-492f-b68c-c3a228fa22ed',
        caption:
            'Created multiple web apps to help the Kansas Department of Transportation implement their Road Usage Charge Pilot.',
        isVisible: true
    },
    {
        name: 'TidByt-Inspired LED Matrix',
        description:
            "After seeing an advertisement for a LED Display that shows various screens such as the time, current weather conditions, and fun animations. I decided it would be a fun challenge to try to build one myself. I used a Raspberry Pi Pico to control the project.\r\nI also noticed there weren't many resources or guides available to help with a project like this so I started writing up instructions on how to replicate my project and put them on GitHub. This is a current project and I am continually updating it.",
        languages: ['python', 'cpp'],
        tools: ['Git', 'API Implementation', 'Image Processing'],
        date: undefined,
        githubLink: 'https://github.com/npd29/Led-Matrix',
        imageAddress: undefined,
        finishedLink: undefined,
        caption:
            'Recreated a product using an LED Matrix and a Raspberry Pi Pico.',
        isVisible: true
    },
    {
        name: 'Fall Prevention Education iOS Application',
        description:
            "As part of a collaborative team of four, I contributed to the development of an iOS application for the University of Vermont Medical Center. The objective given to us by the medical professionals, was to educate individuals at risk of falling and empower them to adopt safer practices. Using SwiftUI, we blended design and function    component: ReactComponentElement<any, any>;ctors to ensure the app's features were tailored to meet the needs of the end-users.\r\nTo enhance the app's functionality, we implemented efficient parsing of user data and leveraged locally-stored JSON files for seamless storage and retrieval. Throughout the project, we used an Agile approach, working closely with our team to manage workloads effectively and deliver high-quality results within the allocated semester timeframe.",
        languages: ['swift'],
        tools: ['SwiftUI', 'JSON Parsing', 'Agile Workflow'],
        date: '2022-12-01',
        githubLink: 'https://github.com/kr99251/FIRE-App',
        imageAddress: 'stairs.jpg',
        finishedLink: undefined,
        caption:
            'Created an iOS application for the University of Vermont Medical Center to educate fall-prone individuals. ',
        isVisible: true
    },
    {
        name: 'RNTR - Apartment Rating Website',
        description:
            "After going through the difficult process of finding an affordable apartment in Burlington, VT, I came up with an idea for a site that would help to hold landlords accountable in Burlington's captive rental market. I designed and implemented a website that enabled users to rate and review apartments and landlords. Leveraging my skills in HTML, CSS, PHP, and JavaScript, I developed both the front-end and back-end functionalities to ensure a seamless user experience. To enhance the accuracy and reliability of user-provided addresses, I integrated an address standardization API.\r\nTo maximize the website's functionality, I leveraged SQL to execute advanced queries on the underlying database, enabling users to search and filter through the vast repository of apartment and landlord data. Moreover, I devoted efforts to optimize server response times, resulting in improved website performance and enhanced user satisfaction. Additionally, I employed SEO best practices to increase the website's visibility and reach.\r\nUnfortunatly this site is currently decommissioned due to funding limitations.",
        languages: ['html', 'css', 'php', 'javascript'],
        tools: ['API Implementation'],
        date: undefined,
        githubLink: undefined,
        imageAddress: 'burlington.jpg',
        finishedLink: undefined,
        caption:
            'Created a platform that allowed renters to review their landlords and apartments to increase transparency in the rental market.',
        isVisible: true
    },
    {
        name: 'SG-FECC 2023 Website',
        description:
            "As the Senior Media & Communications Chair for the Schlesinger Global Family Enterprise Case Competition, a prestigious global business competition focused on family businesses, I identified the need to enhance our online presence. With participants from 27 countries over the past decade, it was crucial to develop a website that accurately represented the competition's scale and prominence.\r\nDrawing on my web development experience, I quickly mastered WordPress to create a professional and visually appealing website for the current year's competition. This ensured both immediate impact and long-term maintainability, providing a seamless user experience for participants, judges, coordinators, and visitors. I also implemented effective search engine optimization (SEO) techniques, resulting in an estimated 300% increase in website traffic. By optimizing the website's search engine ranking, we significantly expanded the competition's global reach and recognition.\r\nIn addition to the website I came up with new ways to promote the competition and engage participants. ",
        languages: ['html', 'css'],
        tools: ['WordPress', 'Adobe Illustrator'],
        date: '2023-01-11',
        githubLink: undefined,
        imageAddress: 'sgfecc.jpg',
        finishedLink: 'https://site.uvm.edu/sgfecc/',
        caption:
            'Redesigned and implemented an SEO-optimized website, resulting in an estimated 300% increase in page-visits.',
        isVisible: true
    },
    {
        name: 'Evolutionary Robotics Simulated Robot',
        description:
            "Under the guidance of Professor Josh Bongard, I worked on a project to evolve the locomotion capabilities of a simulated robot in various environments. Through evolutionary algorithms, I evolved a neural network to achieve optimal performance. Throughout the semester, I explored different strategies and techniques to continually improve the robot's adaptability and efficiency.",
        languages: ['python'],
        tools: ['PyroSim', 'PyBullet', 'Matplotlib'],
        date: undefined,
        githubLink: 'https://github.com/npd29/Evolutionary-Robotics-CS206',
        imageAddress: undefined,
        finishedLink: undefined,
        caption:
            'Optimized a simulated robot for locomotion in diverse environments using evolutionary algorithms.',
        isVisible: true
    },
    {
        name: 'Custom Compiler',
        description:
            "For my final project in the course on compiler design and construction, I focused on extending the language's capabilities by implementing simple dataclasses. This project was a culmination of the various topics covered throughout the course, which provided a comprehensive understanding of the compilation process.\r\nThroughout the semester, I explored the representation and analysis of code and how to translate a high-level programming language into Intel x86 assembly language. We learned about essential concepts such as register allocation, static type checking, and handling mutable data. The course also emphasized the significance of garbage collection for efficient memory management in compiled languages.\r\nBy extending the language with dataclasses, I not only demonstrated my proficiency in implementing new language features but also showcased my grasp of the entire compilation process. This project solidified my knowledge of code analysis, code generation, and the crucial role of language features in creating powerful and expressive programming languages.",
        languages: ['python'],
        tools: [],
        date: undefined,
        githubLink: 'https://github.com/npd29/CS202-Final',
        imageAddress: undefined,
        finishedLink: undefined,
        caption:
            'Developed a simple compiler enabling translation of high-level programming language into x86 assembly language',
        isVisible: true
    },
    {
        name: 'Automated Plant Care System',
        description:
            'After failing to keep my plants alive, I used an Arduino Nano and an ESP8266 module, along with sensors for soil moisture, light, and air quality, to automate the process of watering plants and create a more nurturing environment.\r\nBy continuously monitoring important factors like soil moisture, light levels, and air quality, my system provided valuable insights into the specific needs of my plants. With the help of a peristaltic pump, the system automatically watered the plants, ensuring they received the appropriate amount of water at the right times.\r\nThis project allowed me to explore the integration of hardware components and programming skills, resulting in a practical solution to improve plant care. In the end, I have less dead plants!',
        languages: ['cpp', 'python'],
        tools: ['Bluetooth', 'Serial Communication'],
        date: '2023-02-28',
        githubLink: undefined,
        imageAddress: undefined,
        finishedLink: undefined,
        caption:
            'Using Arduinos, sensors, and pumps connected via Bluetooth, created a device to keep plants watered and fertilized. ',
        isVisible: true
    },
    {
        name: 'Plants vs. Zombies Recreation',
        description:
            'For this project, I collaborated with an agile team to recreate the immensely popular game, Plants vs. Zombies, using Python and the Python Arcade library. As part of the team, I played a pivotal role in organizing the program flow and backend development. I focused on designing the structure of the game, ensuring seamless transitions between different states and screens. Additionally, I took charge of implementing the spawning mechanics for zombies, creating algorithms that combined randomness with the timing patterns seen in the original game. This resulted in a challenging and engaging gameplay experience.\r\nAnother significant contribution I made was developing a dynamic system for level progression. I designed a flexible framework that allowed for the easy addition and modification of levels, accommodating three waves of zombies per level, each increasing in difficulty. This approach added replayability and a sense of progression for players. By working on this project, I enhanced my skills in game development, algorithm design, and collaboration.',
        languages: ['python'],
        tools: ['Python Arcade'],
        date: undefined,
        githubLink:
            'https://gitlab.uvm.edu/ndesmara/cs205-team-2-final-project',
        imageAddress: undefined,
        finishedLink: undefined,
        caption:
            'Collaborated with a small team to recreate the game Plants vs. Zombies',
        isVisible: true
    },
    {
        name: 'Image Manipulation Program',
        description:
            "I developed an image manipulation program that offers a wide range of features, including mirroring, color inversion, grayscale conversion, and the creation of kaleidoscope effects. Leveraging the capabilities of C++ for fast user input handling, I integrated Python and OpenCV to execute these transformations. The program's functionality was accessed through a command line prompt, providing users with a straightforward and efficient workflow for enhancing their images.\r\n",
        languages: ['cpp', 'python'],
        tools: ['OpenCV'],
        date: undefined,
        githubLink: undefined,
        imageAddress: undefined,
        finishedLink: undefined,
        caption:
            'Developed an image manipulation program with a wide range of features, including mirroring, color inversion, grayscale conversion, and the creation of kaleidoscope effects.',
        isVisible: true
    },
    {
        name: 'Enigma Recreation',
        description:
            'As my first open-ended project during my Introduction to Programming course, I had the ambitious goal of recreating the WWII enciphering machine, Enigma, using Python. Despite being new to programming, I wanted to challenge myself.\n\nThrough self-guided learning, I successfully developed a fully functional version of Enigma. Going beyond the original scope, I even added an additional feature that allowed for the translation of enciphered messages into Morse code. This project not only showcased my ability to tackle complex programming tasks but also demonstrated my dedication to expanding my skill set and exploring innovative solutions.',
        languages: ['python'],
        tools: [],
        date: '2020-01-01',
        githubLink: 'https://github.com/npd29/Enigma',
        imageAddress: 'enigma.jpg',
        finishedLink: undefined,
        caption:
            'Developed a fully-functional version of the WWII German encyphering machine Enigma in Python.',
        isVisible: true
    },
    {
        name: 'BlockDude Game Recreation',
        description:
            'I recreated the game BlockDude, originally found on TI-84 calculators. The objective is to guide a block to the exit door across progressively challenging levels.\r\nTo implement the game, I devised a map creation process. Using an Excel file, I assigned numerical values to each cell, representing different elements like bricks, movable blocks, the exit, and the starting position. This allowed for flexible map design without manual coding. Converting the file to CSV, I parsed it to construct a 2D vector of Block objects. Using class inheritance, I was able to assign each Block relevant properties such as location, type, direction, and carrying status. The grid structure facilitated efficient content checks and swapping operations.',
        languages: ['cpp'],
        tools: ['OpenGL', 'GLUT'],
        date: '2022-05-01',
        githubLink: undefined,
        imageAddress: 'blockdude.jpg',
        finishedLink: undefined,
        caption:
            'Recreated the game BlockDude, originally found on TI-84 calculators',
        isVisible: true
    }
];

export const Skills = {
    python: {
        name: 'Python',
        importance: 5,
        visible: true
    },
    cpp: {
        name: 'C++',
        importance: 4,
        visible: true
    },
    swift: {
        name: 'Swift',
        importance: 3,
        visible: true
    },
    html: {
        name: 'HTML',
        importance: 3,
        visible: true
    },
    css: {
        name: 'CSS',
        importance: 3,
        visible: true
    },
    javascript: {
        name: 'JavaScript',
        importance: 3,
        visible: true
    },
    php: {
        name: 'PHP',
        importance: 2,
        visible: true
    },
    sql: {
        name: 'SQL',
        importance: 2,
        visible: false
    },
    azure: {
        name: 'Azure',
        importance: 2,
        visible: true
    },
    git: {
        name: 'Git',
        importance: 3,
        visible: true
    },
    aws: {
        name: 'AWS',
        importance: 2,
        visible: true
    },
    typescript: {
        name: 'TypeScript',
        importance: 2,
        visible: true
    },
    react: {
        name: 'React',
        importance: 2,
        visible: true
    },
    x86: {
        name: 'X86 Assembly',
        importance: 2,
        visible: false
    }
} as const;

export const defaultSettings: { [key in Mode]: Settings } = {
    [Mode.FLOW]: {
        delta: 0.0002,
        angleRange: Math.PI * 2 * 1.5,
        noiseDetail: 3,
        falloff: 0.1,
        followFactor: 0.5,
        maxspeed: 4,
        numParticles: 500,
        opacity: 10
    },
    [Mode.PARTICLE]: {
        delta: 0.00001,
        angleRange: Math.PI * 2 * 1.5,
        noiseDetail: 1,
        falloff: 0.1,
        followFactor: 0.25,
        maxspeed: 2,
        numParticles: 1000,
        opacity: 5
    },
    [Mode.WAVE]: {
        delta: 0.00001,
        angleRange: Math.PI * 2 * 1.5,
        noiseDetail: 1,
        falloff: 0.1,
        followFactor: 0.2,
        maxspeed: 8,
        numParticles: 500,
        opacity: 5
    }
};
