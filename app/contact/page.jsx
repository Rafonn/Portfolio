"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    { icon: <FaPhoneAlt />, title: "Phone", description: "(+55) 24 98825-6757" },
    { icon: <FaEnvelope />, title: "Email", description: "rafaelcarneiro16012003@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Address", description: "Petrópolis, Rio de Janeiro, Brazil" },
];

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [service, setService] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { firstName, lastName, email, phone, service, message };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Email enviado com sucesso');
                setIsPopupOpen(true);
            } else {
                console.error('Erro ao enviar e-mail:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    };

    const closePopup = () => setIsPopupOpen(false);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-blue-500">Let's work together</h3>
                            <p className="text-white/60">
                                Feel free to reach out to hire me! I’m confident I can add significant value to your company.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    placeholder="Firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <Input
                                    type="text"
                                    placeholder="Lastname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    type="phone"
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <Select onValueChange={(value) => setService(value)} value={service}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="api">API</SelectItem>
                                        <SelectItem value="software">Software Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                type="message"
                                placeholder="Type your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-500 rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#27272c] border border-gray-300 shadow-lg rounded-md">
                    <p>Thank you for getting in touch! I will get back to you soon.</p>
                    <Button size="md" onClick={closePopup}>Close</Button>
                </div>
            )}

        </motion.section>
    );
};

export default Contact;
