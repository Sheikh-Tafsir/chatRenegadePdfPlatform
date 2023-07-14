import React,{useEffect} from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Speech from './pages/Speech';
import UploadPdf from './pages/UploadPdf';
import Viewpdf from './components/Viewpdf';
import Pdfplatform from './pages/Pdfplatform';
import Pdfgenerate from './pages/Pdfgenerate';
import Pdfands from './pages/Pdfands';




const App = () =>{
  useEffect(() => {
    
  }, []);
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/speech' element={<Speech/>} />
            <Route path='/uploadpdf' element={<UploadPdf/>} />
            <Route path='/viewpdf' element={<Viewpdf/>} />
            <Route path='/pdfplatform' element={<Pdfplatform/>} />
            <Route path='/pdfgenerate' element={<Pdfgenerate/>} />
            {/*<Route path='/pdfands' element={<Pdfands/>} />*/}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
