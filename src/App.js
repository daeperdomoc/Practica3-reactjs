import React, { Component } from 'react';
import {List} from './Components/List';
import {MiniForm} from './Components/MiniForm';

class App extends Component {
  
  render() {
    return (
      <div>
        <MiniForm question_id="" />
        <List question_id="" />
      </div>
    );
  }
}

export default App;
