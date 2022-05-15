import React from 'react'
import Sum from './Total/Sum'

const Total = () => {
  return (
    <div className='bg-slate-600 rounded-full border-black border-8 '>
      <div>
        <div className=''>ВСЕГО</div>
        <Sum />
      </div>
      <div>
        <div className=''>СЕГОДНЯ</div>
        <Sum />
      </div>
    </div>
  )
}

export default Total