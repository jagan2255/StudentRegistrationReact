import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeData from './Components/HomeData/HomeData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>

  <Header/>
  <HomeData/>
  <Footer/>

  </>
);


