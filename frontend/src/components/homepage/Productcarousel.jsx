import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productcaro.css"
import heroimg1 from '../../assets/heroimg1.jpg';
import heroimg3 from '../../assets/heroimg3.jpg';
import heroimg4 from '../../assets/heroimg4.jpg';
import heroimg5 from '../../assets/heroimg5.jpg';

function Productcarousel() {
    const settings = {
        dots: true,
        infinite: true,       
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 6000,
        cssEase: "linear",
        arrows : false,
        lazyLoad: true
    };

  return (
    <div className="slider-container bg-[#fff]">
      <Slider {...settings}>
        <div>
        <img src={heroimg1}  alt="heroimg" />
        </div>       
        <div>
        <img src={heroimg3} alt="heroimg" />
        </div>
        <div>
        <img src={heroimg4} alt="heroimg" />
        </div> 
        <div>
        <img src={heroimg5} alt="heroimg" />
        </div>
      </Slider>
    </div>
  )
}

export default Productcarousel