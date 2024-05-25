"use client"
import React from 'react'
import { FaStar } from "react-icons/fa";
export default function ReviewStar({rate}) {
  return (
    <div className='flex flex-row'>  {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index}>
           
                <FaStar className='text-3xl'
                  color={
                    givenRating < rate || givenRating === rate
                      ? "RGB(255,170,74)"
                      : "rgb(192,192,192)"
                  }
                />
           
          </label>
        );
      })}</div>
  )
}
