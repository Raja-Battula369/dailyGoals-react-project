import React from 'react'

const Task = ({Title,Description,Index,deleteHandler}) => {
  return (
    <div className='task'>
        <div>
            <p>{Title}</p>
            <span className='span'>{Description}</span>
        </div>
            <button onClick={()=>deleteHandler(Index)}>-</button>
    </div>
  )
}

export default Task
