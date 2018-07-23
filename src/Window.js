import React, { Component } from 'react';
import {connect} from 'react-redux';

class Window extends Component {
    
    render(){
        const {name, city} = this.props;

        return (
            <div>
            <p> {name} is from {city}. </p>
            
            </div>
        )
    }
}
function mapStateToProps(state){
    const {name, city} = state

    return {
        name,
        city
    }
}
export default connect(mapStateToProps)(Window)

