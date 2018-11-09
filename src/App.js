import React, { Component } from 'react';
import './App.css';
import Editor from './Components/Editor/Editor';
import Preview from './Components/Previewer/Preview';



const placeholder = `Hello World`;

class App extends Component {
  constructor(){
    super();
    this.state ={
      marked: placeholder,
    }
  }
  changeHandler = (e) =>{
    this.setState({
      marked:e.target.value
    })
    // console.log(e.target.value);
  }
  
  
  render() {
    return (
      <div className="App">
       <Editor 
         onChange ={this.changeHandler}
         marked ={this.state.marked}
         />
       <Preview  marked={this.state.marked}/>
      </div>
    );
  }
}

export default App;
