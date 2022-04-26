import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodosList";


function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {text:todo}] );
    };



    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };


    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <TodoList todos={todos} markComplete={markComplete} />
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
