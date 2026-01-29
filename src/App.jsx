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
import { Flip, ToastContainer } from 'react-toastify'
import PdfUpload from './components/PdfUpload';
import LoginComponent from './components/Login';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Privacypolicy from './pages/Privacypolicy';
import Termspage from './pages/Termspage';
import Servicepage from './Servicepage';
import Refund from './pages/refund';
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <ToastContainer transition={Flip}/>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/career' element={ <Career/>}/>
        <Route path='/Pdf' element={ <PdfUpload/>}/>
        <Route path='/login' element={ <LoginComponent/>}/>
         <Route path='/contact' element={ <Contactpage/>}/>
        <Route path='/about' element={ <Aboutpage/>}/>
        <Route path='/privacy' element={ <Privacypolicy/>}/>
        <Route path='/terms' element={ <Termspage/>}/>
        <Route path='/service' element={ <Servicepage/>}/>
        <Route path='/refund' element={ <Refund/>}/>
        
      </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
