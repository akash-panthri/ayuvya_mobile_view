"use client"
import React,{useState} from 'react'
import givenData from '../data/popupData.json'
import { RxCross2 } from "react-icons/rx";
import { GiNetworkBars } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { FaBatteryFull } from "react-icons/fa";
import ReviewPanel from './ReviewPanel';
export default function PopupPanel() {
  const [showPanel , setShowPanel] = useState(true)
  return (
    <>

 
    <div className='w-[80vw] h-[80vh] bg-[#f0f0f0] rounded-3xl px-3 py-1 overflow-hidden'>
    <div className="flex flex-row justify-between">
        <span>9:45</span>
        <div className="flex flex-row w-[20%] justify-between">
        <GiNetworkBars />
        <IoWifi />
        <FaBatteryFull />

        </div>
    </div>
    <RxCross2 className='text-3xl'/>
    <div className="text-2xl font-bold">Leave a Review</div>
    {givenData.map(givenDatum =>{
        return <ReviewPanel key={givenDatum.id} sign={givenDatum.sign} givenDatum={givenDatum} />
    })}
    
    </div>
    </>
  )
}
