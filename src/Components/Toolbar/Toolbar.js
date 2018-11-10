import React from 'react';
import './Toolbar.css';

const Toolbar = (props) =>{
    return(
        <div className="toolbar-container">
            {props.text}
        </div>
    )
}
export default Toolbar;