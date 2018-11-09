import React, { Component } from 'react';
import './App.css';
import Editor from './Components/Editor/Editor';
import Preview from './Components/Previewer/Preview';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Editor/>
       <Preview/>
      </div>
    );
  }
}

export default App;
