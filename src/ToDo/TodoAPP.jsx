import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import './ToDo.css';

function TodoAPP ()  {
    const [todo, setTodo] = useState([])
  const addTask = (text) => {
    if (text) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        taskText: text,
        isDone: false
      }
      setTodo([...todo, newItem])
    }
  }
  const removeTask = (id) => {
    setTodo(todo.filter(elem => {
      return (elem.id !== id)
    }))
  }

  const handleToggle = (id) => {
    setTodo(todo.map(elem => {
      if (elem.id === id) {
        elem.isDone = !elem.isDone
      }
      return elem
    }))
  }
   return (
    <div className="App">
      <header>
        <h1>Количество задач {todo.length}</h1>
      </header>
    <ToDoForm addTask={addTask}/>
      {
      todo.map(elem => {
        return (
          <ToDo key={elem.id}
                todo={elem}
                removeTask={removeTask}
                handleToggle={handleToggle}
          />
        )
      })}
    </div>
  );
}
export default TodoAPP