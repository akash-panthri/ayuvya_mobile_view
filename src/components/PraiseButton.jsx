"use client"
import React,{useState} from 'react'

export default function PraiseButton({option}) {
    const [buttonClicked , setButtonClicked] = useState(false)
  return (
    <div className={`${buttonClicked? 'bg-[#a8ebbf] text-[#959794]': 'bg-[#dedad7] text-[#508760]'}`} onClick={()=> setButtonClicked(true)}>{option}</div>
  )
}
// #508760