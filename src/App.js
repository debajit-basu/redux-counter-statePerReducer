import React, {Component} from 'react';
import { Badge } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import * as actionType from './Component/store/Action';

import Header from './Component/Header';
import { connect } from 'react-redux';



class App extends Component {

    render() {

        return (

            <div className="App">
                <header className="App-header">
                    <span>Counter APP in Redux with [ Individual Reducer State ] </span>
                </header>

               <div className="container d-flex flex-row justify-content-center mt-3">
                   <Header />
               </div>
                <div className="d-flex flex-row justify-content-center p-2  ">
                    <button onClick={() => { this.props.incCounter() }} className="btn btn-info mr-3">+</button>
                    <button onClick={() => { this.props.decCounter() }} className="btn btn-info">-</button>
                </div>


                <hr/>

                <div className="container d-flex flex-column justify-content-center mt-3 h2">
                    <button onClick={() => { this.props.storeResult(new Date() , this.props.counterState.counter) }} className="btn btn-info">Store Result</button>
                   <u>Result History</u>
                    {
                        this.props.resultState.result.length > 0 && this.props.resultState.result.map((val , i)=> (
                            <div key={i} onClick={() => { this.props.delResult(val.id) }}><Badge color="info">{val.value}</Badge></div>
                        ))
                    }


                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
                return {
                    counterState: state.ctx,
                    resultState: state.res
                }
}

const mapDispatchToProps = (dispatch) => {
                return {
                    incCounter: () => dispatch({type: actionType.INCREMENT , value: 1}),
                    decCounter: () => dispatch({type: actionType.DECREMENT , value: 1}),
                    storeResult: (counterId, value) => dispatch({type: actionType.STORERESULT , cId: counterId , value: value}),
                    delResult: (delId) => dispatch({type: actionType.DELETERESULT , id: delId})
                }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
