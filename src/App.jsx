import React, { useState,useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Passgen from './Pages/Passgen'; 
import CurrencyChanger from './Pages/CurrencyChanger';
export default function App() {
 
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/passgen' element={<Passgen/>}/>
    <Route path='/CurrChange' element={<CurrencyChanger/>}/>
   </Routes>
  );
}
