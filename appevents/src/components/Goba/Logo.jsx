
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo2.png";

export default function Logo() {
  return (
    <div className=' h-[75px] items-end' >
<<<<<<< HEAD
      <img className='h-[75px]' src={logo} alt="" />
=======
      <Link  to="*"> <img className='h-[75px] ' src={logo} alt="" /></Link>
     
>>>>>>> 99b17b02d69c09b2b28e40538419b117c102dcd6
    </div>
  )
}
