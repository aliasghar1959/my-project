import React from 'react'
import './Home.css'
import Product from './Product';
import CategoryGrid from './CategoryGrid';
import BrandGrid from './BrandGrid';
import {Link } from 'react-router-dom'




const Home = () => {

const words = ["apple", "banana", "kiwi", "grapefruit", "mango", "pear"];

const upperCase = words.map(words => words.toLocaleUpperCase())
console.log(upperCase)

const lessLetters = words.filter(words => words.length > 5)
console.log(lessLetters)

const totalLetters = words.reduce((sum,words) => sum+words.length , 0)
console.log(totalLetters)


  return (

<div className="container">
  <div className="main-content">
    <h1 className="main-heading">Categories</h1>
    <CategoryGrid />
    <br />
    <h1 className="main-heading">Our Products</h1>
    <Product />
  
    <br />
    <h1 className="main-heading">Brands</h1>
    <BrandGrid />

<br />
<br />
<br />



    {/* <nav class="navbar">
  <div class="left">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
  
  <div class="logo">LOGO</div>
  
  <div class="right">
    <a href="#">Services</a>
    <a href="#">Contact</a>
    <a href="#">Login</a>
  </div>
</nav> */}

    <div className='container'>
      <header className='header'>Hello title</header>
      <aside className='sidebar'>Side bar</aside>
      <main className='main'>Main content</main>
      <footer className='footer'>Footer</footer>
    </div>





    <div class="gallery">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>



  </div>

  <div className="side-panel">
    <h2>Side Panel</h2>
    <ul>
      <li><Link className='nav-item' to="/Contact">Product Entry Form</Link> </li>
      <li><Link className='nav-item' to="/Productlist">Product List</Link> </li>
      <li><Link className='nav-item' to="/Category">Category Entry Form</Link> </li>
      <li><Link className='nav-item' to="/CategoryList">Category List</Link> </li>
      <li><Link className='nav-item' to="/Brand">Brand Entry Form</Link> </li>
      <li><Link className='nav-item' to="/BrandList">Brand List</Link> </li>
      
    </ul>
  </div>
</div>

  );

};

export default Home