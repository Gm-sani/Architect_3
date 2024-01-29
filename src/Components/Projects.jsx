import React from 'react'
import project_1 from './project_1.jpg'

import project_2 from './project_2.jpg'

import project_3 from './project_3.jpg'

import project_4 from './project_4.jpg'
export default function Projects() {
  return (
    <div>
     <p className='font-serif text-xl p-3 m-2'>Projects</p>
     {/*-------------------First line of images----------------------------*/}
     <div className='flex gap-3 justify-center p-3 '>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_1} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_2} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_3} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_4} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     </div>
      {/*-------------------Second line of images----------------------------*/}
      <div className='flex gap-3 justify-center '>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_2} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_1} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_4} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     <div className="h-[35vh] w-[23vw] text-white">
        <img src={project_3} alt="" className='h-[30vh] w-[23vw]'/>
        <p className='bg-black'>First pic</p>
     </div>
     </div>
    </div>
  )
}
