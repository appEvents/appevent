import React from 'react';
import Header from '../Header/Header';



export const WrapperApp = (props) => {
    return (
        <div className='flex items-center flex-col  w-full bg-slate-400 '>
            <Header/>
            {props.children}
        </div >  );
};
