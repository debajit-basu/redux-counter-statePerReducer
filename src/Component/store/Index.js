import { createStore,combineReducers,applyMiddleware,compose } from "redux";

// import thunk from 'redux-thunk';

import CounterReducer from "./reducer/CounterReducer";
import ResultReducer from "./reducer/ResultReducer";





const AllReducers = combineReducers({
    ctx: CounterReducer,
    res: ResultReducer

})

//Middleware function is known as curried function
const logger = store => {
    return next => {
        return action => {
            console.log("[middleware] dispatching executed and now state is " , store.getState());
            console.log("[middleware] dispatching executed" , action);
            const result = next(action);
            console.log("[middleware] next state is" , store.getState());
            return result
        }
    }
}


// const middleWare = [thunk];
// applyMiddleware is enhancer..........

const store = createStore(AllReducers , compose(applyMiddleware(logger) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));



// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//use apply middleWare thunk for async function in dispatcher from front end request.
// thunk middleware will take care of functional actions.

export default store;
