import React from 'react'
import { Routes, Route } from "react-router-dom";
import CardEvents from '../pages/CardEvents';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


export default function RootNavigator() {
  return (
    <div>
            <Routes>
                <Route path='*' element={<Home/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/signIn' element={<SignIn/>} />
                <Route path='/signUp' element={<SignUp/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/cardEvents' element={ <CardEvents/>} />
                <Route path='/notification' element={ <Notification/>} />
                <Route path='/favorite' element={ <Favorite/>} />
                
            </Routes>
    </div>
  )
}
