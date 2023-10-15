import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Cards = ({ item }) => {
    return (
        <div className="  bg-white p-4 shadow-custom1 overflow-hidden hover:shadow-custom2 transition-all duration-500 rounded-md">
            <div className="w-full aspect-[10/10] relative rounded-lg overflow-hidden">
                <Image src={item.img} layout="fill" objectFit="cover" />
                <div className="absolute text-xs z-10 bg-white bottom-[-4px] text-center text-gray-color shadow-custom1 py-1 px-2 rounded-[3px] left-1/2 -translate-x-1/2">
                    {item.tag}
                </div>
                <div
                    className="absolute inset-0 flex items-center justify-center text-white/90 gap-4
            opacity-0 hover:opacity-100 hover:bg-black/80 transition-all duration-500 overflow-hidden"
                >
                    <motion.a
                        href={item.projectLink}
                        target="_blank"
                        whileHover={{ scale: [1, 0.8] }}
                        transition={{ duration: 0.2, type: "spring" }}
                        className="cursor-pointer p-3 rounded-full bg-black/70"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <title>Demo Site</title>
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.a>
                    <motion.a
                        href={item.codeLink}
                        target="_blank"
                        whileHover={{ scale: [1, 0.8] }}
                        transition={{ duration: 0.2, type: "spring" }}
                        className="cursor-pointer p-3 rounded-full bg-black/70"
                    >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </motion.a>
                </div>
            </div>
            <p className="text-sm text-black-color font-bold mt-2">{item.title}</p>
            <p className="text-sm text-gray-color mt-2">{item.desc}</p>
        </div>
    );
};

export default Cards;
