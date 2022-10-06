import { ADD, UPDATE, DELETE } from "./actionType";

export const addHabits = (text) =>({
    type: ADD,
    payload: text
})

export const updateHabits = () =>({
    type: UPDATE
})

export const deleteHabits = () =>({
    type: DELETE
})