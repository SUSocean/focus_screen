import { getTasks } from "./tasksSlice"
import TaskForm from "./TaskForm"
import { useSelector } from "react-redux"
import SingleTask from "./SingleTask"
import { nanoid } from "@reduxjs/toolkit"

const TasksList = () => {
    const tasks = useSelector(getTasks)
    let content
    if (tasks.length > 0) {
        content = tasks.map(task => <SingleTask id={task.id} key={task.id} />)
    }

    return (
        <div className="focus-wrapper">
            <TaskForm key={nanoid()} />
            {content}
        </div>
    )
}

export default TasksList