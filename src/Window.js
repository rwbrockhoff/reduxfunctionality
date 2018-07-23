import React, { Component } from 'react';
import {connect} from 'react-redux';

class Window extends Component {
    
    render(){
        const {name} = this.props;

        return (
            <p> {name} </p>
        )
    }
}
function mapStateToProps(state){
    const {name} = state

    return {
        name
    }
}
export default connect(mapStateToProps)(Window)

