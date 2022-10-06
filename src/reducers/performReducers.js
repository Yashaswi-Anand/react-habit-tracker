import { ADD, UPDATE, DELETE } from '../actions/actionType';

const initalState = []

export default function performReducer(state = initalState, action) {

    switch (action.type) {
        case ADD:
            var data = [...state]
            data.push(action.payload)
            return data

        case UPDATE:
            var data = [...state]
            var habitItem = data.find(ele => ele.id === action.payload)
            const index = data.findIndex(ele => ele.id === action.payload)
            // console.log(habitItem.status[0]);
            var newStatus = '';
            if (habitItem.status[0] === 'NONE') {
                newStatus = "DONE"
            } else if (habitItem.status[0] === 'DONE') {
                newStatus = "NOT-DONE"
            } else {
                newStatus = "NONE"
            }
            habitItem.status[0] = newStatus;
            data[index] = habitItem;
            return data

        case DELETE:
            var data = [...state]
            data = data.filter(ele => ele.id !== action.payload)
            return data
            
        default:
            return state
    }
}