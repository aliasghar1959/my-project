import React from 'react'
import './BrandGrid.css'
import haier from './Asset/haier.jpg'


const BrandGrid = () => {
  return (
    <div className='brand-grid'>

        <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
          <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
          <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
          <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
          <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
          <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
          <div className='brand-item'> 
          <img src={haier} alt='category_pics'/>
            <button className='brand-btn'>Visit Store</button>
          </div>
         
          
          </div>

      
    
  )
}

export default BrandGrid
