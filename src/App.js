import React from 'react';
import './App.css';
import Product from './Components/Product'
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import OneColumn from './Components/OneColumn';
import OneColumnReverse from './Components/OneColumnReverse';
import Footer from './Components/Footer';
import Button from './Components/Button';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <section className="grid-wrap">
        <OneColumn />
        <OneColumnReverse />
      </section>
      <Footer />
    </div>
  );
}

export default App;