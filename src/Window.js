import React, { Component } from 'react';
import {connect} from 'react-redux';

class Window extends Component {
    
    render(){
        const {name, city, st} = this.props;

        return (
            <div>
            <p> {name} is from {city}, {st} </p>
            
            </div>
        )
    }
}
function mapStateToProps(state){
    const {name, city, st} = state

    return {
        name,
        city, 
        st
    }
}
export default connect(mapStateToProps)(Window)

