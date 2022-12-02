import React from 'react';
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";
// MdAccountBox

export const ProfileInput = () => {
    return (
        <div className='wrapperProfileInput'>
            <Link className="navLinkHeader" to="/profile"><MdAccountBox size={30} color="white"/></Link>
            
        </div>
    );
};
