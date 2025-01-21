"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Creating modern, responsive, and user-friendly websites tailored to your needs. I specialize in clean designs, seamless functionality, and optimized performance. Let’s build a digital presence that stands out!",
        href: "https://github.com/Rafonn/Blog-Completo"
    },
    {
        num: "02",
        title: "APIs",
        description: "Designing robust and scalable APIs to connect your applications seamlessly. I focus on secure, efficient, and well-documented solutions to ensure smooth integrations. Empower your systems with reliable API services!",
        href: "https://github.com/Rafonn/API-REST-TASKS"
    },
    {
        num: "03",
        title: "Databases",
        description: "Designing, optimizing, and maintaining reliable databases to store and manage your data securely. I specialize in creating scalable structures and efficient queries for seamless performance. Your data, organized and accessible!",
        href: "https://github.com/Rafonn/PYTHON_WITH_SQLITE"
    },
    {
        num: "04",
        title: "Automation",
        description: "Streamlining workflows with custom automation tools to save time and boost productivity. From scripts to complex systems, I deliver efficient, reliable, and scalable solutions. Let’s simplify your processes!",
        href: "https://github.com/Rafonn/BOT-SERVER"
    },
];

import { animate, motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60 group-hover:text-white transition-all duration-500">{service.description}</p>
                                <div className="border-b border-white /20 w - full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div >
        </section >
    );
}

export default Services;