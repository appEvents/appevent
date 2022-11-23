import React from 'react';
import { Routes, Route } from "react-router-dom";
import CardEvents from '../pages/CardEvents';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const RootSubscription = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Home/>} />
                <Route path='profile' element={<Profile/>} />
                <Route path='signIn' element={<SignIn/>} />
                <Route path='signUp' element={<SignUp/>} />
                <Route path='search' element={<Search/>} />
            </Routes>
    </div>
    );
};

export default RootSubscription;