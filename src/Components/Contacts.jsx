import React from 'react'
import contact_1 from './contact_1.jpg'
export default function Contacts() {
  return (
      <div className='p-3 m-3'>
      <p className='text-xl border border-white py-3 shadow-sm'>Contact</p>
      <p className='py-3 text-[13px]'>Lets get in touch and talk about your next project.</p>
      
      <input className="appearance-none block w-full text-[13px] text-black border border-gray-300 py-2 px-2 my-2 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="Name"/>
      <input className="appearance-none block w-full text-[13px] text-black border border-gray-300 py-2 px-2 my-2 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="Email"/>
      <input className="appearance-none block w-full text-[13px] text-black border border-gray-300 py-2 px-2 my-2 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="Subject"/>
      <input className="appearance-none block w-full text-[13px] text-black border border-gray-300 py-2 px-2 my-2 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="Comment"/>
      <button className="bg-black hover:bg-gray-400 hover:text-black text-white my-3 py-1 px-3 text-[14px]">
    SEND MESSAGE</button>
    <img src={contact_1} alt="" />

    </div>
  )
}
