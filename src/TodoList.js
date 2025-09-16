import React from 'react'
import './TodoList.css'
import { LuNotebookPen } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";



const TodoList = () => {
  return (
    <div className='todopage'>
 <div className='todo-container'>
<div class="todo-header">
     <h2>ToDo List <LuNotebookPen /></h2>
     
</div>
<div class="todo-body">
<input
    type="text"
    id="todoText"
    class="todo-input"
    placeholder="Add your items"
/>
<FaCirclePlus className='plus'/>
</div>
<h5 className="Alert">Alert</h5>
<ul className="list-items">Complete the blog today</ul>


 </div>
 </div>

  )
}

export default TodoList
