
import Image from 'next/image';
import {motion} from  "framer-motion"

import {AppWrapper} from "../AppWrapper"

const skills = [
	{img: "/nextjs1.png", name: "next js"},
	{img: "/redux.png", name: "redux"},
	{img: "/react.png", name: "react"},
	{img: "/tailwind.svg", name: "tailwindCss"},
	{img: "/mu5.png", name: "mu5"},
	{img: "/figma.png", name: "figma"},
	{img: "/sass.png", name: "sass"},
	{img: "/git.png", name: "git"},
	{img: "/node.png", name: "node"},
	{img: "/javascript.png", name: "javascript"},
	{img: "/python.png", name: "python"},
	{img: "/html.png", name: "html"},
	{img: "/api.png", name: "api"},
]

const experience = [
	{year: 2021, name:"HTML & CSS instructor", company: "IT School Namangan"},
	{year: 2022, name:"Frontend Developer instructor (current)", company: "IT School Namangan"},
]

const Skills = () => {
	return (
		<div className='bg-white w-full'>
			<div className='py-24 flex-1 xl:container mx-auto'>
				<h1 className='text-4xl text-center '><span className='text-secondary-color font-semibold'>Skills</span> & <span className='text-secondary-color font-semibold'>Experience</span></h1>
				
				<div className=' lg:flex lg:justify-center p-12 gap-14 '>

					<div
						transition = {{ staggerChildren: 1}}
						className=' flex-[3]  flex flex-wrap gap-10 justify-center items-center bg-primary-color p-4 rounded shadow'>
						{skills.map((item, index) => (
							<motion.div
							key={index}
							className='flex flex-col items-center gap-2'>
								<motion.div 
									initial = {{opacity: 0, scale: 0}}
									whileInView={{opacity: [0, 1], scale: [0, 1]}}
									transition={{delay: index * 0.02}}
									className='relative w-[90px] h-[90px] rounded-full spec-shadow bg-white grid place-content-center'>
									<Image src={item.img} width={45} height = {45} objectFit='contain' />
								</motion.div>
								<span className='text-sm capitalize text-gray-color'>{item.name}</span>
							</motion.div>
							))}
					</div>

					<motion.div transition={{staggerChildren: 1}} className='flex-[2]  flex flex-col overflow-hidden '>
						{experience.map((item, index) => (
							<motion.div
								key={index}
								initial = {{x: 100, opacity: 0}}
								whileInView = {{x: 0, opacity: 1}}
								transition = {{delay: index * .05}}
								className='flex text-sm gap-10 px-2 py-4 items-start'>
								<p className='text-secondary-color font-bold text-xs'>{item.year}</p>
								<div>
									<p className='font-bold'>{item.name}</p>
									<p className='text-xs text-gray-color'>{item.company}</p>
								</div>
							</motion.div>
						))}
					</motion.div>

				</div>
			</div>

		</div>

	);
}

export default AppWrapper(Skills, "skills", "sth");