
import {DECREMENT, INCREMENT} from "./actionType";

export const increment = (num) => {
    return {
        type: INCREMENT,
        value: num
    }
}

export const decrement = (num) => {
    return {
        type:DECREMENT,
        value: num
    }

}
