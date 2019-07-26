export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const STORERESULT = 'STORERESULT';
export const DELETERESULT = 'DELETERESULT';

export const increment = (num) => {
    return {
        type: INCREMENT,
        value: num
    }
}
