import React, { useState } from "react";
function ToDoForm ({addTask}) {
    const [userInput, setUserInput] = useState('')
    const [err, setErr] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInput.length > 40) {
            setErr(true)
        } else {
        addTask(userInput)
        setUserInput("")
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Введите задачу..." value={userInput} onChange={e => {
                setUserInput(e.target.value)
                setErr(false)
            }} onKeyDown={handleKeyDown}/>
            <button disabled={err}>Добавить</button>
            {err ? <h2 style={{color: "red"}}>Максимальное количество символов - 40</h2> : null}
        </form>
    )
    
}


export default ToDoForm