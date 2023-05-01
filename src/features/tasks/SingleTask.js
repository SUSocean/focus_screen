import { useDispatch, useSelector } from "react-redux"
import { taskToggled, taskDeleted, getTaskById } from "./tasksSlice"

const SingleTask = ({ id }) => {
    const dispatch = useDispatch()
    const task = useSelector(state => getTaskById(state, id))
    return (
        <div className="single-task-wrapper">
            <label htmlFor={task.id} className="input-wrapper">
                <input type="checkbox" id={task.id} name={task.id} checked={task.completed} onChange={() => dispatch(taskToggled(task.id))} />
                <span className="input-checkmark"></span>
            </label>
            <h2>{task.task}</h2>
            <button className="single-task-deleteBtn"
                onClick={() => dispatch(taskDeleted(task.id))}
            ></button>
        </div>
    )
}

export default SingleTask