import React from 'react'
import theartoflaziness from '../../assets/theartoflaziness.jpg'
import Star from '../rating/Star';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bestseller.css';

function Bestsellers() {
    const bestProducts = [];
    const settings = {
      dots: false,
      infinite: false,       
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,      
      cssEase: "linear",
      arrows : true,
      lazyLoad: true,
      responsive: [ 
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='my-7 py-2 px-3 bg-cyan-200'>
        <h4 className='text-2xl py-1 px-1 font-bold text-[#2257bf]'>Best Sellers</h4>    
        <Slider {...settings}>
            <div className='px-3 py-3 w-20 bg-[#fff] cursor-pointer'>
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
            <div className='px-3 py-3 w-20 bg-[#fff]'>
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
            <div className='px-3 py-3 w-20 bg-[#fff]'>
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
            <div className='px-3 py-3 w-20 bg-[#fff]'>
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
            <div className='px-3 py-3 w-20 bg-[#fff]'>
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
        </Slider>            
    </div>
  )
}

export default Bestsellers