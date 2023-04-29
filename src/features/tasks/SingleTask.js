import { useDispatch, useSelector } from "react-redux"
import { taskToggled, getTaskById } from "./tasksSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const SingleTask = ({ id }) => {
    const dispatch = useDispatch()
    const task = useSelector(state => getTaskById(state, id))

    const handleClick = () => {
        dispatch(taskToggled(task.id))
    }
    console.log('task', task)
    return (
        <div>
            <label htmlFor={task.id} >
                {task.completed ?
                    < FontAwesomeIcon icon={faCircleCheck} />
                    : < FontAwesomeIcon icon={faCircle} />}
            </label>
            <input type="checkbox" id={task.id} name={task.id} checked={task.completed} onChange={handleClick} />
            <h2>{task.task}</h2>
        </div>
    )
}

export default SingleTask

    // < FontAwesomeIcon icon = { faCircleCheck } />
    // < FontAwesomeIcon icon = { faCircle } />