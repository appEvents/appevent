import React from 'react';
import Header from '../Header/Header';
import { MdAccountBox } from "react-icons/md";



export const WrapperApp = (props) => {
    return (
        <div className='flex items-center flex-col  w-full  '>
            <Header/>
            <div className='flex justify-center w-full h-full '>
            <div className='flex flex-col justify-evenly absolute w-[3%] h-[55vh] left-[2.5%] top-[75px] z-[1] bg-[blue]'>
            <MdAccountBox size={20} color="white"/>
            <MdAccountBox size={20} color="white"/>
            <MdAccountBox size={20} color="white"/>
            <MdAccountBox size={20} color="white"/>
            </div>
            {props.children}</div>
            
        </div >  );
};
