import './App.css';
import React from 'react';
import ReactGA from "react-ga";
import { useEffect } from 'react';

//Data
import { Api } from './api/Api'

//Component
import Header from './components/header/Header'
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

//
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';

function App() {


  return (
    <React.Fragment>
      <div>
        <Header />
        <div className='w-full lg:w-10/12 absolute top-0 right-0 '>
        <Routes>
          <Route path='/' element={<Home Api={Api}/>} />
          <Route path='/movie/:id' element={<SingleMovie  Api={Api}/>} />
        </Routes>
        <Footer />
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
