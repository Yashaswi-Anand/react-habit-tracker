import { ADD, UPDATE, DELETE } from "./actionType";

export const addHabits = (habit) =>({
    type: ADD,
    payload: habit
})

export const updateHabits = (id) =>({
    type: UPDATE,
    payload: id
})

export const deleteHabits = (id) =>({
    type: DELETE,
    payload: id
})