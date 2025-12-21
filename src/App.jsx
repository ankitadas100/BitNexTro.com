import { useState } from 'react'
import './App.css'
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Career from './pages/Career';
import Footer from './components/Footer';
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/career' element={ <Career/>}/>
      </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
