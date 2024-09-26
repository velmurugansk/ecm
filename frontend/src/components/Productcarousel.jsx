import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroimg1 from '../assets/heroimg1.jpg';
import heroimg2 from '../assets/heroimg2.jpg';
import heroimg3 from '../assets/heroimg3.jpg';

function Productcarousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className='p-4'>
        <img src={heroimg1}  alt="logo" />
        </div>
        <div>
        <img src={heroimg2} alt="logo" />
        </div>
        <div>
        <img src={heroimg3} alt="logo" />
        </div> 
      </Slider>
    </div>
  )
}

export default Productcarousel