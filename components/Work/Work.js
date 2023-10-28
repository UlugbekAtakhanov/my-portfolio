import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrapper } from "../AppWrapper";
import Cards from "./Cards";

const works = [
    {
        id: 1,
        tag: "UI /UX",
        title: "Mozi TailwindCSS",
        desc: "Pixel perfect website copyed from figma using tailwindcss",
        projectLink: "https://mozi-tailwindcss.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/Mozi-TailwindCSS",
        img: "/mozi.png",
    },
    {
        id: 16,
        tag: "React JS",
        title: "Clinic Automation",
        desc: "Login : password - user1:123, user2:123, user3:123, I cannot show code, it is private. I can show it only in interview",
        projectLink: "https://clinic-ux.netlify.app/login",
        codeLink: "github",
        img: "/clinic_ux.jpg",
    },
    {
        id: 3,
        tag: "JS",
        title: "Incomes&Expenses",
        desc: "This site is perfect for calculating Incomes and Expenses. Is created using vanilla JavaScript",
        projectLink: "https://incs-exps-ux.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/incs-exps",
        img: "/incs&exps.avif",
    },
    {
        id: 17,
        tag: "React JS",
        title: "FEM Ecommerce Challenge",
        desc: "Ecommerce website for teaching my students",
        projectLink: "https://fem-ecommerce-ux.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/FEM-Ecommerce-challenge",
        img: "/fem-ecommerce-ux.jpg",
    },
    {
        id: 13,
        tag: "Next JS",
        title: "Travel website",
        desc: "A modern UI/UX portfolio website",
        projectLink: "https://travel-uz.vercel.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/TravelUz",
        img: "/travel-uz.png",
    },
    {
        id: 2,
        tag: "React JS",
        title: "React Table",
        desc: "This table has filtering, pagination and sorting logic without any library, and as a backend I used Firebase",
        projectLink: "https://react-table-sorting-filtering.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/Table-Sorting-Filtering",
        img: "/table.png",
    },
    {
        id: 18,
        tag: "Vue3",
        title: "Calendar",
        desc: "Tried to simulate Google Calendar",
        projectLink: "https://calendar-ux.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/Calendar",
        img: "/calendar.jpg",
    },
    {
        id: 19,
        tag: "Vue3",
        title: "To Do App",
        desc: "Created using Vue3 and Pinia",
        projectLink: "https://to-do-app-ux.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/To-Do-App",
        img: "/todo.jpg",
    },
    {
        id: 4,
        tag: "React JS",
        title: "Travel Advisor Google Map",
        desc: "I created this site just for fun, using react, redux and GoogleMap and Rapid API",
        projectLink: "https://namangan-travel.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/travel-advisor",
        img: "/googlemap1.png",
    },
    {
        id: 5,
        tag: "UI /UX",
        title: "Gericht Restaurant UI",
        desc: "UI design of modern restaurant, very creative work. Copied from figma  using Next JS, Tailwind Css.",
        projectLink: "https://gericht-restaurant-cwd0vm8co-ulugbekatakhanov.vercel.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/Gericht-Restaurant",
        img: "/gericht.jpg",
    },
    {
        id: 6,
        tag: "Next JS",
        title: "Mui-project",
        desc: "This project is created using Mui components. I realized that knowing CSS liblary like Mui, it is a big power",
        projectLink: "https://mui-project.vercel.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/Mui-project",
        img: "/mui.png",
    },
    {
        id: 7,
        tag: "React JS",
        title: "YouTube Clone",
        desc: "It is a clone of YouTube. Created using React.js and TypeScript.",
        projectLink: "https://youtube-ux.netlify.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/YouTube",
        img: "/youtube.jpg",
    },
    {
        id: 8,
        tag: "JS",
        title: "Form Validation",
        desc: "Fully functional and secure form with validation",
        projectLink: "https://form-validation-ux.netlify.app/",
        codeLink:
            "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/2-formValidation",
        img: "/formValidation.avif",
    },
    {
        id: 9,
        tag: "JS",
        title: "Grocery Bud",
        desc: "A modern UI/UX portfolio website",
        projectLink: "https://grocery-bud-ux.netlify.app/",
        codeLink:
            "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/6-grocery-bud",
        img: "/groceryBud.avif",
    },
    {
        id: 10,
        tag: "JS",
        title: "Currency Converter",
        desc: "A UI/UX website for converting currency",
        projectLink: "https://currency-converter-ux.netlify.app/",
        codeLink:
            "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/5-currency-converter",
        img: "/currencyConverter.avif",
    },

    {
        id: 11,
        tag: "JS",
        title: "Accordion",
        desc: "Simple animated accordion",
        projectLink: "https://accordion-ux.netlify.app/",
        codeLink:
            "https://github.com/UlugbekAtakhanov/Tutorial/tree/main/frontend-tutorial-for-beginners/4-DOM-manipulation-tutorial/Practice/4-accordion",
        img: "/accordion.avif",
    },
    {
        id: 12,
        tag: "Next JS",
        title: "Next-Pizza",
        desc: "This is a pizza restaurant website. This is a pixel-perfect UI. I used Next.js, Redux Toolkit, API and Tailwind CSS",
        projectLink: "https://next-pizza.vercel.app/",
        codeLink: "https://github.com/UlugbekAtakhanov/Next-Pizza",
        img: "/pizza.png",
    },
    {
        id: 14,
        tag: "React JS",
        title: "Modern UI/UX Website",
        desc: "A modern UI/UX portfolio website",
        projectLink: "eeee.netlify.app",
        codeLink: "github",
        img: "/about01.png",
    },
    {
        id: 15,
        tag: "React JS",
        title: "Modern UI/UX Website",
        desc: "A modern UI/UX portfolio website",
        projectLink: "eeee.netlify.app",
        codeLink: "github",
        img: "/about01.png",
    },
];
// 19 ohiri

const unique = new Set(works.map((item) => item.tag));

const Work = () => {
    const [tagName, setTagName] = useState("All");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        const filterHandler = () => {
            if (tagName === "All") {
                return setFilteredList(works);
            }
            const filtered = works.filter((item) => item.tag === tagName);
            setFilteredList(filtered);
        };
        filterHandler();
    }, [tagName]);

    return (
        <div className="container mx-auto pb-4 min-h-screen ">
            <motion.h1
                whileInView={{ opacity: [0, 1] }}
                className="text-3xl md:text-5xl font-semibold text-black-color capitalize text-center mt-24 w-[90%] mx-auto	"
            >
                My Creative <span className="text-secondary-color">Portfolio</span> Section
            </motion.h1>

            <div className="my-8 flex justify-center items-center flex-wrap w-[80%] mx-auto gap-2">
                {[...unique, "All"]?.map((item, index) => {
                    return (
                        <span
                            onClick={() => setTagName(item)}
                            key={index}
                            className="bg-white text-xs rounded-[5px] py-1 shadow-lg  hover:shadow-secondary-color px-3 cursor-pointer hover:bg-secondary-color transition-all font-bold hover:text-white"
                            style={{ background: item === tagName ? "#313bac" : "", color: item === tagName ? "#fff" : "" }}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>

            <motion.div layout className=" grid grid-cols-[repeat(auto-fit,250px)] justify-center items-start gap-4 px-4 grid-rows-[masonry]">
                <AnimatePresence>
                    {filteredList.length > 0 &&
                        filteredList.map((item) => {
                            return (
                                <motion.div layout animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={"card" + item.id}>
                                    <Cards item={item} />
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default AppWrapper(Work, "work", "sth");
