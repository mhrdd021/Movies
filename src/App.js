import './App.css';
import React, {useEffect} from 'react';

//Component
import Header from './components/header/Header'
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Categories from './pages/categories/Categories'
import Footer from './components/footer/Footer';
import CategoriesList from './pages/categories/CategoriesList/CategoriesListItem'

//
import { Routes, Route } from "react-router-dom";
import Movies from './pages/movies/Movies';


function App() {
//push page to top
useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Home Page";
  }, []);

  return (
    <React.Fragment>
      <div>
        <Header />
        <div className='w-full lg:w-10/12 absolute top-0 right-0 '>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<SingleMovie/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/categories' element={<Categories />}/>
          <Route path='/category/:id' element={<CategoriesList />}/>
        </Routes>
        <Footer />
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
