import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Link } from "react-router-dom";
import Concerts from '../containers/Concerts';
import RootEvents from '../routes/RootEvents';

export default function Home() {
  return (
    <div className='flex flex-col justify-between w-[100%]  bg-red-800 '>
      <Header/>
      <div className='flex justify-evenly items-center w-full h-[50px] bg-[black] min-w-[300px]'>
        <Link to="*"><h2 className=' text-zinc-100'>Concerts</h2></Link>
        <Link to="/spectacles"><h2 className=' text-zinc-100'>Spectacles</h2></Link>
        <Link to="/festivales"><h2 className=' text-zinc-100'>Festivales</h2></Link>
      </div>
      <RootEvents/>
   
      <Footer/>
      
     
    </div>
  )
}
