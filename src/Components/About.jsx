import React from 'react'
import about_1 from './About_1.jpg'

import about_2 from './About_2.jpg'

import about_3 from './About_3.jpg'

import about_4 from './About_4.jpg'
export default function About() {
  return (
    <div className='p-3 m-3'>
      <p className='text-xl border border-white py-3 shadow-sm'>About</p>
      <p className='py-2 text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className='flex gap-3'>
        <div className='py-5 w-[15rem]'>
            <img src={about_1} alt="" className='h-[10rem]'/>
            <p className='text-xl py-3 font-mono'>John Doe</p>
            <p className='text-[13px]  font-extralight'>CEO & Founder</p>
            <p className='text-[13px]  py-3'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact</button>
        </div>
        <div className='py-5 w-[15rem]'>
            <img src={about_2} alt="" className='h-[10rem]'/>
            <p className='text-xl py-3 font-mono'>John Doe</p>
            <p className='text-[13px]  font-extralight'>Architect</p>
            <p className='text-[13px]  py-3'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact</button>
        </div>
        <div className='py-5 w-[15rem]'>
            <img src={about_3} alt="" className='h-[10rem]'/>
            <p className='text-xl py-3 font-mono'>Mike Ross</p>
            <p className='text-[13px]  font-extralight'>Architect</p>
            <p className='text-[13px]  py-3'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact</button>
        </div>
        <div className='py-5 w-[15rem]'>
            <img src={about_4} alt="" className='h-[10rem]'/>
            <p className='text-xl py-3 font-mono'>Dan Star</p>
            <p className='text-[13px]  font-extralight'>Architecr</p>
            <p className='text-[13px]  py-3'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact</button>
        </div>
    </div>
    </div>
  )
}
