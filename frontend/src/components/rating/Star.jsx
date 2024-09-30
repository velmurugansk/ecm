import React from 'react'
import { MdStarHalf, MdStarOutline, MdStarRate } from "react-icons/md";

function Star() {
    const defaultRatind = 3.8;
    const starRating = Array.from({length:5}, (elem, index) => {
        let number = index + 0.5;

        return (<span key={index}>
           { defaultRatind > index + 1 ? <MdStarRate className='text-[#FDCC0D]' /> : defaultRatind > number ? <MdStarHalf className='text-[#FDCC0D]' /> :  <MdStarOutline className='text-[#FDCC0D]' />}
        </span>);
    })
  return (<div className='flex'>{starRating}</div>
  )
}

export default Star