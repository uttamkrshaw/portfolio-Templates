import React from 'react'
import { AiOutlineDownload } from "react-icons/ai"

const Resume = () => {
    return (
        <div >
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn/view?usp=share_link" color="transparent"
                target="_blank" download ><AiOutlineDownload /> Resume </a>
        </div>
    )
}

export default Resume