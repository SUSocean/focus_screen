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
            const currentTask = state.filter(task => task.id === id)[0]
            const currentTaskChanged = { ...currentTask, completed: !currentTask.completed }
            return [...state.filter(task => task.id !== id), currentTaskChanged]
        }
    }
})

export default tasksSlice

export const { taskAded, taskToggled } = tasksSlice.actions
export const getTasks = (state) => state.tasks
export const getTaskById = (state, id) => state.tasks.find(task => task.id === id)