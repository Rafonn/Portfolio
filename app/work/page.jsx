"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Strapi Blog",
        description:
            "Developed a dynamic blog using Next.js for the frontend and Strapi as the backend CMS. The project features seamless content management with Strapi’s flexible API, while Next.js provides server-side rendering for fast, SEO-friendly pages. This full-stack solution allows easy content updates, enhanced performance, and a modern user experience.",
        stack: [
            { name: "Next.Js" }, { name: "TypeScript" }, { name: "React.Js" }
        ],
        name: "TypeScript",
        image: "/assets/work/thumb4.png",
        live: "https://spectacular-rabanadas-7c1b0c.netlify.app/post/post",
        github: "https://github.com/Rafonn/Blog-Completo",
    },
    {
        num: "02",
        category: "backend",
        title: "Api with JWT system",
        description:
            "For a recent project, I developed an API with JWT (JSON Web Token) authentication to handle user authentication and secure access. The system works by generating a token upon successful login, which is then used to authenticate subsequent requests, ensuring that only authorized users can access certain endpoints. This approach keeps the server stateless, as the user’s session is managed entirely on the client side with the token. It provides a scalable, efficient, and secure solution, ideal for applications requiring user login and role-based access control.",
        stack: [
            { name: "Node.Js" }, { name: "Postgres" }, { name: "JWT" }
        ],
        name: "TypeScript",
        image: "/assets/work/task.png",
        live: "https://github.com/Rafonn/API-REST-TASKS",
        github: "https://github.com/Rafonn/API-REST-TASKS",
    },
    {
        num: "03",
        category: "automation",
        title: "project 3",
        description:
            "This TypeScript project automates email sending by integrating SMTP settings and email templates. It supports dynamic content generation using a templating engine, allowing personalized emails. A queuing system ensures efficient email delivery, even under high volume.",
        stack: [
            { name: "TypeScript" }
        ],
        name: "TypeScript",
        image: "/assets/work/Bot.jpg",
        live: "https://github.com/Rafonn/BOT-SERVER",
        github: "https://github.com/Rafonn/BOT-SERVER",
    }
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-blue-500">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-500"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-blue-500"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}    
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index}>
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-blue-500 hover:bg-blue-500-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" swiper={swiperRef}/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;