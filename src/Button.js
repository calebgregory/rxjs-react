import React, { Component } from 'react';
import { Observable } from 'rxjs-es/Observable';
import 'rxjs-es/add/observable/fromEvent';

import Agent from './Agent';

class Button extends Component {
  componentDidMount() {
    this.click$ = Observable.fromEvent(this.button, 'click');
    this.agentRegistryID = Agent.addStream(this.click$);
  }

  componentWillUnmount() {
    Agent.removeStream(this.agentRegistryID);
  }

  render() {
    return (
      <button ref={(el) => this.button = el}>click me</button>
    );
  }
}

export default Button;
