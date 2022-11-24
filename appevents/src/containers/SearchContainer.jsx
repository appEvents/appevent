import React from 'react';
import Logo from "../components/Goba/Logo"
import { MdClear } from "react-icons/md";


export const SearchContainer = ({searchInputClicked, setSearchInputClicked}) => {
    return (
        <div className='wrapperSearchContainer'>
            <div className='flex items-end justify-between w-[95%] h-[75px] bg-[yellow]'>
                <Logo/>
                <div className='wrapperInputSearch'>

                </div>
                <div className='flex w-[75px] h-full bg-[black] justify-end items-center cursor-pointer' >
                    <MdClear  onClick={() =>{ setSearchInputClicked(!searchInputClicked)}} size={30} color="white"/>
                </div>
            </div>
            <div className='w-full h-[70%] bg-[orange]'>
                  
            </div>
        </div>
    );
};
