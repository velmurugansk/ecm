import React from 'react'
import theartoflaziness from '../../assets/theartoflaziness.jpg'
import Star from '../rating/Star';
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Bestsellers() {
    const bestProducts = [];
  return (
    <div className='my-7 bg-[#fff] px-0 lg:px-10 xl:px-20'>
        <h4 className='text-2xl font-bold text-[#2257bf]'>Best Sellers</h4>    
        <div className='flex'>
            <div className='px-3 py-2 w-1/5 cursor-pointer'>
                <img src={theartoflaziness} className='h-20 w-20 mx-auto' alt="productimg" />
                <p className='my-2 text-sm'>The Art of Laziness: Overcome Procrastination</p>
                <Star />
                <div className="flex my-1 text-sm items-center">
                  <MdOutlineCurrencyRupee /> <p className='ml-1 font-normal'> 500</p>
                </div>    
                <div className="flex items-center text-xs my-1">
                  <p>M.R.P:</p><MdOutlineCurrencyRupee /><span className='line-through'>1000</span>
                </div>                           
            </div>
            <div className='px-3 py-2 w-1/5'>
                <img src={theartoflaziness} className='h-20 w-20 mx-auto' alt="productimg" />
                <p className='my-2 text-sm'>The Art of Laziness: Overcome Procrastination</p>
                <Star />
                <div className="flex my-1 text-sm items-center">
                  <MdOutlineCurrencyRupee /> <p className='ml-1 font-normal'> 500</p>
                </div>    
                <div className="flex items-center text-xs my-1">
                  <p>M.R.P:</p><MdOutlineCurrencyRupee /><span className='line-through'>1000</span>
                </div>                           
            </div>
            <div className='px-3 py-2 w-1/5'>
                <img src={theartoflaziness} className='h-20 w-20 mx-auto' alt="productimg" />
                <p className='my-2 text-sm'>The Art of Laziness: Overcome Procrastination</p>
                <Star />
                <div className="flex my-1 text-sm items-center">
                  <MdOutlineCurrencyRupee /> <p className='ml-1 font-normal'> 500</p>
                </div>    
                <div className="flex items-center text-xs my-1">
                  <p>M.R.P:</p><MdOutlineCurrencyRupee /><span className='line-through'>1000</span>
                </div>                           
            </div>
            <div className='px-3 py-2 w-1/5'>
                <img src={theartoflaziness} className='h-20 w-20 mx-auto' alt="productimg" />
                <p className='my-2 text-sm'>The Art of Laziness: Overcome Procrastination</p>
                <Star />
                <div className="flex my-1 text-sm items-center">
                  <MdOutlineCurrencyRupee /> <p className='ml-1 font-normal'> 500</p>
                </div>    
                <div className="flex items-center text-xs my-1">
                  <p>M.R.P:</p><MdOutlineCurrencyRupee /><span className='line-through'>1000</span>
                </div>                           
            </div>
            <div className='px-3 py-2 w-1/5'>
                <img src={theartoflaziness} className='h-20 w-20 mx-auto' alt="productimg" />
                <p className='my-2 text-sm'>The Art of Laziness: Overcome Procrastination</p>
                <Star />
                <div className="flex my-1 text-sm items-center">
                  <MdOutlineCurrencyRupee /> <p className='ml-1 font-normal'> 500</p>
                </div>    
                <div className="flex items-center text-xs my-1">
                  <p>M.R.P:</p><MdOutlineCurrencyRupee /><span className='line-through'>1000</span>
                </div>                           
            </div>
        </div>            
    </div>
  )
}

export default Bestsellers