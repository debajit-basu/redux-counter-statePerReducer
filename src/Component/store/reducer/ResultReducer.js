import * as actionType from '../Action/actionType';

const initialState = {
    result: []
}

const ResultReducer = (state = initialState , action) => {
    switch(action.type){

        case actionType.STORERESULT:
            return {
                ...state,
                result: state.result.concat([{id: action.id , value: action.value}])
            }
        case actionType.DELETERESULT:
            return{
                ...state,
                result: state.result.filter((value) => value.id !== action.id)
            }

        default:
            return state
    }
}

export default ResultReducer;
