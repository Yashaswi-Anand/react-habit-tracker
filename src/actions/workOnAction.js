import { ADD, UPDATE, DELETE, UPDATE_STATUS_7DAYS } from "./actionType";

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

export const updateHabitStatusOfPastSevenDays = (index, id) =>({
    type: UPDATE_STATUS_7DAYS,
    index: index,
    id: id
})