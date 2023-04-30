import { getTasks, taskAded } from "./tasksSlice"
import TaskForm from "./TaskForm"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import SingleTask from "./SingleTask"


const TasksList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(getTasks)
    let content
    if (tasks.length < 1) {
        content = <p className="focus-info-message">add your focus for today</p>
    } else {
        content = (
            <div>
                {tasks.map(task => <SingleTask id={task.id} />)}
            </div>
        )
    }

    return (
        <div className="focus-wrapper">
            <TaskForm />
            {content}
        </div>
    )
}

export default TasksList