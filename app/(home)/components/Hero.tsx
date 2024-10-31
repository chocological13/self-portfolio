"use client"
import { motion } from "framer-motion"
import {MailIcon, ArrowDown} from "lucide-react"
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section id="about" className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-rose-300/20 dark:from-rose-950 dark:to-gray-950"/>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center space-y-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-500 dark:to-rose-300">
                            Annisa Mustofa
                        </h1>
                        <p className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                            Software Engineer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 0.5}}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button variant="default"
                                className="bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-800">
                            View Projects
                        </Button>
                        <Button variant="outline" className="border-rose-200 dark:border-rose-800">
                            Download Resume
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4, duration: 0.5}}
                        className="flex justify-center space-x-6"
                    >
                        {[FaGithub, FaLinkedin, MailIcon].map((Icon, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
                                whileHover={{y: -4}}
                                whileTap={{y: 0}}
                            >
                                <Icon className="w-6 h-6"/>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                >
                    <ArrowDown className="w-6 h-6 text-rose-600 dark:text-rose-400"/>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;