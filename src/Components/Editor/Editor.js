import React from 'react';
import './Editor.css';

const Editor = (props)=>{
//    const HandleChange = ()=>{
      
//     } 
console.log(props.marked);

    return(
           <textarea  id="editor"
            onChange ={props.onChange}
            value={props.markedown}
            type="text"
            />
            
           
        
    )
}
export default Editor;