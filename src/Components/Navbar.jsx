import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
const navigate =useNavigate();

  return (
    <div className='bg-slate-700 h-[9vh]  flex justify-between p-3 text-center text-[15px] shadow-md font-mono'>
      <div className='mx-3 flex gap-3'>
        <IconButton onClick={()=>{navigate('/')}}>
        <p className='font-semibold text-white'>BR</p> <p className='text-white'> Architects</p>
        </IconButton>
      </div>
      <div className='flex gap-5 mx-3'>
     <IconButton onClick={()=>{navigate('proj')}}>
     <WorkIcon className='text-white'/>
     </IconButton>

     <IconButton onClick={()=>{navigate('about')}}>
     <InfoIcon className='text-white'/>
     </IconButton>

     <IconButton onClick={()=>{navigate('cont')}}>
     <ContactsIcon className='text-white'/>
     </IconButton>
      </div>
    </div>
  )
}
