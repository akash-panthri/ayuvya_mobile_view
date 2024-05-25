"use client"
import React,{useState} from 'react'
import PraiseButton from './PraiseButton'

export default function PraiseSection({praiseOption}) {
  const [buttonClicked , setButtonClicked] = useState("")
  return (
    <div className='flex flex-row justify-between py-3'>
    
    {praiseOption.map(praiseOpt=>{
     
       return <PraiseButton key={praiseOpt.id} praiseOpt={praiseOpt} buttonClicked={buttonClicked}  setButtonClicked={setButtonClicked} />
    })}
    </div>
  )
}
