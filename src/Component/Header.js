import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component{

    render() {
        return (
            <nav className="navbar navbar-light bg-warning">
                <span className="navbar-brand mb-0 h1">Counter: {this.props.counterState.counter}</span>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        counterState: state.ctx
    }
}

export default connect(mapStateToProps)(Header);
