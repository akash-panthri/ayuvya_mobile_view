import React from 'react'
import PraiseButton from './PraiseButton'

export default function PraiseSection({praiseOption}) {
  return (
    <div className='flex flex-row'>
    {praiseOption.map(praiseOpt=>{
        <PraiseButton key={praiseOpt.id} option={praiseOpt.option} />
    })}
    </div>
  )
}
