import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div id='tasklist' className='flex mt-10 overflow-x-auto screen justify-between gap-5'>
      <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.new_task}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed} </h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400 text-black '>
        <h2 className='text-3xl font-semibold'> {data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'> {data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
