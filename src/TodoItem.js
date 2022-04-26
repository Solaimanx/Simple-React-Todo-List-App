import React from 'react'

const Todo = ({todo, index, markComplete}) =>(
    <div className="todo">
        <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
            <input type={"checkbox"} onChange={() => markComplete(index)} name={"completed"} id={todo.id}/>{' '}
            {todo.text}
        </p>
    </div>
);   


export default Todo