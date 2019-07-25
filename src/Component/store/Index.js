import { createStore,combineReducers,applyMiddleware,compose } from "redux";

import thunk from 'redux-thunk';

import CounterReducer from "./reducer/CounterReducer";
import ResultReducer from "./reducer/ResultReducer";





const AllReducers = combineReducers({
    ctx: CounterReducer,
    res: ResultReducer

})


const middleWare = [thunk];


const store = createStore(AllReducers , compose(applyMiddleware(...middleWare) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//use apply middleWare thunk for async function in dispatcher from front end request.
// thunk middleware will take care of functional actions.

export default store;
