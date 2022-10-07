import { ADD, UPDATE, DELETE, UPDATE_STATUS_7DAYS } from '../actions/actionType';

const initalState = [
    {
        habit: "book",
        id: 758,
        status: ['NONE','NONE','NONE','NONE','NONE','NONE','NONE'],
        date:['Oct 07 2022', 'Oct 06 2022', 'Oct 05 2022', 'Oct 04 2022', 'Oct 03 2022', 'Oct 02 2022', 'Oct 01 2022']
    }
]

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
        
        case UPDATE_STATUS_7DAYS:
            var data = [...state]
            var habitItem = data.find(ele => ele.id === action.id)
            var newStatus = '';
            if (habitItem.status[action.index] === 'NONE') {
                newStatus = "DONE"
            } else if (habitItem.status[action.index] === 'DONE') {
                newStatus = "NOT-DONE"
            } else {
                newStatus = "NONE"
            }
            habitItem.status[action.index] = newStatus;
            const itemIndex = data.findIndex(ele => ele.id === action.id)
            data[itemIndex] = habitItem
            return data
            
        default:
            return state
    }
}