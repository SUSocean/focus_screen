import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAded: (state, action) => {
            state.unshift({
                task: action.payload,
                completed: false
            })
        }
    }
})

export default tasksSlice

export const { taskAded } = tasksSlice.actions

export const getTasks = (state) => state.tasks