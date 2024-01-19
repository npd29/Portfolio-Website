export const projects = {
    1: {
        fldName: 'TidByt-Inspired LED Matrix',
        fldDescription:
            "After seeing an advertisement for a LED Display that shows various screens such as the time, current weather conditions, and fun animations. I decided it would be a fun challenge to try to build one myself. I used a Raspberry Pi Pico to control the project.\r\n\r\nI also noticed there weren't many resources or guides available to help with a project like this so I started writing up instructions on how to replicate my project and put them on GitHub. This is a current project and I am continually updating it.",
        fldLanguages: ['Python', 'C++'],
        fldTools: ['Git', 'API Implementation', 'Image Processing'],
        fldDate: null,
        fldCodeLink: 'https://github.com/npd29/Led-Matrix',
        fldImageAddress: null,
        fldFinishedLink: null,
        fldCaption:
            'Recreated a product using an LED Matrix and a RaspberryPi Pico.'
    },
    2: {
        fldName: 'Fall Prevention Education iOS Application',
        fldDescription:
            "As part of a collaborative team of four, I contributed to the development of an iOS application for the University of Vermont Medical Center. The objective given to us by the medical professionals, was to educate individuals at risk of falling and empower them to adopt safer practices. Using SwiftUI, we blended design and functionality while actively involving the doctors to ensure the app's features were tailored to meet the needs of the end-users.\r\n<br><br>\r\nTo enhance the app's functionality, we implemented efficient parsing of user data and leveraged locally-stored JSON files for seamless storage and retrieval. Throughout the project, we used an Agile approach, working closely with our team to manage workloads effectively and deliver high-quality results within the allocated semester timeframe.",
        fldLanguages: ['Swift'],
        fldTools: ['SwiftUI', 'JSON Parsing', 'Agile Workflow'],
        fldDate: '2022-12-01',
        fldCodeLink: 'https://github.com/kr99251/FIRE-App',
        fldImageAddress: 'stairs.jpg',
        fldFinishedLink: null,
        fldCaption:
            'Created an iOS application for the University of Vermont Medical Center to educate fall-prone individuals. '
    },
    3: {
        fldName: 'RNTR - Apartment Rating Website',
        fldDescription:
            "After going through the difficult process of finding an affordable apartment in Burlington, VT, I came up with an idea for a site that would help to hold landlords accountable in Burlington's captive rental market. I designed and implemented a website that enabled users to rate and review apartments and landlords. Leveraging my skills in HTML, CSS, PHP, and JavaScript, I developed both the front-end and back-end functionalities to ensure a seamless user experience. To enhance the accuracy and reliability of user-provided addresses, I integrated an address standardization API.\r\n<br><br>\r\nTo maximize the website's functionality, I leveraged SQL to execute advanced queries on the underlying database, enabling users to search and filter through the vast repository of apartment and landlord data. Moreover, I devoted efforts to optimize server response times, resulting in improved website performance and enhanced user satisfaction. Additionally, I employed SEO best practices to increase the website's visibility and reach.\r\n<br><br>\r\nUnfortunatly this site is currently decommissioned due to funding limitations.",
        fldLanguages: ['HTML', 'CSS', 'PHP', 'JavaScript'],
        fldTools: ['API Implementation'],
        fldDate: null,
        fldCodeLink: null,
        fldImageAddress: 'burlington.jpg',
        fldFinishedLink: null,
        fldCaption:
            'Created a platform that allowed renters to review their landlords and apartments to increase transparency in the rental market.'
    },
    4: {
        fldName: 'SG-FECC 2023 Website',
        fldDescription:
            "As the Senior Media & Communications Chair for the Schlesinger Global Family Enterprise Case Competition, a prestigious global business competition focused on family businesses, I identified the need to enhance our online presence. With participants from 27 countries over the past decade, it was crucial to develop a website that accurately represented the competition's scale and prominence.\r\n<br><br>\r\nDrawing on my web development experience, I quickly mastered WordPress to create a professional and visually appealing website for the current year's competition. This ensured both immediate impact and long-term maintainability, providing a seamless user experience for participants, judges, coordinators, and visitors. I also implemented effective search engine optimization (SEO) techniques, resulting in an estimated 300% increase in website traffic. By optimizing the website's search engine ranking, we significantly expanded the competition's global reach and recognition.\r\n<br><br>\r\nIn addition to the website I came up with new ways to promote the competition and engage participants. ",
        fldLanguages: ['HTML', 'CSS'],
        fldTools: ['WordPress', 'Adobe Illustrator'],
        fldDate: '2023-01-11',
        fldCodeLink: null,
        fldImageAddress: 'sgfecc.jpg',
        fldFinishedLink: 'https://site.uvm.edu/sgfecc/',
        fldCaption:
            'Redesigned and implemented an SEO-optimized website, resulting in an estimated 300% increase in page-visits.'
    },
    5: {
        fldName: 'Evolutionary Robotics Simulated Robot',
        fldDescription:
            "Under the guidance of Professor Josh Bongard, I actively participated in a project aimed at enhancing the locomotion capabilities of a simulated robot in various environments. By employing evolutionary algorithms, I focused on evolving a neural network to achieve optimal performance. Throughout the semester, I explored different strategies and techniques to continually improve the robot's adaptability and efficiency.",
        fldLanguages: ['Python'],
        fldTools: ['PyroSim', 'PyBullet', 'Matplotlib'],
        fldDate: null,
        fldCodeLink: 'https://github.com/npd29/Evolutionary-Robotics-CS206',
        fldImageAddress: null,
        fldFinishedLink: null,
        fldCaption:
            'Optimized a simulated robot for locomotion in diverse environments using evolutionary algorithms.'
    },
    6: {
        fldName: 'Custom Compiler',
        fldDescription:
            "For my final project in the course on compiler design and construction, I focused on extending the language's capabilities by implementing simple dataclasses. This project was a culmination of the various topics covered throughout the course, which provided a comprehensive understanding of the compilation process.\r\n<br><br>\r\nThroughout the semester, I explored the representation and analysis of code and how to translate a high-level programming language into Intel x86 assembly language. We learned about essential concepts such as register allocation, static type checking, and handling mutable data. The course also emphasized the significance of garbage collection for efficient memory management in compiled languages.\r\n<br><br>\r\nBy extending the language with dataclasses, I not only demonstrated my proficiency in implementing new language features but also showcased my grasp of the entire compilation process. This project solidified my knowledge of code analysis, code generation, and the crucial role of language features in creating powerful and expressive programming languages.",
        fldLanguages: ['Python', 'X86 Assembly'],
        fldTools: null,
        fldDate: null,
        fldCodeLink: 'https://github.com/npd29/CS202-Final',
        fldImageAddress: null,
        fldFinishedLink: null,
        fldCaption:
            'Developed a simple compiler enabling translation of high-level programming language into x86 assembly language'
    },
    7: {
        fldName: 'Automated Plant Care System',
        fldDescription:
            'After failing to keep my plants alive, I used an Arduino Nano and an ESP8266 module, along with sensors for soil moisture, light, and air quality, to automate the process of watering plants and create a more nurturing environment.\r\n\r\nBy continuously monitoring important factors like soil moisture, light levels, and air quality, my system provided valuable insights into the specific needs of my plants. With the help of a peristaltic pump, the system automatically watered the plants, ensuring they received the appropriate amount of water at the right times.\r\n\r\nThis project allowed me to explore the integration of hardware components and programming skills, resulting in a practical solution to improve plant care. In the end, I have less dead plants!',
        fldLanguages: ['C++', 'Python'],
        fldTools: ['Bluetooth', 'Serial Communication'],
        fldDate: '2023-02-28',
        fldCodeLink: null,
        fldImageAddress: null,
        fldFinishedLink: null,
        fldCaption:
            'Using Arduinos, sensors, and pumps connected via Bluetooth, created a device to keep plants watered and fertilized. '
    },
    8: {
        fldName: 'Plants vs. Zombies Recreation',
        fldDescription:
            'For this project, I collaborated with an agile team to recreate the immensely popular game, Plants vs. Zombies, using Python and the Python Arcade library. As part of the team, I played a pivotal role in organizing the program flow and backend development. I focused on designing the structure of the game, ensuring seamless transitions between different states and screens. Additionally, I took charge of implementing the spawning mechanics for zombies, creating algorithms that combined randomness with the timing patterns seen in the original game. This resulted in a challenging and engaging gameplay experience.\r\n<br><br>\r\nAnother significant contribution I made was developing a dynamic system for level progression. I designed a flexible framework that allowed for the easy addition and modification of levels, accommodating three waves of zombies per level, each increasing in difficulty. This approach added replayability and a sense of progression for players. By working on this project, I enhanced my skills in game development, algorithm design, and collaboration.',
        fldLanguages: ['Python'],
        fldTools: ['Python Arcade'],
        fldDate: null,
        fldCodeLink:
            'https://gitlab.uvm.edu/ndesmara/cs205-team-2-final-project',
        fldImageAddress: null,
        fldFinishedLink: null,
        fldCaption:
            'Collaborated with a small team to recreate. the game Plants vs. Zombies'
    },
    9: {
        fldName: 'Image Manipulation Program',
        fldDescription:
            "I developed an image manipulation program that offers a wide range of features, including mirroring, color inversion, grayscale conversion, and the creation of kaleidoscope effects. Leveraging the capabilities of C++ for fast user input handling, I integrated Python and OpenCV to execute these transformations. The program's functionality was accessed through a command line prompt, providing users with a straightforward and efficient workflow for enhancing their images.\r\n\r\n",
        fldLanguages: ['C++', 'Python'],
        fldTools: ['OpenCV'],
        fldDate: null,
        fldCodeLink: null,
        fldImageAddress: null,
        fldFinishedLink: null,
        fldCaption:
            'Developed an image manipulation program with a wide range of features, including mirroring, color inversion, grayscale conversion, and the creation of kaleidoscope effects.'
    },
    10: {
        fldName: 'Enigma Recreation',
        fldDescription:
            'As my first open-ended project during my Introduction to Programming course, I had the ambitious goal of recreating the WWII enciphering machine, Enigma, using Python. Despite being new to programming, I wanted to challenge myself.\n<br><br>\nThrough self-guided learning, I successfully developed a fully functional version of Enigma. Going beyond the original scope, I even added an additional feature that allowed for the translation of enciphered messages into Morse code. This project not only showcased my ability to tackle complex programming tasks but also demonstrated my dedication to expanding my skill set and exploring innovative solutions.',
        fldLanguages: ['Python'],
        fldTools: null,
        fldDate: '2020-01-01',
        fldCodeLink: 'https://github.com/npd29/Enigma',
        fldImageAddress: 'enigma.jpg',
        fldFinishedLink: null,
        fldCaption:
            'Developed a fully-functional version of the WWII German encyphering machine Enigma in Python.'
    },
    11: {
        fldName: 'BlockDude Game Recreation',
        fldDescription:
            'I recreated the game BlockDude, originally found on TI-84 calculators. The objective is to guide a block to the exit door across progressively challenging levels.\r\n<br><br>\r\nTo implement the game, I devised a map creation process. Using an Excel file, I assigned numerical values to each cell, representing different elements like bricks, movable blocks, the exit, and the starting position. This allowed for flexible map design without manual coding. Converting the file to CSV, I parsed it to construct a 2D vector of Block objects. Using class inheritance, I was able to assign each Block relevant properties such as location, type, direction, and carrying status. The grid structure facilitated efficient content checks and swapping operations.',
        fldLanguages: ['C++'],
        fldTools: ['OpenGL', 'GLUT'],
        fldDate: '2022-05-01',
        fldCodeLink: null,
        fldImageAddress: 'blockdude.jpg',
        fldFinishedLink: null,
        fldCaption:
            'Rrecreated the game BlockDude, originally found on TI-84 calculators'
    }
};
