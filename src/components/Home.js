import React, { useEffect, useState } from 'react'
import Store from './Store'

const Home = () => {
    const [products,setProducts] = useState()
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const json =await data.json()
        setProducts(json)
    }
  return (
    <div>
        <Store data = {products}/>
    </div>
  )
}

export default Home
