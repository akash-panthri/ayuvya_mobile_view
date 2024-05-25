"use client"
import React,{useState} from 'react'
import givenData from '../data/popupData.json'
import { RxCross2 } from "react-icons/rx";

import ReviewPanel from './ReviewPanel';
export default function PopupPanel() {
  const [showPanel , setShowPanel] = useState(true)
  return (
    <>

 {
  showPanel?
 
    <div className='w-[80vw] h-[80vh] bg-[#f0f0f0] rounded-3xl px-3 py-1 overflow-hidden'>
    
    <RxCross2 className='text-3xl'onClick={()=>setShowPanel(false)} />
    <div className="text-2xl font-bold">Leave a Review</div>
    {givenData.map(givenDatum =>{
        return <ReviewPanel key={givenDatum.id} sign={givenDatum.sign} givenDatum={givenDatum} />
    })}
    
    </div>:
    <><div className="" onClick={()=>setShowPanel(true)}>Show Panel</div></>
  }
    </>
  )
}
