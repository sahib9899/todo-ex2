import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../Actions";

function MainSection() {
  const [post, setPost] = useState(null)
  const data = useSelector((state) => state.addNewTask);
  const fetchData = useSelector((state)=> state.fetchReducer);
  console.log(fetchData,'fetch')
  const [show, setShow] = useState(false)
  console.log(data);
  const dispatch = useDispatch();

  function handleUpdate(task) {
      setShow(true);
      
       if(show===true){
           const newTask =  prompt("hello",task);
           dispatch(updateTask(task, newTask))    
       }    
        
  }
  async function handle(){
    await axios.get('https://jsonplaceholder.typicode.com/posts/4').then((response)=>{
    setPost(response.data)})
  }


  console.log(post,'55')

 

  return (
    <>
      {data.map((task, index) => {
        return (
          <div>
            <label>{task}</label>
            <button onClick={()=>dispatch(removeTask(index))}>delete</button>
            <button onClick={()=>handleUpdate(task)}>update</button>
          </div>
        );
      })}
      <button onClick={()=>handle()}> FEtch</button>
      {post!== null ? <div>{post.title}</div> : <div>No data</div>}
      {
        fetchData.map((task)=>{
          return (
            <div>
              <label>{task.title}</label>
            </div>
          )
        })
      }
      
  
    </>
  );
}

export default MainSection;
