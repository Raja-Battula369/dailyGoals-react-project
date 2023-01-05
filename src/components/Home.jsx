import React, { useEffect, useState } from 'react';
import Task from './Task';

const localSave=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[]
const Home = () => {
    const [task,setTask]=useState(localSave);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    
    const submitHandler=(e)=>{
        e.preventDefault();
        setTask([...task,{title,description}])
        setTitle('');
        setDescription('');
         
    };


    const deleteHandler = (index)=> {
        const filterArray=task.filter((val,i)=>{
            return i!==index;
        })

        setTask(filterArray);
        console.log(filterArray);
    };

    useEffect(()=>{
        localStorage.setItem('task',JSON.stringify(task));
    },[task])

  return (
    <div className='container'>
        <h1>Daily Goals</h1>
      <form onSubmit={submitHandler} >
            <input type='text' placeholder='Title' value={title}  onChange={(e)=>setTitle(e.target.value)}></input>
            <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type='submit'>Add</button>
      </form>
       
      {task.map((items,index)=>(
        <Task key={index} Title={items.title} Description={items.description} Index={index} deleteHandler={deleteHandler}/>
      ))}

    </div>
  )
}

export default Home
