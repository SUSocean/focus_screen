import { getTasks, taskAded } from "./tasksSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import SingleTask from "./SingleTask"
const TasksList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(getTasks)
    console.log(tasks)
    const [input, setInput] = useState('')
    const renderedTasks = tasks.map(task => <SingleTask task={task} />)
    return (
        <>
            <h2>Tasks List</h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch(taskAded(input))}>add task</button>
            {renderedTasks}
        </>
    )
}

export default TasksList