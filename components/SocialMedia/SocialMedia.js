import React from 'react'
import {GrFacebookOption, GrInstagram} from "react-icons/gr"
import {FaTelegramPlane} from "react-icons/fa"
import { IconContext } from "react-icons";

const SocialMedia = () => {
  return (
    <IconContext.Provider value={{ color: "#6b7688", className: "global-class-name" }}>
      <div className='p-2 mt-4 space-y-3'>
          <div className='w-8 h-8 rounded-full border border-gray-500 grid place-content-center hover:bg-gray-400'>
            <GrFacebookOption />
          </div>
          <div className='w-8 h-8 rounded-full border border-gray-500 grid place-content-center hover:bg-gray-400'>
            <GrInstagram />
          </div>
          <div className='w-8 h-8 rounded-full border border-gray-500 grid place-content-center hover:bg-gray-400'>
            <FaTelegramPlane />
          </div>

      </div>
    </IconContext.Provider>
  )
}

export default SocialMedia  