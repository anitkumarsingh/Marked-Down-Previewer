import React, { Component } from 'react';
import './App.css';
import Editor from './Components/Editor/Editor';
import Preview from './Components/Previewer/Preview';
import marked from 'marked';
import Toolbar from './Components/Toolbar/Toolbar';


marked.setOptions({
  breaks: true,
  tables: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const placeholder = `# Welcome to my mark down previewer`;

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
      <div className="container-fluid" id="container-root">
        <div className="row">
        <div className="col">
            <Toolbar text="Editor"/>
            <Editor 
            onChange ={this.changeHandler}
            marked ={this.state.marked}
            />
        </div>
        <div className="col-8">
            <Toolbar text="Preview"/>
            <Preview  marked={this.state.marked}/>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
