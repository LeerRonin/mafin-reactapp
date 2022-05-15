import React from 'react'
import Total from './Home/Total'
import Table from './Home/Table'
import Task from './Home/Task'


const Home = () => {
  return (
    <div className='p-10 bg-inherit h-screen w-screen grid auto-rows-[1fr_2fr_1fr] gap-10 '>
        <Total />
        <Table />
        <Task />
    </div>
  )
}

export default Home