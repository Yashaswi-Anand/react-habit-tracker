import { ADD, UPDATE, DELETE } from '../actions/actionType';

const initalState = []

export default function performReducer(state = initalState, action){

    switch(action.type){
        case ADD :
            var data = [...state]
            data.push(action.payload)
            return data
        case UPDATE:
        case DELETE:
        default:
            return state
    }
}