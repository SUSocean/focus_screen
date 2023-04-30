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
            const newTasks = state.map(task => {
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
            state = newTasks
        }
    }
})

export default tasksSlice

export const { taskAded, taskToggled } = tasksSlice.actions
export const getTasks = (state) => state.tasks
export const getTaskById = (state, id) => state.tasks.find(task => task.id === id)