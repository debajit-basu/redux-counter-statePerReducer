import * as actionType from '../Action/actionType';

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState , action) => {
    switch(action.type){
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.DECREMENT:
            if(state.counter < 1){
                return state
            }else{
                return {
                    ...state,
                    counter: state.counter - action.value
                }
            }


        default:
            return state
    }
}

export default CounterReducer;
