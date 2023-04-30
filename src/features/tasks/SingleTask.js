import { useDispatch, useSelector } from "react-redux"
import { taskToggled, getTaskById } from "./tasksSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const SingleTask = ({ id }) => {
    const dispatch = useDispatch()
    const task = useSelector(state => getTaskById(state, id))


    console.log(task.completed)
    return (
        <div>
            <label htmlFor={task.id} >
                {task.completed ?
                    < FontAwesomeIcon icon={faCircleCheck} />
                    : < FontAwesomeIcon icon={faCircle} />}
            </label>
            <input type="checkbox" id={task.id} name={task.id} checked={task.completed} onChange={() => dispatch(taskToggled(task.id))} />
            <h2>{task.task}</h2>
        </div>
    )
}

export default SingleTask

    // < FontAwesomeIcon icon = { faCircleCheck } />
    // < FontAwesomeIcon icon = { faCircle } />