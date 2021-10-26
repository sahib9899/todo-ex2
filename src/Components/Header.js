import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, fetchData } from '../Actions'

const Header = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    console.log(input)
  return (
    <>
      <header style={{ height: "3rem" }}>
        <input type="text" value={input} placeholder='Enter task' onChange={(e)=>(setInput(e.target.value))}/>
        <button onClick={()=>{ dispatch(addTask(input));setInput('')}}>Add</button>
        <button onClick={()=>dispatch(fetchData())}>Fetch data</button>
      </header>
    </>
  );
}

export default Header;
