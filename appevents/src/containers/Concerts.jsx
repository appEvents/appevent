import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Link } from "react-router-dom";

export default function Concerts() {
  return (
<div className='flex flex-col items-end justify-between w-[100%]   bg-[black]'>
    <div className='wrapperTopEvents'>
        {/* <div className='w-[97.5%] h-full bg-[red]'>

        </div> */}
    </div>
    <div className='w-[100%]  bg-[violet]'>
         <h1 className='text-[white]' >Concerts</h1>
    </div>
</div>
  )
}
