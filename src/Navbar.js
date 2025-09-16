import React from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
import logo from './Asset/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {

const searchHandler = async(event)=>{

const value = event.target.value

try {


  const response = await fetch('http://localhost:5000/product/search?name='+value,{
    method:'GET',
    headers: {'Content-Type':'application/json'}
  })

const result = await response.json()
console.log(result)

  
} catch (error) {
  console.log(error)
  
}




}


  return (
<div className='nav-container'>

<div className='nav-logo'>
<Link to="/"> <img src={logo} alt="Logo" /></Link>
</div>


   
       
             
        <input onChange={searchHandler} className='Search_input' placeholder="Search in Daraz" ></input>
        <CiSearch className='search-btn'/>
        <CiShoppingCart className='cart-btn'/>
        <div className='nav-items'>
         <Link className='nav-item' to="/">Home</Link> 
         <Link className='nav-item' to="/Product">Products</Link> 
         <Link className='nav-item' to="/Signup">Login</Link> 
         
         </div>
        </div>
      
  )
}

export default Navbar