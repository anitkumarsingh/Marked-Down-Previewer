import React from 'react';
import './Editor.css';

const Editor = (props)=>{
console.log(props.marked);
    return(
           <textarea  id="editor"
            onChange ={props.onChange}
            value={props.marked}
            type="text"
            /> 
    )
}
export default Editor;