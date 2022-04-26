import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({todos ,markComplete}) => {
    return (
        <div className={"todo-list"}>
                {
                    todos.map((todo, index) => (
                        <TodoItem todo={todo} key={index} index={index} markComplete={markComplete} />
                    ))
                }
        </div>
    );
};


export default Todos;
