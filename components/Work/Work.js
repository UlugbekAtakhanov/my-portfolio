
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { AppWrapper } from "../AppWrapper";
import Cards from "./Cards";

const works = [
	{ id: 1, tag: "UI /UX", title: "Mozi TailwindCSS", desc: "Pixel perfect website copyed from figma using tailwindcss", projectLink: "https://mozi-tailwindcss.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Mozi-TailwindCSS", img: "/mozi.png" },
	{ id: 2, tag: "React JS", title: "React Table", desc: "This table has filtering, pagination and sorting logic without any library, and as a backend I used Firebase", projectLink: "https://react-table-sorting-filtering.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Table-Sorting-Filtering", img: "/table.png" },
	{ id: 3, tag: "JS", title: "Incomes&Expenses", desc: "This site is perfect for calculating Incomes and Expenses. Is created using vanilla JavaScript", projectLink: "https://incs-exps-ux.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/7-inc%26exp", img: "/incs&exps.avif" },
	{ id: 4, tag: "React JS", title: "Travel Advisor Google Map", desc: "I created this site just for fun, using react, redux and GoogleMap and Rapid API", projectLink: "https://namangan-travel.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/travel-advisor", img: "/googlemap1.png" },
	{ id: 5, tag: "UI /UX", title: "Gericht Restaurant UI", desc: "UI design of modern restaurant, very creative work. Copied from figma  using Next JS, Tailwind Css.", projectLink: "https://gericht-restaurant-cwd0vm8co-ulugbekatakhanov.vercel.app/", codeLink: "https://github.com/UlugbekAtakhanov/Gericht-Restaurant", img: "/gericht.jpg" },
	{ id: 6, tag: "Next JS", title: "Mui-project", desc: "This project is created using Mui components. I realized that knowing CSS liblary like Mui, it is a big strength", projectLink: "https://mui-project.vercel.app/", codeLink: "https://github.com/UlugbekAtakhanov/Mui-project", img: "/mui.png" },
	{ id: 7, tag: "UI /UX", title: "Namangan IT School", desc: "This website is created for Namangan(Uzbekistan) IT School. Used technologies: react, sass, tailwindcss and framer motion", projectLink: "https://nits.uz/", codeLink: "https://github.com/UlugbekAtakhanov/nits", img: "/nits21.png" },
	{ id: 8, tag: "JS", title: "Form Validation", desc: "Fully functional and secure form with validation", projectLink: "https://form-validation-ux.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/2-formValidation", img: "/formValidation.avif" },
	{ id: 9, tag: "JS", title: "Grocery Bud", desc: "A modern ui / ux portfolio website", projectLink: "https://grocery-bud-ux.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/6-grocery-bud", img: "/groceryBud.avif" },
	{ id: 10, tag: "JS", title: "Currency Converter", desc: "A ui / ux website for converting currency", projectLink: "https://currency-converter-ux.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/5-currency-converter", img: "/currencyConverter.avif" },

	{ id: 11, tag: "JS", title: "Accordion", desc: "Simple animated accordion", projectLink: "https://accordion-ux.netlify.app/", codeLink: "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/4-accordion", img: "/accordion.avif" },
	{ id: 12, tag: "Next JS", title: "Next-Pizza", desc: "This is a pizza restaurant website. This is a pixel-perfect UI. I used Next.js, Redux Toolkit, API and Tailwind CSS", projectLink: "https://next-pizza.vercel.app/", codeLink: "https://github.com/UlugbekAtakhanov/Next-Pizza", img: "/pizza.png" },
	{ id: 13, tag: "React JS", title: "Modern UI / UX Website", desc: "A modern ui / ux portfolio website", projectLink: "eeee.netlify.app", codeLink: "github", img: "/about01.png" },
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
			<motion.h1 whileInView={{ opacity: [0, 1] }}
				className="text-3xl md:text-5xl font-semibold text-black-color capitalize text-center mt-24 w-[90%] mx-auto	">My Creative  <span className="text-secondary-color">Portfolio</span> Section</motion.h1>

			<div className="my-8 flex justify-center items-center flex-wrap w-[80%] mx-auto gap-2">
				{[...unique, "All"]?.map((item, index) => {
					return (
						<span onClick={() => setTagName(item)} key={index} className="bg-white text-xs rounded-[5px] py-1 shadow-lg  hover:shadow-secondary-color px-3 cursor-pointer hover:bg-secondary-color transition-all font-bold hover:text-white" style={{ background: item === tagName ? "#313bac" : "", color: item === tagName ? "#fff" : "" }}>{item}</span>
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
								key={"card" + item.id}>
								<Cards item={item} />
							</motion.div>
						)
					})}
				</AnimatePresence>
			</motion.div>

		</div>
	);
}

export default AppWrapper(Work, "work", "sth");