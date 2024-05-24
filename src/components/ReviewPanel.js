import React from 'react'
import { FaStar } from "react-icons/fa";
import ReviewStar from './ReviewStar';
export default function ReviewPanel(star) {
  return (
    <div>
    <div className="text-xl font-bold">Safety</div>
    <div className="text-base font-semibold">Its good for the safety</div>
{star ?<ReviewStar rate= {4}/>:<></>}
    </div>
  )
}
