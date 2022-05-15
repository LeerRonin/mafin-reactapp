import React from 'react'
import Total from './Home/Total'
import Table from './Home/Table'
import Task from './Home/Task'


const Home = () => {
  return (
    <div className='p-10 h-screen w-screen grid auto-rows-[1fr_4fr_1fr] gap-10 bg-{var(--tg-theme-bg-color)}'>
        <Total />
        <Table />
        <Task />
    </div>
  )
}

export default Home