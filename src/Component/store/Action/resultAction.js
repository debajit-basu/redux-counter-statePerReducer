import {STORERESULT} from "./actionType";

export const saveResult = (counterId , value) => {

    // const newValue = value * 2
    return {
        type:STORERESULT,
        id: counterId,
        value: value
    }
}


/*
export const storeResult = (counterId , value) => {

    return (dispatch) => {
        setTimeout( () => {
            dispatch(saveResult(counterId,value))
        },2000)
    }

}
*/


export const storeResult = (counterId , value) => {

    // This method make function call and store update sync.
    // We can maintain promise here for fetch call also
    // getState provided by thunk to get current state value
    return (dispatch , getState) => {
        setTimeout( () => {
            const oldCounterValue = getState().ctx.counter;
            console.log("Old Counter value is: " , oldCounterValue);
            dispatch(saveResult(counterId,value))
        },2000)
    }

}
