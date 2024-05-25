"use client"
import React,{useState} from 'react'
import {BiDislike, BiLike } from "react-icons/bi";
export default function LikeDislike() {
    const [inlike , setInlike] = useState("")
  return (
    <div className='flex flex-row w-[80%] justify-between '>
    <span className='flex flex-row justify-between text-xl' color={inlike==='dislike' ? '#67b384':'#f0f0f0'} onClick={()=>{
      setInlike("dislike")
    }}>

    <BiDislike className='mx-3 text-4xl' color={inlike==='like' ? '#67b384':'#f0f0f0'} />
    no
    </span>
    <span className='flex flex-row justify-between text-xl' color={inlike==='like' ? '#67b384':'#f0f0f0'} onClick={()=>{
      setInlike("like")
    }}>

    <BiLike className='mx-3 text-4xl'  />
    yes
    </span>
    </div>
  )
}
