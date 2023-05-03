import { useDispatch } from "react-redux"
import { useState } from "react"
import { taskAded } from "./tasksSlice"
import { nanoid } from "@reduxjs/toolkit"
const TaskForm = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const canSubmit = Boolean(input.length > 0)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(taskAded(input))
        const oldStorage = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : []
        oldStorage.unshift({
            task: input,
            completed: false,
            id: nanoid()
        })
        setInput('')
        localStorage.setItem('tasks', JSON.stringify(oldStorage))
    }


    return (
        <form onSubmit={e => handleSubmit(e)} className="task-add-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="climb a tree"
            />
            <button disabled={!canSubmit}></button>
        </form>
    )
}

export default TaskForm