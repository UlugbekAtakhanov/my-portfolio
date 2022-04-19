
import { useState } from "react";

import { motion } from "framer-motion";
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import { IconContext } from "react-icons";



const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="bg-white/50 backdrop-blur-sm w-full  fixed z-[11]">
            <motion.div
                className=" container mx-auto   flex items-center lg:items-end px-6 py-4">
                <h1 className="text-secondary-color font-bold text-2xl md:text-3xl font bold leading-6 flex flex-col  md:flex-row sm:gap-2 "><span>ulugbek</span> <span>atakhanov</span></h1>
                    <ul className="hidden  flex-1 sm:flex justify-center gap-7 ">
                        {
                            ["home", "about", "work", "skills", "contact"].map((item, index) => (
                                <li key = {index}><a className="text-gray-color uppercase text-sm hover:text-secondary-color" href={`#${item}`}>{item}</a></li>
                            ))
                        }
                    </ul>
                    <IconContext.Provider value={{size: "1.3rem"}}>
                        <motion.div
                        onClick={() => setIsOpen(true)}
                        initial = {{scale: 1}}
                        whileHover={{scale: 1.2}}
                        className=" sm:hidden ml-auto text-secondary-color cursor-pointer">
                            <FaBars />
                        </motion.div>
                    </IconContext.Provider>
            </motion.div>
        </div>


        <motion.div
                initial = {{width: 0}}
                animate = {{width: isOpen ? "80%" : 0}}
                className="fixed z-[11] top-0 overflow-hidden right-0 bottom-0 h-full  bg-white/50 backdrop-blur-sm sidebar__bg__img">
                <IconContext.Provider value={{size: "1.5rem"}}>
                        <motion.div
                            onClick={() => setIsOpen(false)}
                            className=" text-gray-color hover:text-secondary-color cursor-pointer  flex justify-end p-4">
                            <motion.span whileHover={{rotate: "180deg", scale: .8}} >
                                <AiOutlineClose />
                            </motion.span>
                        </motion.div>
                    </IconContext.Provider>
                <ul className="">
                    {
                        ["home", "about", "work", "skills", "contact"].map((item, index) => (
                            <li key = {index}><motion.a 
                            whileHover={{scale: 1.05}}
                            onClick={() => setIsOpen(false)} className="text-gray-color  uppercase text-sm hover:text-secondary-color block py-3 px-8" href={`#${item}`}>{item}</motion.a></li>
                        ))
                    }
                </ul>
            </motion.div>
        </>
    );
}

export default Navbar;