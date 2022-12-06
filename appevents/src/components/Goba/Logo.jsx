
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo2.png";

export default function Logo() {
  return (
    <div className=' h-[75px] items-end' >
      <img className='h-[75px]' src={logo} alt="" />
      <Link  to="*"> <img className='h-[75px] ' src={logo} alt="" /></Link>
     
    </div>
  )
}
