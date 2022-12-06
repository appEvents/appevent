import React from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import { MdAccountBox,MdShoppingCart } from "react-icons/md";
import { HiBellAlert,HiHome, HiHeart,HiShoppingBag } from "react-icons/hi2";
import Footer from '../Footer/Footer';



export const WrapperApp = (props) => {
    return (
        <div className='flex items-center flex-col  w-full  '>
            {/* <Header/> */}
            <div className='flex justify-center w-full h-full '>
            <div className='flex flex-col justify-evenly absolute w-[2.5%] h-[40vh] left-[2.5%] top-[105px] z-[1] bg-transparent '>
            <Link className='bg-transparent'  to="*"><HiHome size={20} className='bg-transparent' color="white"/></Link>
            <Link className='bg-transparent'  to="/notification"><HiBellAlert className='nav' size={20} color="white"/></Link>
            <Link className='bg-transparent' to="/favorite"><HiHeart size={20} className='bg-transparent' color="white"/></Link>
            </div>
           
            {props.children}</div>
           
            {/* <Footer/> */}
        </div >  );
};
