import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {updateInfo} from './ducks/reducer';
import Window from './Window';


class App extends Component {
  constructor(){
    super()

    this.state = {
      name: '', 
      city: ''
    }

  }
  render() {
    const {updateInfo} = this.props
    return (
      <div className="trooper">
      <div className="App">
        <h4> Name: </h4>
        <input onChange={(e) => this.setState({name: e.target.value})}/>
        <h4> City: </h4>
        <input onChange={ (e) => this.setState({city: e.target.value})}/>

        <button onClick={() => updateInfo(this.state)}> Submit </button>
      </div>
      <div>
        <Window/>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {name, city} = state
  return {
    name,
    city
  }
  
}

export default connect(mapStateToProps, {updateInfo})(App)
