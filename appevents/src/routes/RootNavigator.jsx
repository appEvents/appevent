import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardEvents from '../pages/CardEvents';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function RootNavigator() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home/>} />
                <Route path='profile' element={<Profile/>} />
                <Route path='signIn' element={<SignIn/>} />
                <Route path='signUp' element={<SignUp/>} />
                <Route path='search' element={<Search/>} />
                <Route path='cardEvents' element={ <CardEvents/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
