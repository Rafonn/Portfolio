"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import { SiPython, SiSharp, SiTypescript } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
    title: "About me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus, rerum consequatur, sunt nulla suscipit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Rafael Carneiro"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+55) 24 98825-6757"
        },
        {
            fieldName: "E-Mail",
            fieldValue: "rafaelcarneiro16012003@gmail.com"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Brazilian"
        },
        {
            fieldName: "Languages",
            fieldValue: "Portuguese, English"
        },
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
        "With extensive experience in developing libraries and dashboards for machine monitoring, I create tailored solutions that provide real-time insights and streamline decision-making. Using a robust tech stack of TypeScript, C#, Node.js, and React, I specialize in delivering high-performance tools that combine seamless functionality with intuitive data visualization. Empower your operations with precision and clarity!",
    items: [
        {
            company: "Andritz Group",
            position: "Full Stack Developer",
            duration: "10/2024 - Present",
        },
        {
            company: "Andritz Group",
            position: "Back-End Developer",
            duration: "04/2023 - 10/2024",
        }
    ]
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
        "I have a solid educational foundation in Computer Engineering, paired with specialized courses in modern technologies. My training includes TypeScript, C#, Node.js, React, Docker, and database management. These courses have strengthened my skills in software development, containerization, and efficient data handling, enabling me to deliver scalable and innovative solutions for various challenges.",
    items: [
        {
            institution: "Catholic University of Petropolis",
            degree: "Computer Engineering",
            duration: "02/2021 - Present",
        },
        {
            institution: "Udemy",
            degree: "Full Stack (Js, NextJs, NodeJs)",
            duration: "150 hours",
        },
        {
            institution: "Udemy",
            degree: "Back-End Development (NodeJs)",
            duration: "40 hours",
        },
        {
            institution: "Udemy",
            degree: "Back-End Development (C#, .NET)",
            duration: "60 hours",
        },
        {
            institution: "Udemy",
            degree: "TypeScript Course",
            duration: "50 hours",
        },
        {
            institution: "Udemy",
            degree: "API REST Course",
            duration: "40 hours",
        },
    ]
}

const skills = {
    title: "My skills",
    description:
        "Proficient in a wide range of technologies, including TypeScript, C#, Node.js, React, Python, Docker, and database management. I excel in designing scalable systems, creating intuitive user interfaces, developing efficient APIs, and automating workflows. My skill set enables me to tackle complex challenges and deliver reliable, high-performance solutions.",
    skillList: [
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript"
        },
        {
            icon: <SiSharp />,
            name: "C#"
        },
        {
            icon: <FaReact />,
            name: "React.Js"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.Js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.Js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <SiPython />,
            name: "Python"
        }
    ]

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justift-center items-center lg:items-start gap-1">
                                                <span className="text-blue-500">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>);
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justift-center items-center lg:items-start gap-1">
                                                <span className="text-blue-500">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>);
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-4">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-blue-500 transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-sm text-white/60">{item.fieldName}:</span>
                                                <span className="text-sm">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </p>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;