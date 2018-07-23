import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {updateName} from './ducks/reducer';
import Window from './Window';


class App extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }

  }
  render() {
    const {updateName} = this.props
    return (
      <div className="trooper">
      <div className="App">
        <input onChange={(e) => this.setState({input: e.target.value})}/>

        <button onClick={() => updateName(this.state.input)}> Submit </button>
      </div>
      <div>
        <Window/>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {name} = state
  return {
    name
  }
  
}

export default connect(mapStateToProps, {updateName})(App)
