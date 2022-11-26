import React from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import { MdAccountBox,MdShoppingCart } from "react-icons/md";
import { HiBellAlert,HiHome, HiHeart,HiShoppingBag } from "react-icons/hi2";



export const WrapperApp = (props) => {
    return (
        <div className='flex items-center flex-col  w-full  '>
            <Header/>
            <div className='flex justify-center w-full h-full '>
            <div className='flex flex-col justify-evenly absolute w-[20px] h-[40vh] left-[2.5%] top-[105px] z-[1] bg-[blue]'>
            <Link  to="*"><HiHome size={20} color="white"/></Link>
            <Link  to="/notification"><HiBellAlert size={20} color="white"/></Link>
            <Link  to="/favorite"><HiHeart size={20} color="white"/></Link>
            {/* <Link  to="*"><MdAccountBox size={20} color="white"/></Link> */}
            </div>
           
            {props.children}</div>
           
            
        </div >  );
};
