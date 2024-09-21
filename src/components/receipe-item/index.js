import React from 'react'
import { Link } from 'react-router-dom';

export default function ReceipeItem( {item} ) {
  return (
    <div className='flex flex-col h-100 w-80 overflow-hidden p-5 bg-gray-100 shadow-xl gap-5 rounded-2xl border-black '>
        <div className='h-50 w-50 items-center justify-center '>
            <img src={item.image_url} alt="recipe item" className='block w-full rounded-3xl'></img>
        </div>
        <div>
            <span className='text-lg text-blue-800 font-bold '>{item.publisher}</span>
            <h3 className='text-2xl font-extrabold truncate text-black'>{item.title}</h3>
            <Link to={`/receipe-item/${item.id}`} className='text-sm uppercase font-medium tracking-wider shadow-md bg-black/85 text-white p-3 mt-10 px-8 inline-block'>Recipe Details</Link>
        </div>
    </div>
  )
}
