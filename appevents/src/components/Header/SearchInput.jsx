import React from 'react';
import { MdSearch } from "react-icons/md";

export const SearchInput = () => {
    return (
        <div className='wrapperSearchInput'>
            <div  className='flex justify-end items-center w-full h-full '>
            <MdSearch size={30} color="white"/>
            </div>
        </div>
    );
};
