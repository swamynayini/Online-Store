import React, { useState } from 'react'

const Store = (data) => {
  const [search,setSearch] = useState('') 
  return (
    <div>
      <input className='border w-6/12 border-black p-2 m-2' type='text' value={search} placeholder='Search for Products' onChange={(e)=>setSearch(e.target.value)}/>
      <button className='bg-gray-400 p-2 m-2 rounded'>Search</button>
      <div className='p-4 m-4 grid grid-cols-4 '>
        {data?.data?.filter(value => value.title.toLowerCase().includes(search.toLowerCase())).map((value)=>
        <div className='border'>
        <img className='w-full h-1/2' alt='im' src={value.image}/>
        <h2 className='font-bold'>{value.category}</h2>
        <h1 className='text-lg '>{value.title}</h1>
        <p className='text-xs'>{value.description}</p>
        <h2 className=''>₹:{value.price}</h2>
        <h2>rating {value.rating.rate}</h2>
        </div>
        )}
      </div>
    </div>
  )
}

export default Store
