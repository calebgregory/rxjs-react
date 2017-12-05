import React, { Component } from 'react';
import './App.css';

import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.setState({
            showButton: !this.state.showButton
          })}>
            Toggle 'click me' button
          </button>
        </div>
        <div>
          {this.state.showButton ?
            <Button /> :
            null
          }
        </div>
      </div>
    );
  }
}

export default App;
