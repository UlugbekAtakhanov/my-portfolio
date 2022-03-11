

import Image from 'next/image';
import {motion} from "framer-motion"
import {AppWrapper} from '../AppWrapper';

const about = [
        {img: "/nextjs.png", title:"Next JS", desc: "I love this technology" },
        {img: "/redux1.png", title:"Redux Toolkit", desc: "Have good practice over a year." },
        {img: "/mern1.png", title:"MERN Stack", desc: "I am a good MERN developer" },
        {img: "/django3.png", title:"Python Django", desc: "I am good at Django Rest Framework" },
]

const About = () => {
        return (
                <div className=' grid place-content-center flex-1 min-h-[90vh] '>
                        <div className="py-8   px-2 container mx-auto">
                                <motion.h1  whileInView={{opacity: [0, 1]}} className="text-3xl md:text-4xl font-bold text-black-color capitalize text-center">i know many <span className="text-secondary-color">good technologies</span></motion.h1>
                                <motion.h1  whileInView={{opacity: [0, 1]}} className="text-3xl md:text-4xl font-bold text-black-color capitalize text-center"> for <span className="text-secondary-color">web developing</span></motion.h1>

                                <div className='grid grid-cols-2 md:gap-4 mx-auto mt-4 md:grid-cols-3 lg:grid-cols-4'>
                                        {about.map((item, index) => (
                                                <motion.div 
                                                        key={index}
                                                        whileHover={{scale: 1.1}}
                                                        transition = {{duration: .3, type: "tween"}}
                                                        className=' m-4 '>
                                                        <div className='relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow'>
                                                                <Image layout='fill' objectFit="cover" src={item.img} alt="" />
                                                        </div>
                                                        <p className='text-sm md:text-base text-black-color font-bold mt-4'>{item.title}</p>
                                                        <p className='text-xs md:text-sm text-gray-color p-0'>{item.desc}</p>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </div>
        );
}

export default AppWrapper(About, "about", "bg-white");


