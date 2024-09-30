import React from 'react'
import theartoflaziness from '../../assets/theartoflaziness.jpg'
import Star from '../rating/Star';

function Bestsellers() {
    const bestProducts = [];
  return (
    <div className='my-7 bg-[#fff] px-0 lg:px-10 xl:px-20'>
        <h4 className='text-2xl font-bold text-[#2257bf]'>Best Sellers</h4>    
        <div>
            <div className='border p-2 w-1/5'>
                <img src={theartoflaziness} className='h-16 w-16 mx-auto' alt="productimg" />
                <p className='text-center'>The Art of Laziness: Overcome Procrastination</p>
                <Star />
            </div>
        </div>            
    </div>
  )
}

export default Bestsellers