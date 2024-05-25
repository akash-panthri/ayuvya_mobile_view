
import React from 'react'

export default function PraiseButton({praiseOpt , buttonClicked , setButtonClicked}) {
  return (
    <div className={`${buttonClicked === praiseOpt.option ? 'bg-[#a8ebbf] text-[#508760]': 'bg-[#dedad7] text-[#959794]'} py-1 px-5 rounded-xl`} onClick={()=> setButtonClicked(praiseOpt.option)}>{praiseOpt.option}</div>
  )
}
