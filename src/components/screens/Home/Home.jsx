import React from 'react'
import Total from './Home/Total'
import Table from './Home/Table'
import Task from './Home/Task'


const Home = () => {
  return (
    <div className='p-10 bg-inherit h-screen grid auto-rows-fr'>
        <Total />
        <Table />
        <Task />
    </div>
  )
}

export default Home