import React from 'react'
import {useEffect, useState} from 'react';
import './ProductDetail.css'

const ProductDetail = () => {

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const [product,setProduct] = useState()

const getProduct = async()=>{

try {

const response = await fetch('http://localhost:5000/single/product?id='+id,{
    method:'GET',
    headers:{'Content-Type':'application/json'}
})

const result = await response.json()
console.log(result)
setProduct(result.item)
    
} catch (error) {
    console.log(error)
}

}

useEffect(()=>{
    getProduct()
},[])

if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div>
    <div className='product-detail-row'>
<div className='product-detail-img'>
<img src={'http://localhost:5000/'+product.image} alt='Here is an image'/>
</div>

<div className='product-detail-content'>
<p>{product.name}</p>
<p className='price-prod'>Rs.{product.price}</p>

<div className='product-cat-row'>
<p className='brand-prod'>Category:{product.category} |</p>
<p className='brand-prod'> Brand:{product.brand}</p>

</div>
<div className='product-detail-action'>
    <button className='product-cat-cart'>Add to Cart</button>
    <button className='product-cat-buy'>Buy</button>
</div>
</div>



    </div>
    </div>
  )
}

export default ProductDetail

