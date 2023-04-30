import { useDispatch } from "react-redux"
import { useState } from "react"
import { taskAded } from "./tasksSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

const TaskForm = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const canSubmit = Boolean(input.length > 0)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(taskAded(input))
        setInput('')
    }


    return (
        <form onSubmit={e => handleSubmit(e)} className="task-add-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button disabled={!canSubmit}><FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
        </form>
    )
}

export default TaskForm