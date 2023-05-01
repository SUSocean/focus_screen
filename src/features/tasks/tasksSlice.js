import { createSlice, createSelector } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = []

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAded: (state, action) => {
            state.unshift({
                task: action.payload,
                completed: false,
                id: nanoid()
            })
        },
        taskToggled: (state, action) => {
            const id = action.payload
            const allTasksWithToggled = state.map(task => {
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
            allTasksWithToggled.sort(function (a, b) {
                let x = a.completed
                let y = b.completed
                if (!x && y) { return -1 }
                if (x && !y) { return 1 }
                return 0
            })
            return allTasksWithToggled
        },
        taskDeleted: (state, action) => {
            const id = action.payload
            const filteredTasks = state.filter(task => task.id !== id)
            return filteredTasks
        }
    }
})

export default tasksSlice

export const { taskAded, taskToggled, taskDeleted } = tasksSlice.actions
export const getTasks = (state) => state.tasks
export const getTaskById = (state, id) => state.tasks.find(task => task.id === id)