import React from 'react'
import { Routes, Route } from "react-router-dom";
import Concerts from '../containers/Concerts';
import Festivales from '../containers/Festivales';
import Spectacles from '../containers/Spectacles';

export default function RootEvents() {
  return (
    <div>
         <Routes>
                <Route path='*' element={<Concerts/>} />
                <Route path='/spectacles' element={<Spectacles/>} />
                <Route path='/festivales' element={<Festivales/>} />
            </Routes>
    </div>
  )
}
