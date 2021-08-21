import {createStore} from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { configure } from '@testing-library/dom';

const initialState = { counter:0, showCounter: true}

//we can maniputalte (state.counter--/++) originall state if we are using toolkit

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        Increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
   
})



// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;

// }

// const store = createStore(counterSlice.reducer)
const store = configureStore({
    reducer: counterSlice.reducer
})

//actions
export const counterActions = counterSlice.actions
export default store;