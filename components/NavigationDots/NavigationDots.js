import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='space-y-3 px-2 relative'>
        {["home", "about", "work", "skills", "contact"].map((item, index) => {
          return (
            <a href = {`#${item}`}
              style = {{background: active === item ? "#313bac" : ""}}
              className= "w-3 h-3 bg-indigo-300 rounded-full block cursor-pointer hover:bg-secondary-color transition-all" key = {index}></a>
            )
        })}
    </div>
  )
}

export default NavigationDots