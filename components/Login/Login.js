import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

const pageTransition = {
    exit: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: .3,
            ease: "easeIn",
        }
    },
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeInOut"
        }
    }
}

const svgVariant = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: .2,
            duration: 3,
            type: "spring",
            stiffness: 250
        }
    }
}
    

const Login = ({history}) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/")
        }
    }, [history])

    const loginHandler = (e) => {
        e.preventDefault()
        try {
            const {data} = axios.post("/login", {email, password})
            localStorage.setItem("authToken", data.token)
            history.push("/")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className = "login-container w-[85%] lg:w-[50%]">
            <motion.form autoComplete = "off" onSubmit = {loginHandler}
                variants = {pageTransition}
                exit = "exit"
                initial = "hidden"
                animate = "visible"
            >
                <h3 style = {{textAlign: "right"}} className = "text-2xl">Contact Me</h3>

                <label htmlFor="email" className='mb-3'>Email</label>
                <div className = "inp">
                    <svg className="svg-icon" viewBox="0 0 20 20">
							
                            <motion.path
                            d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"                         
                            variants = {svgVariant}
                            initial = "hidden"
                            animate = "visible"
                            fill="#5a84a2" 
                           ></motion.path>
						
                        </svg>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>

                <label htmlFor="password" className='mb-3'>Write your message</label>
                <div className = "inp">
                    <textarea name="text" className='w-full h-[200px] rounded p-4 outline-none bg-transparent' />
                </div>
                <button className = "btn" type = "submit"><span>send message</span></button>
            </motion.form>
        </div>
    )
}

export default Login
