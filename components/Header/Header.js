import Image from 'next/image';
import {motion} from "framer-motion"
import {AppWrapper} from '../AppWrapper';

const Header = () => {
        return (
                <div className="flex-1 flex flex-col md:flex-row gap-4 md:items-center pb-2  md:pb-0 md:justify-center justify-end pt-20 md:pt-40 overflow-hidden">

                        <div className='flex items-start flex-col md:items-end px-8 py-4 relative z-[2]'>
                                <motion.div
                                        initial = {{opacity: 0}}
                                        whileInView={{x: [-100, 0], opacity: [0, 1]}}
                                        transition = {{duration: .5}}
                                        className= "shadow-custom1 bg-white flex gap-4 items-center px-8 py-4 rounded-lg">
                                        <Image className='bg-white' src={"/hand.png"} width = "33" height= "33" />
                                        <div>
                                                <p className='text-sm text-gray-color'>Hello, I am</p>
                                                <p className='text-3xl  text-black-color font-semibold tracking-wide'>Ulugbek</p>
                                        </div>
                                </motion.div>
                                <motion.div
                                        initial = {{opacity: 0}}
                                        whileInView={{x: [-100, 0], opacity: [0, 1]}}
                                        transition = {{duration: .5, delay: .3}}
                                        className= "shadow-custom1 bg-white uppercase text-xs tracking-wider mt-6 flex flex-col items-end text-gray-color px-8 py-4 rounded-lg">
                                        <p>web developer</p>
                                        <p>freelancer</p>
                                </motion.div>
                        </div>

                        <div className=' grid place-content-center relative'>
                                <div className='header__bg_circle'></div>
                                <Image src="/profile.png" width = "500" height = "600" />
                        </div>

                        <motion.div
                                initial = {{opacity: 0}}
                                whileInView={{scale: [0, 1], opacity: [0, 1]}}
                                transition = {{duration: .3}}
                                className='flex gap-12 justify-center md:flex-col mt-6 relative z-[2]'>
                                <div  className='w-[100px] h-[100px] rounded-full p-3 bg-white shadow-custom1 '>
                                        <img className='w-full h-full object-contain' src="/tailwind.svg" alt="" />
                                </div>
                                <div  className='w-[150px] h-[150px] rounded-full mt-6 md:ml-6 md:mt-0 p-3 bg-white shadow-custom1 '>
                                        <img className='w-full h-full object-cover' src="/nextjs.png" alt="" />
                                </div>
                                <div  className='w-[70px] h-[70px] rounded-full p-3 bg-white shadow-custom1 '>
                                        <img className='w-full h-full object-contain' src="/redux.png" alt="" />
                                </div>
                        </motion.div>

                </div>
        );
}

export default AppWrapper(Header, "home", " header__container");