import React, {Suspense} from 'react';

import GlobalFonts from './fonts/fonts'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import CaseStudy1 from './pages/CaseStudy1'
import CaseStudy2 from './pages/CaseStudy2'

function App() {
  return (
    <div className='Parent'>
      <GlobalFonts />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='coders-sb' element={<CaseStudy1 />} />
            <Route path='fid' element={<CaseStudy2 />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
