
import { useState, useEffect } from "react";
import {motion, AnimatePresence} from "framer-motion"
import { AppWrapper } from "../AppWrapper";
import Cards from "./Cards";

const works = [
	{id: 1, tag: "UI /UX", title: "Modern UI/UX Website", desc: "This website is created for Namangan(Uzbekistan) IT School. Used technologies: react, sass, tailwindcss and framer motion", projectLink: "https://nits21.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/nits21", img: "/nits21.png"},
	{id: 2, tag: "Next JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
	{id: 3, tag: "React JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
	{id: 4, tag: "React JS", title: "Travel Advisor Google Map", desc: "I created this site just for fun, using react, redux and GoogleMap and Rapid API", projectLink: "https://tr-advisor.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/travel-advisor", img: "/googlemap1.png"},
	{id: 5, tag: "Next JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
	{id: 6, tag: "React JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
	{id: 7, tag: "UI /UX", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
	{id: 8, tag: "Next JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
	{id: 9, tag: "React JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png"},
]

const unique = new Set(works.map(item => item.tag))



const Work = () => {

	const [tagName, setTagName] = useState("All")
	const [filteredList, setFilteredList] = useState([])

	useEffect(() => {
		const filterHandler = () => {
			if (tagName === "All") {
				return setFilteredList(works)
			}
			const filtered = works.filter(item => item.tag === tagName)
			setFilteredList(filtered)
		}
		filterHandler()
	}, [tagName])


        return (
			<div className="container mx-auto pb-4 min-h-screen ">
				<motion.h1  whileInView={{opacity: [0, 1]}}
				 className="text-3xl md:text-5xl font-semibold text-black-color capitalize text-center mt-24 w-[90%] mx-auto	">My Creative  <span className="text-secondary-color">Portfolio</span> Section</motion.h1>

				<div className="my-8 flex justify-center items-center flex-wrap w-[80%] mx-auto gap-2">
					{[...unique, "All"]?.map((item, index) => {
						return (
							<span onClick={() => setTagName(item)} key = {index} className="bg-white text-xs rounded-[5px] py-1 shadow-lg  hover:shadow-secondary-color px-3 cursor-pointer hover:bg-secondary-color transition-all font-bold hover:text-white" style={{background: item === tagName ? "#313bac" : "", color: item === tagName ? "#fff" : ""}}>{item}</span>
							)
						})}
				</div>

				<motion.div 
					layout
					className=" flex flex-col sm:flex-row sm:justify-center sm:items-stretch flex-wrap items-center gap-8">
						<AnimatePresence>
							{filteredList.length > 0 && filteredList.map((item) => {
								return (
									<motion.div
										layout
										animate={{ opacity: 1 }}
        								exit={{ opacity: 0 }}
										key = {"card" + item.id}>
										<Cards item = {item} />
									</motion.div>
									)
								})}
						</AnimatePresence>
				</motion.div>

			</div>
        );
}

export default AppWrapper(Work, "work", "sth");