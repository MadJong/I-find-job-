import React from "react";
function ToDo ({todo,removeTask,handleToggle}) {
    return ( 
        <div key={todo.id} className="item-todo">
            <div className={todo.isDone ? "item-text strike" : "item-text"}  onClick={() => {
                handleToggle(todo.id)
            }}>{todo.taskText}</div>
             <div className="item-delete" onClick={() => {
                removeTask(todo.id)
            }}>
                X
            </div>
        </div>

        
    )
}


export default ToDo