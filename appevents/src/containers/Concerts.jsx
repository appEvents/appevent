import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Link } from "react-router-dom";

export default function Concerts() {
  return (
<div className='flex flex-col justify-between w-[100%]   bg-[blue]'>
    <div className='wrapperTopEvents'>

    </div>
    <div className='w-[100%]  bg-[violet]'>
         <h1 className='text-[white]' >Concerts</h1>
    </div>
</div>
  )
}
