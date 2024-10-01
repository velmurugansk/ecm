import React from 'react'
import laptop from '../../assets/laptop.jpg';
import mobile from '../../assets/mobile.jpg';
import smartwatch from '../../assets/smartwatch.jpg';
import book from '../../assets/book.jpg';
import headphone from '../../assets/headphone.jpg';


function Category() {
  const productcatgory = [{name : 'Laptops', imgname:laptop}, {name : 'Mobile', imgname:mobile}, {name : 'Smart Watch', imgname:smartwatch}, {name : 'Headphone', imgname:headphone}, {name : 'Book', imgname:book}]
    
  return (
    <div className='my-7 bg-[#fff] px-0 lg:px-10 xl:px-20'>
        <h4 className='text-2xl font-bold text-[#2257bf]'>Categories</h4>     
        <div className='grid grid-cols-5 gap-3'>
            {productcatgory.map(item => {
                return (<div key={item} className='p-2 cursor-pointer'>
                    <img src={item.imgname} className='h-20 w-20 mx-auto' alt="categoryimg" />
                    <p className='my-2 font-bold text-center'>{item.name}</p></div>);
            })}
        </div>   
    </div>
  )
}

export default Category