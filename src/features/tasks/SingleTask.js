import { useDispatch, useSelector } from "react-redux"
import { taskToggled, taskDeleted, getTaskById } from "./tasksSlice"

const SingleTask = ({ id }) => {
    const dispatch = useDispatch()
    const task = useSelector(state => getTaskById(state, id))
    const handleDelete = () => {
        dispatch(taskDeleted(task.id))
        const oldStorage = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : []
        const newStorage = oldStorage.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(newStorage))
    }
    const handleToggle = () => {
        dispatch(taskToggled(task.id))
        const oldStorage = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : []
        const newStorage = oldStorage.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            } else {
                return {
                    ...task
                }
            }
        })
        newStorage.sort((a, b) => {
            let x = a.completed
            let y = b.completed
            if (!x && y) { return -1 }
            if (x && !y) { return 1 }
            return 0
        })
        localStorage.setItem('tasks', JSON.stringify(newStorage))
    }
    return (
        <div className="single-task-wrapper">
            <label htmlFor={task.id} className="input-wrapper">
                <input type="checkbox" id={task.id} name={task.id} checked={task.completed} onChange={handleToggle} />
                <span className="input-checkmark"></span>
            </label>
            <h2>{task.task}</h2>
            <button className="single-task-deleteBtn"
                onClick={handleDelete}
            ></button>
        </div>
    )
}

export default SingleTask